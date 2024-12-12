import React, { useState, useEffect } from 'react';
import SignUp from "./SignUp";
import Sign from "./SignIn";
import '../assets/styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalUpOpen, setIsModalUpOpen] = useState(false);
  const [isModalInOpen, setIsModalInOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openModalUp = () => {
    setIsModalUpOpen(true);
  };

  const closeModalUp = () => {
    setIsModalUpOpen(false);
  };

   const openModalIn = () => {
    setIsModalInOpen(true);
  };

  const closeModalIn = () => {
    setIsModalInOpen(false);
  };

  // Apply dark mode based on state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <>
      <header className="header">
        <div className="logo">PertApp</div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="buttons">
            <button className="theme-btn" onClick={toggleTheme}>
              {isDarkMode ? '🌞' : '🌙'}
            </button>
            <button className="login-btn"onClick={openModalIn}>Sign In</button>
            <button className="sign-up-btn" onClick={openModalUp}>Sign Up</button>
          </div>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </header>

      {/* Modal */}
      {isModalUpOpen && (
        <div className="modal-backdrop" onClick={closeModalUp}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <SignUp/>
            <button className="close-btn" onClick={closeModalUp}>Close</button>
          </div>
        </div>
      )}


      {/* Modal */}
      {isModalInOpen && (
        <div className="modal-backdrop" onClick={closeModalIn}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <Sign/>
            <button className="close-btn" onClick={closeModalIn}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
