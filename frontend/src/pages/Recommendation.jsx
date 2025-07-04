import React, { useEffect, useState } from "react";
import '../styles/styles.css';

function Recommendation() {
  const [song, setSong] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("song"));
    setSong(data);
  }, []);

  if (!song || song.error) {
    return (
      <div className="card">
        <h2>No Match Found</h2>
        <p>Please try a different mood.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Your Mood Match 🎵</h2>
      <p><strong>{song.name}</strong> by {song.artist}</p>
      {song.preview_url ? (
        <audio controls>
          <source src={song.preview_url} type="audio/mpeg" />
        </audio>
      ) : (
        <p>No preview available</p>
      )}
      <a
        href={song.external_url}
        target="_blank"
        rel="noreferrer"
        className="button"
      >
        Listen on Spotify
      </a>
    </div>
  );
}

export default Recommendation;