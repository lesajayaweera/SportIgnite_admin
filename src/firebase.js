// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8S9T7hFds37nEBOn80XaYy31nkgzVV8M",
    authDomain: "sportignite3.firebaseapp.com",
    projectId: "sportignite3",
    storageBucket: "sportignite3.firebasestorage.app",
    messagingSenderId: "77184994425",
    appId: "1:77184994425:web:e39877861c9352cb0818a8",
    measurementId: "G-ZHEXSQX2LV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };