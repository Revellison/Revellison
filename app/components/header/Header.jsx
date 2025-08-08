import React from 'react';
import styles from "./Header.css";
const Header = () => {
  return (
    <header>
        <div className="Logo">
            <h1>revellison.ru</h1>
        </div>
        <div className='star-container'>
            <img src="/header/star.svg" alt="Star" />
        </div>
        <div className='Links'>      
            <a href="/portfolio">PORTFOLIO</a>
            <a id="contacts" href="/contacts">CONTACTS</a>   
        </div>
    </header>
  );
};

export default Header;

