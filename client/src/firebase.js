import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import firebase from "firebase/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8UkwP_-hpunn7zrMHSPwCPf0SczYIXGY",
  authDomain: "netflix-1b1a6.firebaseapp.com",
  projectId: "netflix-1b1a6",
  storageBucket: "netflix-1b1a6.appspot.com",
  messagingSenderId: "808110046619",
  appId: "1:808110046619:web:e6158681bbf762a20f753e",
  measurementId: "G-D7ZFQNJ9Y5",
};

firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();
const storage = firebase.storage();
export default storage;
