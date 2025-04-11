"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

interface HeaderProps {
  currentPage?: string;
}

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Header({ currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`bg-white shadow-sm fixed w-full z-10 transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-green-600 hover:text-green-700 transition-colors">
              <Image
                src="/cowboy.svg"
                alt="FarmerBasket Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="hidden sm:inline">FarmerBasket</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/shop" 
              className={`font-medium transition-colors ${
                currentPage === 'shop' 
                  ? 'text-green-600' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Shop
            </Link>
            <Link 
              href="/about" 
              className={`font-medium transition-colors ${
                currentPage === 'about' 
                  ? 'text-green-600' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              About
            </Link>
            <Link 
              href="/ourstory" 
              className="text-gray-600 hover:text-green-600 font-medium transition-colors"
            >
              Our Story
            </Link>
            <a 
              href="#contact" 
              onClick={(e) => smoothScroll(e, 'contact')}
              className="text-gray-600 hover:text-green-600 font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            href="/shop" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              currentPage === 'shop' 
                ? 'bg-green-50 text-green-600' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <Link 
            href="/about" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              currentPage === 'about' 
                ? 'bg-green-50 text-green-600' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <a 
            href="#os" 
            onClick={(e) => {
              smoothScroll(e, 'os');
              setIsMenuOpen(false);
            }}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-green-600"
          >
            Our Story
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              smoothScroll(e, 'contact');
              setIsMenuOpen(false);
            }}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-green-600"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
} 