import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjLhK3OpDvg1oA5hys1SNW4mIA6qNIHWc",
  authDomain: "wildlife-faa1f.firebaseapp.com",
  projectId: "wildlife-faa1f",
  storageBucket: "wildlife-faa1f.appspot.com",
  messagingSenderId: "915583394429",
  appId: "1:915583394429:web:de160eba1924f68aedc714",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
