import { db } from './firebase';

export const updateAbout = (userEmail, bio) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection('UserProfile')
      .doc(userEmail)
      .update({
        about: bio,
      })
      .then((ref) => {
        resolve(ref);
      })
      .catch((err) => reject(err));
  });

  return promise;
};

export const getProfile = (userEmail) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection('UserProfile')
      .doc(userEmail)
      .onSnapshot((doc) => {
        resolve(doc);
      });
  });

  return promise;
};
