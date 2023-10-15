// Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto p-4">
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;