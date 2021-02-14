import { useContext, useState, useEffect, createContext } from 'react';

import { auth, db } from '../adapters/firebase';
import firebase from 'firebase';

import UploadImage from '../adapters/UploadImage';

import LoadingScreen from '../components/LoadingScreen';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    const threadName = email + '-threads';
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((ref) => {
        db.collection('UserProfile')
          .doc(ref.user.email)
          .set({
            displayName: '',
            photoURL: '',
            about: "Hey there, I'm using WhatsApp",
            threadId: threadName,
          })
          .then(() => {
            db.collection(threadName)
              .add({
                startDate: firebase.firestore.FieldValue.serverTimestamp(),
              })
              .then(() => {
                console.log('thread created');
              });
            console.log('User profile created');
          });
      })
      .catch((error) => console.error(error));
  };

  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const updateDisplayName = (name) => {
    // console.log(name);
    return auth.currentUser
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        db.collection('UserProfile')
          .doc(auth.currentUser.email)
          .update({
            displayName: name,
          })
          .then(() => console.log('Profile updated'));
      })
      .catch((err) => console.error(err));
  };

  const updateProfilePic = (file) => {
    return UploadImage(file).then((url) => {
      auth.currentUser
        .updateProfile({
          photoURL: url,
        })
        .then(() => {
          db.collection('UserProfile')
            .doc(auth.currentUser.email)
            .update({
              photoURL: url,
            })
            .then(() => console.log('Profile updated'));
        })
        .catch((err) => console.error(err));
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [currentUser]);

  const value = {
    currentUser,
    signup,
    signin,
    logout,
    updateDisplayName,
    updateProfilePic,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <LoadingScreen /> : children}
      {/* {!loading && children} */}
    </AuthContext.Provider>
  );
}
