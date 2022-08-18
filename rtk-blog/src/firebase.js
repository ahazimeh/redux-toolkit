import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7O9JODPZcMyi0cqsJbGRs9xLsmHHSS-Y",
  authDomain: "rtk-blog-8eb82.firebaseapp.com",
  projectId: "rtk-blog-8eb82",
  storageBucket: "rtk-blog-8eb82.appspot.com",
  messagingSenderId: "282348279795",
  appId: "1:282348279795:web:f28e52369811710b19a486",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const storage = getStorage(app);
