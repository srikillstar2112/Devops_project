import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/styles.css';

function MoodInput() {
  const [mood, setMood] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mood.trim()) {
      setError("Please enter your mood");
      return;
    }

    const res = await fetch("http://localhost:5000/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mood }),
    });

    const data = await res.json();
    localStorage.setItem("song", JSON.stringify(data));
    navigate("/recommendation");
  };

  return (
    <div className="card">
      <h2>What's Your Mood?</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="Describe how you're feeling..."
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit">Analyze Mood</button>
      </form>
    </div>
  );
}

export default MoodInput;