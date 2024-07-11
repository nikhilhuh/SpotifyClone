import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD2_4xGxJ3L6I3H8F8TA5uKu5-eoZIlinE",
    authDomain: "spotify-clone-81a55.firebaseapp.com",
    projectId: "spotify-clone-81a55",
    storageBucket: "spotify-clone-81a55.appspot.com",
    messagingSenderId: "36461942392",
    appId: "1:36461942392:web:dc3ad7b3613cf80a8cff8d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };