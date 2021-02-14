import { db } from './firebase';

export const searchContact = (contactEmail) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection('UserProfile')
      .doc(contactEmail)
      .get()
      .then((doc) => {
        resolve(doc);
      })
      .catch((err) => {
        reject(err);
      });
  });

  return promise;
};

export const addContact = (
  ownerEmail,
  contactEmail,
  contactName,
  contactAbout,
  contactPhotoURL,
  contactThread
) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection('Contacts')
      .add({
        owner: ownerEmail,
        contactEmail: contactEmail,
        contactName: contactName,
        contactAbout: contactAbout,
        contactPhotoURL: contactPhotoURL,
        contactThread: contactThread,
      })
      .then((doc) => {
        resolve(doc);
      })
      .catch((err) => {
        reject(err);
      });
  });

  return promise;
};

// export const getContacts = (ownerEmail) => {
//   return db
//     .collection('Contacts')
//     .where('ownerEmail', '==', ownerEmail).onSnapshot(docs => {

//     })

// };
