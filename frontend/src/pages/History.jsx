import React from "react";
import '../styles/styles.css';

function History() {
  return (
    <div className="card">
      <h2>About Moodymusic</h2>
      <ul>
        <li>🎯 Analyzes user mood using AI</li>
        <li>🎵 Suggests matching songs from Spotify</li>
        <li>⚙️ Tech: React, Flask, Tailwind, TextBlob, Spotify API</li>
        <li>🚀 Deployed with GitHub Actions (CI/CD)</li>
      </ul>
    </div>
  );
}

export default History;
