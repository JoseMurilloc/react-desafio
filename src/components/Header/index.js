import React from 'react';

import './style.css';

import { FaRegUserCircle } from 'react-icons/fa';

export default function Header() {
  return (
    <header>
      <img 
        src="https://cdn.clipart.email/76a522b2fe3a75c8636b2dea84f1f5d6_facebook-text-logo-png-picture-608728-facebook-text-logo-png_800-301.png" 
        className="image"
      />

      <div className="profile">
        <h3>Meu perfil</h3>
        <FaRegUserCircle size={35} />
      </div>
    </header>
  );
}
