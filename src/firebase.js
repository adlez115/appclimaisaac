// import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';
// import 'firebase/app';
// import 'firebase/messaging';


const firebaseConfig = {
    apiKey: "AIzaSyAgo0X5d9Tmo6nh7MyMmV7Rm8C4eyrtTW0",
    authDomain: "notificaciones-push-e37a3.firebaseapp.com",
    projectId: "notificaciones-push-e37a3",
    storageBucket: "notificaciones-push-e37a3.appspot.com",
    messagingSenderId: "956307066534",
    appId: "1:956307066534:web:9f4a7040a7ef227f5c6e67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export default messaging;
// export {app};
