/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyCSAloRZeWAeLW3UyROIxgErZN_lRr4z1c",
    authDomain: "push-notification-6cecf.firebaseapp.com",
    projectId: "push-notification-6cecf",
    storageBucket: "push-notification-6cecf.firebasestorage.app",
    messagingSenderId: "547634632636",
    appId: "1:547634632636:web:490bdf57aaea15a9433db9",
    measurementId: "G-HPDTCH9GFG",
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});