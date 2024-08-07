import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useCartStore } from "./store";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { getCartItemCount } = useCartStore((state) => ({
    getCartItemCount: state.getCartItemCount,
  }));

  const cartItemCount = getCartItemCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-10 transition-colors duration-300 ${
        isScrolled ? "bg-green-50" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-screen-2xl px-4 py-6 sm:px-6 justify-between items-center space-x-5">
        <div className="flex items-center">
          <img src="/logo2.png" alt="logo" className="h-16 rounded-xl" />
        </div>
        <nav className="hidden sm:flex space-x-8 items-center text-xl">
          <a href="#home">Home</a>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <a href="#blog">Blog Post</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="flex items-center space-x-5">
          <form className="max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center p-3 md:p-5 pointer-events-none">
                <FaSearch className="w-4 h-4" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full px-12 py-2 md:py-3 text-sm text-black border border-gray-300 rounded-3xl bg-gray-50 focus:outline-none"
                placeholder="Search Products"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2 bottom-2 md:end-2.5 md:bottom-2 bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-xl text-sm px-3 md:px-5 md:py-1 py-1/2"
              >
                Search
              </button>
            </div>
          </form>
          <div className="flex items-center relative">
            <Link to="/cart">
              <IoCartOutline className="w-8 h-8 text-green-600" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -end-2 bg-yellow-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
        <button
          className="block sm:hidden ml-4"
          aria-label="Toggle Menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <HiOutlineMenuAlt3 className="text-2xl" />
          )}
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-2xl"
            aria-label="Close Menu"
            onClick={() => setShowMenu(false)}
          >
            <IoMdClose />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 p-6">
          <img src="/logo2.png" alt="logo" className="h-20 mb-4" />
          <a
            href="#home"
            className="text-lg font-medium"
            onClick={() => setShowMenu(false)}
          >
            Home
          </a>
          <Link
            to="/shop"
            className="text-lg font-medium"
            onClick={() => setShowMenu(false)}
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <a
            href="#blog"
            className="text-lg font-medium"
            onClick={() => setShowMenu(false)}
          >
            Blog Post
          </a>
          <a
            href="#contact"
            className="text-lg font-medium"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
