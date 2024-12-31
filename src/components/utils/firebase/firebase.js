import { initializeApp } from "firebase/app";
import { getMessaging,getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCSAloRZeWAeLW3UyROIxgErZN_lRr4z1c",
  authDomain: "push-notification-6cecf.firebaseapp.com",
  projectId: "push-notification-6cecf",
  storageBucket: "push-notification-6cecf.firebasestorage.app",
  messagingSenderId: "547634632636",
  appId: "1:547634632636:web:490bdf57aaea15a9433db9",
  measurementId: "G-HPDTCH9GFG",
};
initializeApp(firebaseConfig);
export const messaging = getMessaging();

export const requestForToken = () => {
    return getToken(messaging, { vapidKey: 'BI6a8b38muUqQtDHzHse12wy-As4ODtAL_7SEHnNOOZkebwPjbCKoaAgZDeI1kKLP1sFWATDuGQNerM-3naYqWI' })
      .then((currentToken) => {
        if (currentToken) {
          console.log('current token for client: ', currentToken);
          // Perform any other neccessary action with the token
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  };

  export const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        console.log("payload", payload)
        resolve(payload);
      });
    });