import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/styles.css";

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2 className="logo">Moodymusic</h2>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Login
        </NavLink>
        <NavLink
          to="/mood"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Mood
        </NavLink>
        <NavLink
          to="/recommendation"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Recommendation
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          History
        </NavLink>
      </div>

      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}

export default Navbar;
