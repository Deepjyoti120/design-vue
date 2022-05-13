import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAuVWeVK5V4Z_dje-MYB31N8ZQUjLGk1yU",
  authDomain: "app-tournament-91a3f.firebaseapp.com",
  projectId: "app-tournament-91a3f",
  storageBucket: "app-tournament-91a3f.appspot.com",
  messagingSenderId: "153593789769",
  appId: "1:153593789769:web:73855e2a912982b7bd6e98",
  measurementId: "G-XWP54BM498"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
