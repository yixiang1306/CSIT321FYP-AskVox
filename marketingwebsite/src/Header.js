import React from 'react';

const Header = () => (
    <header className="header">
      <a href="/" className="logo">Ask<span>Vox</span></a>
      <nav>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#plans">Plans</a></li>
        </ul>
      </nav>
    </header>
  );

export default Header;