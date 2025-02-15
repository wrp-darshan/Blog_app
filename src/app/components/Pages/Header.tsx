"use client"
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';

export default function Header() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible(prevState => !prevState);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const headerlinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <div className='container sticky top-0 z-20'>
      <header className="text-white lg:py-4 py-3 px-5 bg-background">
        <nav className="flex items-center justify-between h-[32px]">
          <div className="space-x-5 ml-2 lg:block hidden">
            {headerlinks.map((link) => (
              <Link key={link.href} href={link.href} className="uppercase px-2 text-xs font-normal">
                {link.label}
              </Link>
            ))}
          </div>



          {/* Mobile menu icon */}
          <div className="lg:hidden block">
            <div className="relative flex items-center">
              <button onClick={handleMenuToggle} className="text-white">
                {/* Hamburger Icon */}
                <span className="block w-6 h-1 bg-white"></span>
                <span className="block w-6 h-1 mt-1 bg-white"></span>
                <span className="block w-6 h-1 mt-1 bg-white"></span>
              </button>
            </div>
          </div>

          <div className="flex items-center sm:w-[400px] w-full justify-end">
            {isSearchVisible && (
              <input
                type="text"
                className="w-4/5 h-full px-2 py-[6px]"
                placeholder="Search"
              />
            )}
            <button
              className="bg-none border-none sm:pl-5 sm:pr-3 pl-1"
              onClick={handleSearchClick}
            >
              <IoIosSearch size={22} />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background py-4 space-y-4">
            {headerlinks.map((link) => (
              <Link key={link.href} href={link.href} className="block text-white text-center uppercase px-2 text-sm font-normal">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}
