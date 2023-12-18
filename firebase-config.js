// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoCNoQpHu911lXzrgj6hNlsSG4UUJHqVY",
    authDomain: "pwl-slaxx.firebaseapp.com",
    projectId: "pwl-slaxx",
    storageBucket: "pwl-slaxx.appspot.com",
    messagingSenderId: "822025096981",
    appId: "1:822025096981:web:f1c6f4c6d96df5ace6231c",
    measurementId: "G-1QEL5HBVE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);