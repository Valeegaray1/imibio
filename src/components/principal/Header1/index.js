import React, { useState } from 'react';
import './styles.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
        <header className="header">
      <div className="logo">Logo</div>
      <div className="other-item">Asociaciones</div>
      <div className="other-item">Ayuda</div>
      <div className="menu-item" onClick={toggleMenu}>
        Opciones
        {menuOpen && (
          <ul className="menu-options">
            <li>Opción 1</li>
            <li>Opción 2</li>
            <li>Opción 3</li>
          </ul>
        )}
      </div>
      
    </header>
  );
}

export default Header;

