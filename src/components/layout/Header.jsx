import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", text: "Home" },
    { href: "#profile", text: "Profile" },
    { href: "#books", text: "Books" },
    { href: "#footer", text: "Contact" }
  ];

  return (
    <header className="bg-primary py-4 shadow-md sticky top-0 z-50">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            <a href="#" className="no-underline">Library Management</a>
          </h1>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex list-none gap-6">
              {navItems.map(item => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-white font-medium hover:opacity-80 transition-opacity"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col list-none gap-4">
              {navItems.map(item => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-white font-medium hover:opacity-80 transition-opacity block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
