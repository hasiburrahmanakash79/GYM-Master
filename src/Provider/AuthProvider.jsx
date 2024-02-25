import { useState } from "react";
import { createContext } from "react";
import app from "../Firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
  } from "firebase/auth";

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
};

export default AuthProvider;
