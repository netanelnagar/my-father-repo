'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            מנופי רמון
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-reverse space-x-8">
            <Link 
              href="/cranes/ceiling" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              מנוף תקרה
            </Link>
            <Link 
              href="/cranes/pneumatic" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              מנוף פנאומטי
            </Link>
            {/* TODO: fix the css for the last 2 links */}
            <Link 
              href="/#reviews" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              המלצות
            </Link>
            <Link 
              href="/#contact" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              צור קשר
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transform transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transform transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/cranes/ceiling" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                מנוף תקרה
              </Link>
              <Link 
                href="/cranes/pneumatic" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                מנוף פנאומטי
              </Link>
              <Link 
                href="/#reviews" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                המלצות
              </Link>
              <Link 
                href="/#contact" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                צור קשר
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;