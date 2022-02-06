import { initializeApp } from 'firebase/app';
import { getDatabase, ref}  from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyBEPLzVTSJQYrWYyAil4QXP20VW2IgdWb0",
  authDomain: "recepteva-a595c.firebaseapp.com",
  databaseURL: "https://recepteva-a595c-default-rtdb.europe-west1.firebasedatabase.app",
  projectID: "recepteva-a595c",
  storageBucket: "recepteva-a595c.appspot.com",
  messagingSenderId: "110174980961",
  appId: "1:110174980961:web:c005126f43ce5015111320",
  measurementId: "G-2LKHNPB3SL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const databaseRef = getDatabase(app);
export const recipesRef = ref(databaseRef,"recipes");
