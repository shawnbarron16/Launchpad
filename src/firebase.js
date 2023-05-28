// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getFunctions } from 'firebase/functions';
import { logger } from "firebase/functions";
import { onRequest } from "firebase/functions";
import { onDocumentCreated } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3DGnIStvRnV0Ddbh0oOaDF2mYltL4pSM",
  authDomain: "launchpad-dev-8e6d1.firebaseapp.com",
  projectId: "launchpad-dev-8e6d1",
  storageBucket: "launchpad-dev-8e6d1.appspot.com",
  messagingSenderId: "704044338727",
  appId: "1:704044338727:web:f524989f23f70f99544802",
  measurementId: "G-KV843E2B7V"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const functions = getFunctions(app)
db.settings({ timestampsInSnapshots: true}) 