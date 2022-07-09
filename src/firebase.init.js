// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWlU20cLMcLY96Muvz4dQnz5NTbmOgbmk",
  authDomain: "gym-trainer-issue.firebaseapp.com",
  projectId: "gym-trainer-issue",
  storageBucket: "gym-trainer-issue.appspot.com",
  messagingSenderId: "860631402063",
  appId: "1:860631402063:web:472f1039e99bf9f1a08c3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;