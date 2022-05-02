import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDspCHrAkmjZiW5Dx290-9VoxF-fDMW-88",
  authDomain: "project-scrum-f77f5.firebaseapp.com",
  projectId: "project-scrum-f77f5",
  storageBucket: "project-scrum-f77f5.appspot.com",
  messagingSenderId: "541333707492",
  appId: "1:541333707492:web:c1beb8ecd41fe565752af1"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth(app);
auth.languageCode = "pt-br";

const db = getFirestore(app);

export { provider, auth, db };