import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-ffHhoDX4PxLFAuEk0riTZwXjzoQPk3E",
  authDomain: "test-5431f.firebaseapp.com",
  projectId: "test-5431f",
  storageBucket: "test-5431f.firebasestorage.app",
  messagingSenderId: "1070984436514",
  appId: "1:1070984436514:web:556de5007fe76ce505e37b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}