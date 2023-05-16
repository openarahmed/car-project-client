// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz0ruY4_7KsSEDUMJdxCcnSu0SsrnN6UQ",
  authDomain: "car-project-9dd6d.firebaseapp.com",
  projectId: "car-project-9dd6d",
  storageBucket: "car-project-9dd6d.appspot.com",
  messagingSenderId: "779134020849",
  appId: "1:779134020849:web:727b291c18e7e4b83dcd50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app