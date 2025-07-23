// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from 'firebase/storage'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDH378ngOisc0XC2ZVEwkUbKu8FW1Q4Tvg",
    authDomain: "sportignite-88208.firebaseapp.com",
    databaseURL: "https://sportignite-88208-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sportignite-88208",
    storageBucket: "sportignite-88208.firebasestorage.app",
    messagingSenderId: "58454763639",
    appId: "1:58454763639:web:d428fd427743d7b8c97e72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)