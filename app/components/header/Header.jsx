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

      {/* sidebar&overlay */}
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}></div>
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className={`sidebar-chain ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}>
          <img src={`${prefix}/header/sidebar_chain.svg`} alt="Chain" />
        </div>
        <div className='sb-conatiner'>
        <nav>
          <a href="/" onClick={() => setIsOpen(false)}>ГЛАВНАЯ</a>
          <a href="/portfolio" onClick={() => setIsOpen(false)}>ПОРТФОЛИО</a>
          <a href="/contacts" onClick={() => setIsOpen(false)}>КОНТАКТЫ</a>
        </nav>
        <div className={`sidebar-contacts ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}>
            <div className='sidebar-links'>
              <a href="https://github.com/Revellison">github.com/Revellison</a>
              <a href="https://x.com/Revell1s0n">x.com/Revell1s0n</a>
              <a href="mailto:revellison@internet.ru">revellison@internet.ru</a>
            </div>
            <div className={`sidebar-logo ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}>
              <img src={`${prefix}/header/r.svg`} alt="r-logo" />
            </div>
        </div>
        </div>

      </div>
    </>
  );
};

export default Header;