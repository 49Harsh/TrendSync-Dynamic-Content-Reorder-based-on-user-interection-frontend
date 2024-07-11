// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Content App</Link>
        <div>
          <Link to="/create-post" className="bg-white text-blue-600 px-4 py-2 rounded-md">Create Post</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;