// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2XXRYm8T_RI81gvzuhTuqJIFdWpIQD8M",
  authDomain: "new-homio.firebaseapp.com",
  projectId: "new-homio",
  storageBucket: "new-homio.appspot.com",
  messagingSenderId: "706702767316",
  appId: "1:706702767316:web:51caaa7a07fb82dc41f741",
  measurementId: "G-MX5934TFSB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
 export const auth = getAuth();
