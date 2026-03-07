importScripts('https://www.gstatic.com/firebasejs/11.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyAam1HxZANk_AjQG_nScjoYBPGB8y2Xf-8",
  authDomain: "nexus-os-949c4.firebaseapp.com",
  projectId: "nexus-os-949c4",
  storageBucket: "nexus-os-949c4.firebasestorage.app",
  messagingSenderId: "329666668961",
  appId: "1:329666668961:web:df7689e4ea2c3e9119c3e0",
  measurementId: "G-DR9QGBXTK6"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/apple-touch-icon.png' // Matches your iOS icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
