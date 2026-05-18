import React from 'react';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">Главная</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">О нас</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link">Манулы</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Контакты</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;
