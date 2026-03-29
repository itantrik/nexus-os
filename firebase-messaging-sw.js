importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

// Fill this with your Firebase Console Details
const firebaseConfig = {
  apiKey: "AIzaSyAam1HxZANk_AjQG_nScjoYBPGB8y2Xf-8",
  authDomain: "nexus-os-949c4.firebaseapp.com",
  projectId: "nexus-os-949c4",
  storageBucket: "nexus-os-949c4.firebasestorage.app",
  messagingSenderId: "329666668961",
  appId: "1:329666668961:web:df7689e4ea2c3e9119c3e0",
  measurementId: "G-DR9QGBXTK6"
};

// Initialize Firebase App
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
