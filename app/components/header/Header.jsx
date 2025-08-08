import React from 'react';
import styles from "./Header.css";
import { color } from 'motion';
const Header = () => {
  return (
    <header>
        <div className="Logo">
            <a style={{ color: "white", textDecoration: "none"}} href="/"><h1>revellison.ru</h1></a>
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

