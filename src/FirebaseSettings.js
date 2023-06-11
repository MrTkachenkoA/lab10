import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCu-mVrJeMqkktL-_7jdTsaTyUo_KhFhIE",
  authDomain: "laboratory-work-10-465c4.firebaseapp.com",
  databaseURL: "https://laboratory-work-10-465c4-default-rtdb.firebaseio.com/",
  projectId: "laboratory-work-10-465c4",
  storageBucket: "laboratory-work-10-465c4.appspot.com",
  messagingSenderId: "1001929990823",
  appId: "1:1001929990823:web:9e22bd1293eaab3de6b182",
};

const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase);

export { firebase, auth };
