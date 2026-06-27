// Firebase Initialization Configuration for AgroAssist
const firebaseConfig = {
  apiKey: "AIzaSyAsICu0wYSp7sVwI3vfnX_AsUrkMsJsP78",
  authDomain: "agroassist-6cfc8.firebaseapp.com",
  projectId: "agroassist-6cfc8",
  messagingSenderId: "936507768762",
  appId: "1:936507768762:web:93fa8a0c81a6db2e8d2783",
  measurementId: "G-TYT6RRFV4N"
};

// Initialize Firebase (Compat mode)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

console.log("Firebase Auth and Firestore initialized successfully.");

// Helper translation functions to bridge Compat and Modular API
const doc = (dbInstance, collectionPath, docId) => dbInstance.collection(collectionPath).doc(docId);
const getDoc = (docRef) => docRef.get();
const setDoc = (docRef, data) => docRef.set(data);
const serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();

