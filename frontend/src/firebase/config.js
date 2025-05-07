import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAz9L2U8eHwP3ZwuRHA4eE3WXy6XBCVM2s",
  authDomain: "nft-project-2a62d.firebaseapp.com",
  projectId: "nft-project-2a62d",
  storageBucket: "nft-project-2a62d.firebasestorage.app",
  messagingSenderId: "174920982856",
  appId: "1:174920982856:web:f3336cdef895e17ec1937d",
  measurementId: "G-277JNFH1NJ"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app); 