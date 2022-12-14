// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmHZZI_PqWT5oV8f5Hiv-bS7Q8dSPB4M8",
    authDomain: "fir-auth-378f6.firebaseapp.com",
    projectId: "fir-auth-378f6",
    storageBucket: "fir-auth-378f6.appspot.com",
    messagingSenderId: "581451072546",
    appId: "1:581451072546:web:b4768e143f3b74a949b67b"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export const db = getFirestore(app)
export { auth };