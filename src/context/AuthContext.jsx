import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, methods } from "../firebase";
import { updateEmail, updatePassword } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    return methods.createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return methods.signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return methods.signOut(auth);
  }

  function resetPassword(email) {
    return methods.sendPasswordResetEmail(auth, email);
  }

  function updateCurrentEmail(email) {
    return updateEmail(currentUser, email);
  }

  function updateCurrentPassword(password) {
    return updatePassword(currentUser, password);
  }

  useEffect(() => {
    const unsubscribe = methods.onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateCurrentEmail,
    updateCurrentPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
