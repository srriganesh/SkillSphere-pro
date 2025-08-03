import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          SkillSphere
        </Link>
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-sm text-gray-700">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
