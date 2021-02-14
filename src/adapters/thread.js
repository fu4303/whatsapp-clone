import { db } from './firebase';
import firebase from 'firebase';
import randomID from 'random-id';

// generate message thread id
const generateMessageCollectionID = () => {
  const id = randomID(10, 'aA0');
  return id;
};

// create chat thread for two users
export const createChatThread = (threadId1, threadId2, member1, member2) => {
  let promise = new Promise(function (resolve, reject) {
    const messageId = generateMessageCollectionID();

    db.collection(threadId1)
      .add({
        member: member2,
        messageID: messageId,
      })
      .then(() => {
        db.collection(threadId2)
          .add({
            member: member1,
            messageID: messageId,
          })
          .then(() => {
            db.collection(messageId).add({
              startDate: firebase.firestore.FieldValue.serverTimestamp(),
            });
            resolve(messageId);
          })
          .catch((err) => {
            reject(err);
          });
      });
  });

  return promise;
};

// check if thread exist
export const checkIfThreadExists = (threadId, contact) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection(threadId)
      .where('member', '==', contact)
      .get()
      .then((docs) => {
        resolve(docs);
      })
      .catch((err) => {
        reject(err);
      });
  });

  return promise;
};

// send message
export const sendMessage = (message, sender, threadId) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection(threadId)
      .add({
        message: message,
        sender: sender,
        sentAt: firebase.firestore.FieldValue.serverTimestamp(),
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

export const getMessages = (threadId) => {
  let promise = new Promise(function (resolve, reject) {
    db.collection(threadId)
      .orderBy('sentAt')
      .onSnapshot((docs) => {
        resolve(docs);
      });
  });

  return promise;
};
