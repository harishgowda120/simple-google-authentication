// src/Login.js
import React, { useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "./firebase";

const Login = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!user ? (
        <>
          <h1>Welcome to Google Auth App</h1>
          <button onClick={handleLogin}>Login with Google</button>
        </>
      ) : (
        <>
          <h1>Hello, {user.displayName}</h1>
          <img src={user.photoURL} alt="User Avatar" style={{ borderRadius: "50%" }} />
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Login;
