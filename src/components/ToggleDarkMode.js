import React from "react";
import { useDarkMode } from "../contexts/DarkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ToggleDarkMode = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="text-white p-2">
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
    </button>
  );
};

export default ToggleDarkMode;
