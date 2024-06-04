// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDm-vZVTO1_kDoS9-sQ79iNA5wkFH1qAg",
  authDomain: "netflixgpt-55afc.firebaseapp.com",
  projectId: "netflixgpt-55afc",
  storageBucket: "netflixgpt-55afc.appspot.com",
  messagingSenderId: "314209384697",
  appId: "1:314209384697:web:8f69b3a1eaeb2672ef4a28",
  measurementId: "G-B7FRVJ4NK8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();