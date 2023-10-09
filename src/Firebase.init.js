// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBykWbRpZb_1xJ8Mv_BalI5hmlSjQDbXXw",
  authDomain: "socal-events-c709e.firebaseapp.com",
  projectId: "socal-events-c709e",
  storageBucket: "socal-events-c709e.appspot.com",
  messagingSenderId: "1010180769960",
  appId: "1:1010180769960:web:34baab2b9a016376fd9a9d"
};

const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
