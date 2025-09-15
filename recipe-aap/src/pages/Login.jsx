import { useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ import navigation hook

import './login.css'

function LoginSignup({ setUser }) {
  const [isSignup, setIsSignup] = useState(false);
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();  // ✅ hook for redirect

  const SHEET_URL =
    "https://sheetdb.io/api/v1/kqv2a33cykmpx"; 

    async function handleSubmit(e) {
      e.preventDefault();
    
      const formData = new FormData(e.target);
      const email = formData.get("email");
      const password = formData.get("password");
    
      if (isSignup) {
        // --- SIGNUP ---
        const name = formData.get("name");
        const confirmPassword = formData.get("confirmPassword");
    
        if (password !== confirmPassword) {
          setMessage("Passwords do not match");
          return;
        }
    
        // Check if user already exists (by email only)
        // const res = await fetch(`${SHEET_URL}/email/${email}`);   //this will work on sheet.best api
        const res = await fetch(`${SHEET_URL}/search?email=${email}`);        //a bit change for sheetDB api
        const existing = await res.json(); 
        if (existing.length > 0) {
          setMessage("User already signed up. Please login.");
          return;
        }
    
        // Save new user
        await fetch(SHEET_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify({ name, email, password }),    //this will work on sheet.best api
          body: JSON.stringify([{ name, email, password }]),          //a bit change for sheetDB api
        });
    
        setMessage("Signup successful! You can now login.");
        setIsSignup(false);
    
      } else {
        // --- LOGIN ---
        // const res = await fetch(`${SHEET_URL}/email/${email}`);
        const res = await fetch(`${SHEET_URL}/search?email=${email}`);
        const users = await res.json();
    
        if (users.length === 0) {
          setMessage("You are not signed up yet. Please sign up first.");
        } else {
          const user = users[0];
          if (user.password === password) {
            // setMessage(`Welcome back, ${user.name}!`);
            setUser(user); 
            navigate("/");   // ✅ redirect to Home page
          } else {
            setMessage("Incorrect password. Please try again.");
          }
        }
      }
    }
    
  return (
    <div className="auth-container">
  <form onSubmit={handleSubmit} className="auth-form">
    <h1>{isSignup ? "Sign Up" : "Login"}</h1>

    {isSignup && (
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
    )}

    <label>
      Email:
      <input type="email" name="email" required />
    </label>

    <label>
      Password:
      <input type="password" name="password" required />
    </label>

    {isSignup && (
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" required />
      </label>
    )}

    <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>

    {message && <p className="auth-message">{message}</p>}

    <p className="toggle-text">
      {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
      <span
        onClick={() => {
          setIsSignup(!isSignup);
          setMessage("");
        }}
      >
        {isSignup ? "Login" : "Sign Up"}
      </span>
    </p>
  </form>
</div>

  );
}

export default LoginSignup;
