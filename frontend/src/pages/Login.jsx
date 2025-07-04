import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/styles.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.status === "ok") {
      navigate("/mood");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="card">
      <h2>Login to Moodymusic</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
