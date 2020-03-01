import React from 'react';
import Logo from '../../Assets/Images/Logos/logo.png';

function Header() {
  return (
    <div>
      <header>
          <img className="logo" src={Logo} alt=""/>
          <ul>
              <li>Home</li>
              <li>Our Menu</li>
              <li>Promo</li>
              <li>Oder</li>
          </ul>
      </header>
    </div>
  );
}

export default Header;
