import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">TrendSync</Link>
          <Link to="/create" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors">Create Post</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;