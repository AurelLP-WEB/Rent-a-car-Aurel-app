import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Importă Firestore
import { getStorage } from 'firebase/storage'; // Importă Storage

const firebaseConfig = {
  apiKey: "AIzaSyBOCq7H9Az5ITko4qRdgZkyN8vM3fD6ukY",
  authDomain: "fusionrentacar-874b2.firebaseapp.com",
  projectId: "fusionrentacar-874b2",
  storageBucket: "fusionrentacar-874b2.firebasestorage.app",
  messagingSenderId: "756774099935",
  appId: "1:756774099935:web:8217db3678e5fa2e7f826a",
  measurementId: "G-Z6TTRTX9N4"
};

// Inițializează aplicația Firebase
const app = initializeApp(firebaseConfig);

// Obține instanța de autentificare Firebase
const auth = getAuth(app);

// Obține instanța Firestore
const db = getFirestore(app);

// Obține instanța Firebase Storage
const storage = getStorage(app);

// Exportă auth, db și storage pentru a putea fi folosite în alte fișiere
export { auth, db, storage };
