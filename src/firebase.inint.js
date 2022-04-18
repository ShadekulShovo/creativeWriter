// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjLhK3OpDvg1oA5hys1SNW4mIA6qNIHWc",
  authDomain: "wildlife-faa1f.firebaseapp.com",
  projectId: "wildlife-faa1f",
  storageBucket: "wildlife-faa1f.appspot.com",
  messagingSenderId: "915583394429",
  appId: "1:915583394429:web:de160eba1924f68aedc714",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
