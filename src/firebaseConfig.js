import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Initialize the Firebase app once
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAq_kYHbnIkDxFMkTZD6gJfI6RWiND8gsQ",
  authDomain: "netflix-gpt-95c15.firebaseapp.com",
  projectId: "netflix-gpt-95c15",
  storageBucket: "netflix-gpt-95c15.appspot.com",
  messagingSenderId: "223353568505",
  appId: "1:223353568505:web:b6f85cc9b5064118387628",
  measurementId: "G-EBEN1NRK38"
});

// Get the analytics instance
const analytics = getAnalytics(firebaseApp);

const auth = getAuth(firebaseApp);

export default auth;

// Export the Firebase app instance
// export default firebaseApp;
