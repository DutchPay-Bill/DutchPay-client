import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { API_KEY, APP_ID, AUTH_DOMAIN, MEASUREMENT_ID, PROJECT_ID, SENDER_ID, STORAGE_BUCKET } from "../utils/access";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);