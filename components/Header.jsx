import React, { useState, useEffect } from "react";

const Header = () => {
  // State to manage the dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Use useEffect to apply the 'dark' class to the body when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]); // This effect runs whenever isDarkMode changes

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world?</a>
          </h2>
          {/* Add onClick handler and make it interactive */}
          <p
            className="theme-changer"
            onClick={toggleTheme}
            style={{ cursor: "pointer" }}
          >
            {/* Conditionally render the icon and text */}
            {isDarkMode ? (
              <>
                <i className="fa-solid fa-sun" />
                Light Mode
              </>
            ) : (
              <>
                <i className="fa-regular fa-moon" />
                Dark Mode
              </>
            )}
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
