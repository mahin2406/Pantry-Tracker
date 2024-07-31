// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdbu3j-8rMugUdD8KgTGcrRBkOAg6GNA4",
  authDomain: "inventory-management-524d5.firebaseapp.com",
  projectId: "inventory-management-524d5",
  storageBucket: "inventory-management-524d5.appspot.com",
  messagingSenderId: "517499984886",
  appId: "1:517499984886:web:cde8da745e51985f28c5d7",
  measurementId: "G-3TXMQS8SZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};