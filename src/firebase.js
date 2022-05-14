// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrDvT5i_meoXBsw54UghyGvMk0coJkPU8",
  authDomain: "batch-jan-firebase.firebaseapp.com",
  projectId: "batch-jan-firebase",
  storageBucket: "batch-jan-firebase.appspot.com",
  messagingSenderId: "257036843982",
  appId: "1:257036843982:web:2a65dc0463fe23035b499f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// export const storage = getStorage();



