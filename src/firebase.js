import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBRFvNGdupktozV9rIWzmMXzz0vr21BieA",
  authDomain: "netflix-clone-7d59f.firebaseapp.com",
  projectId: "netflix-clone-7d59f",
  storageBucket: "netflix-clone-7d59f.appspot.com",
  messagingSenderId: "851480500426",
  appId: "1:851480500426:web:55227b1ac563cd7a5b7c33"
};

const netflixApp = initializeApp(firebaseConfig);

export { netflixApp}