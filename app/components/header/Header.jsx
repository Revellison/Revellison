'use client'
import React, { useState, useEffect } from 'react';
import styles from "./Header.css";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header>
        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`burger-line ${isOpen ? 'line1-open' : ''}`}></div>
          <div className={`burger-line ${isOpen ? 'line2-open' : ''}`}></div>
          <div className={`burger-line ${isOpen ? 'line3-open' : ''}`}></div>
        </div>
        
        <div className="Logo">
          <a style={{ color: "white", textDecoration: "none"}} href="/">
            <h1>revellison.ru</h1>
          </a>
        </div>
        
        <div className='star-container'>
          <img src={`${prefix}/header/star.svg`} alt="Star" />
        </div>
        
        <div className='Links'>      
          <a href="/portfolio">ПОРТФОЛИО</a>
          <a id="contacts" href="/contacts">КОНТАКТЫ</a>   
        </div>
      </header>

      {/* Сайдбар и оверлей */}
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}></div>
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav>
          <a href="/" onClick={() => setIsOpen(false)}>ГЛАВНАЯ</a>
          <a href="/portfolio" onClick={() => setIsOpen(false)}>ПОРТФОЛИО</a>
          <a href="/contacts" onClick={() => setIsOpen(false)}>КОНТАКТЫ</a>
        </nav>
      </div>
    </>
  );
};

export default Header;