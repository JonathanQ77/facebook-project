// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6OlVaOLwCkf9lieLug4qoyM0-F2juuRQ",
  authDomain: "believemy-facebook-9495a.firebaseapp.com",
  projectId: "believemy-facebook-9495a",
  storageBucket: "believemy-facebook-9495a.appspot.com",
  messagingSenderId: "26490366365",
  appId: "1:26490366365:web:835aceba288a7495936774",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
