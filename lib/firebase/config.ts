import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCOUUcEwdxCW8Ohy2eMbk21eWP__xMcT9c",
  authDomain: "buymepizza-6aaef.firebaseapp.com",
  projectId: "buymepizza-6aaef",
  storageBucket: "buymepizza-6aaef.firebasestorage.app",
  messagingSenderId: "289491279381",
  appId: "1:289491279381:web:cbcc081f7a8bfa103af81c",
  measurementId: "G-NPJZ7KR8XQ"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };