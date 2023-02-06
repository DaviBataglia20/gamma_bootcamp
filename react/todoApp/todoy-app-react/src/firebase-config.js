// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArYMKxyUVlsFEmcxTGKxQLj2C1ubRSFk0",
  authDomain: "todo-app-cb770.firebaseapp.com",
  projectId: "todo-app-cb770",
  storageBucket: "todo-app-cb770.appspot.com",
  messagingSenderId: "18905490880",
  appId: "1:18905490880:web:066c772d7c6543de19d425"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db