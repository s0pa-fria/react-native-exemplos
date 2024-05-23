// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf36_bsMuS1Q3rowdE1e5uW4JPUlVzRoM",
  authDomain: "lista-de-linguagens-19edb.firebaseapp.com",
  databaseURL: "https://lista-de-linguagens-19edb-default-rtdb.firebaseio.com",
  projectId: "lista-de-linguagens-19edb",
  storageBucket: "lista-de-linguagens-19edb.appspot.com",
  messagingSenderId: "1062823806871",
  appId: "1:1062823806871:web:660b7fae63333df2f666d2",
  measurementId: "G-1GQ7RGRK32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase(app); //Inicializa serviço Realtime Database

export {db};