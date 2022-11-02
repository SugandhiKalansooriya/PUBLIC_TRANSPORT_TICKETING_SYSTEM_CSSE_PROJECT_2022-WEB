import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC2dE3EeCZf5cydww0e9DdJQdjQrJgXolk",
    authDomain: "fir-tutorial-ac926.firebaseapp.com",
    projectId: "fir-tutorial-ac926",
    storageBucket: "fir-tutorial-ac926.appspot.com",
    messagingSenderId: "410811579573",
    appId: "1:410811579573:web:f705a80eb2ce2e84ccd2fc",
    measurementId: "G-H2QNRDQSQW"
  };


  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore();
  