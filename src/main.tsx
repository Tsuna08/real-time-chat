import "./index.scss";
import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { createContext, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout.tsx";

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
const auth = getAuth();
const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();

export const Context = createContext({ auth, firestore, provider });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Context.Provider value={{ auth, firestore, provider }}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Context.Provider>
  </StrictMode>
);
