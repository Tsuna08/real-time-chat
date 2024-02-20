import { StrictMode, createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout.tsx";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeUGrfgjS393k6jLvyVtMfA8SMkZNzcBI",
  authDomain: "react-firebase-4e283.firebaseapp.com",
  projectId: "react-firebase-4e283",
  storageBucket: "react-firebase-4e283.appspot.com",
  messagingSenderId: "727614271652",
  appId: "1:727614271652:web:1471c49d96d1d18ff0f631",
  measurementId: "G-DN7ZPQQ8T5",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const Context = createContext(null);

const auth = getAuth();
const firestore = getFirestore(app);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Context.Provider value={{ firebase, auth, firestore }}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Context.Provider>
  </StrictMode>
);
