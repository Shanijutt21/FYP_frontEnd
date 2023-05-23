import React, { useContext, createContext, useEffect, useState } from "react";
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase.config";
import { addDoc, collection, doc, setDoc, getDocs, query, where } from "firebase/firestore";

const userContext = createContext();

export const useAuth = () => {
  return useContext(userContext);
};

const UserAuthContext = ({ children }) => {
  const [error, setError] = useState("");
  const [currentUser, setuser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setuser(user);
        console.log("u are logging in");
      } else {
        // alert("u are logout")
      }
    });
  }, [currentUser]);

  const UserLogin = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const q = query(collection(db, "users"), where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);
    let accountType = "";
    querySnapshot.forEach((doc) => {
      accountType = doc.data().accountType;
    });
    if (!accountType) {
      throw new Error("Account type not found");
    }
    return accountType;
  };
  const logout = () => {
    return signOut(auth);
  };

  const SignUp = async (email, password, FullName, accountType) => {
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        console.log(result);
        try {
          const docRef = await addDoc(collection(db, "users"), {
            FullName,
            accountType,
            userId: result.user.uid,
          });
  
          // alert("Welcome! Your account has been created successfully.");
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.log("Error adding document", e);
        }
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          setInterval(() => {
            setError("");
          }, 5000);
          setError("Email already in use");
        } else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
          setInterval(() => {
            setError("");
          }, 5000);
          setError("Password must be more than 7 characters");
        } else {
          setError(err.message);
        }
      });
  };
  
  const value = {
    SignUp,
    error,
    currentUser,
    UserLogin,
    logout,
  };

  return (
    <userContext.Provider value={value}>{children}</userContext.Provider>
  );
};

export default UserAuthContext;
