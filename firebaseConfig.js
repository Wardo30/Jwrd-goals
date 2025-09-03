import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCjji487HtaM_0AVSvspezMC7Y_fbzveyg",
  authDomain: "jwrd-goals.firebaseapp.com",
  projectId: "jwrd-goals",
  storageBucket: "jwrd-goals.firebasestorage.app",
  messagingSenderId: "5273182668",
  appId: "1:5273182668:web:0d581c56567c104f03bd69"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//