import { useState } from "react";

import './login.css'

function LoginSignup({ setUser }) {
  const [isSignup, setIsSignup] = useState(false);
  const [message, setMessage] = useState(""); 

  const SHEET_URL =
    "https://sheet.best/api/sheets/f6a265a1-51cf-44dd-b0dd-583b563068af"; 

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
        const res = await fetch(`${SHEET_URL}/email/${email}`);
        const existing = await res.json();
        if (existing.length > 0) {
          setMessage("User already signed up. Please login.");
          return;
        }
    
        // Save new user
        await fetch(SHEET_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });
    
        setMessage("Signup successful! You can now login.");
        setIsSignup(false);
    
      } else {
        // --- LOGIN ---
        const res = await fetch(`${SHEET_URL}/email/${email}`);
        const users = await res.json();
    
        if (users.length === 0) {
          setMessage("You are not signed up yet. Please sign up first.");
        } else {
          const user = users[0];
          if (user.password === password) {
            setMessage(`Welcome back, ${user.name}!`);
            setUser(user); // ✅ send user to App
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
