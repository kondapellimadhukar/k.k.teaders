// Firebase Initialization Configuration for AgroAssist
const firebaseConfig = {
  apiKey: "AIzaSyAsICu0wYSp7sVwI3vfnX_AsUrkMsJsP78",
  authDomain: "agroassist-6cfc8.firebaseapp.com",
  projectId: "agroassist-6cfc8",
  storageBucket: "agroassist-6cfc8.appspot.com",
  messagingSenderId: "936507768762",
  appId: "1:936507768762:web:93fa8a0c81a6db2e8d2783",
  measurementId: "G-TYT6RRFV4N"
};

// Initialize Firebase (Compat mode)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

console.log("Firebase Auth, Firestore, and Storage initialized successfully.");
