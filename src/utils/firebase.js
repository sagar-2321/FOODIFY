// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, signInWithRedirect, getRedirectResult , onAuthStateChanged} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCir7crXrdcPpyhBDS2wn4tkScNot3jiUY",
  authDomain: "sagar-foodify.firebaseapp.com",
  projectId: "sagar-foodify",
  storageBucket: "sagar-foodify.firebasestorage.app",
  messagingSenderId: "270931311664",
  appId: "1:270931311664:web:d6bf95b3de43fea4cb81f5",
  measurementId: "G-PY8LGETWQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, signInWithPopup, signOut , provider ,signInWithRedirect ,getRedirectResult , onAuthStateChanged};