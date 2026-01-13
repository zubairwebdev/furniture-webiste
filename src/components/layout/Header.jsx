// src/components/layout/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `
  relative text-sm font-medium transition-colors duration-300
  ${isActive ? "text-emerald-700" : "text-gray-600 hover:text-emerald-700"}
  after:content-[''] after:absolute after:left-0 after:-bottom-2
  after:h-[2px] after:w-full after:bg-emerald-700
  after:scale-x-0 after:origin-left after:transition-transform after:duration-300
  hover:after:scale-x-100
  ${isActive ? "after:scale-x-100" : ""}
  `;

const Header = () => {
  const [open, setOpen] = useState(false); // mobile menu
  const [userOpen, setUserOpen] = useState(false); // user dropdown
  const userRef = useRef(null);

  // close on escape & disable body scroll when mobile menu open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setUserOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // close user dropdown when clicking outside
  useEffect(() => {
    const onDocClick = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <header className="border-b bg-white z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold">
          Lalasia
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={navLinkClass}>
            Product
          </NavLink>

          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>

          <NavLink to="/articles" className={navLinkClass}>
            Article
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>
        </nav>

        {/* Icons + Mobile burger */}
        <div className="flex items-center gap-4">
          {/* Desktop icons */}
          <div className="hidden md:flex gap-4 text-lg items-center">
            {/* Cart - link to /cart */}
            <Link
              to="/cart"
              aria-label="Cart"
              className="p-2 rounded-full hover:bg-emerald-50 transition"
            >
              🛒
            </Link>

            {/* User dropdown trigger */}
            <div className="relative" ref={userRef}>
              <button
                onClick={() => setUserOpen((s) => !s)}
                aria-haspopup="true"
                aria-expanded={userOpen}
                aria-label="Account"
                className="p-2 rounded-full hover:bg-emerald-50 transition flex items-center"
              >
                👤
              </button>

              {/* Dropdown */}
              {userOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border shadow-sm rounded-md py-2 z-50">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setUserOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setUserOpen(false)}
                  >
                    Signup
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {/* simple hamburger / close icon */}
            <svg
              className="w-6 h-6 text-gray-700"
              viewBox="0 0 24 24"
              fill="none"
            >
              {open ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M3 7h18M3 12h18M3 17h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 md:hidden"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-80 h-full bg-white shadow-xl p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <Link
                to="/"
                className="text-lg font-semibold"
                onClick={() => setOpen(false)}
              >
                Lalasia
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `text-base ${
                    isActive ? "text-emerald-700 font-medium" : "text-gray-700"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `text-base ${
                    isActive ? "text-emerald-700 font-medium" : "text-gray-700"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                Product
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `text-base ${
                    isActive ? "text-emerald-700 font-medium" : "text-gray-700"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                Services
              </NavLink>

              <NavLink
                to="/articles"
                className={({ isActive }) =>
                  `text-base ${
                    isActive ? "text-emerald-700 font-medium" : "text-gray-700"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                Article
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-base ${
                    isActive ? "text-emerald-700 font-medium" : "text-gray-700"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                About Us
              </NavLink>
            </nav>

            <div className="border-t mt-6 pt-6 space-y-3">
              {/* Login / Signup for mobile */}
              <Link
                to="/login"
                className="block w-full text-center bg-emerald-700 text-white py-2 rounded"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block w-full text-center border py-2 rounded"
                onClick={() => setOpen(false)}
              >
                Signup
              </Link>

              <div className="flex gap-3 pt-2">
                <Link
                  to="/cart"
                  className="px-3 py-2 border rounded flex-1 text-center"
                  onClick={() => setOpen(false)}
                >
                  🛒 Cart
                </Link>

                <Link
                  to="/profile"
                  className="px-3 py-2 border rounded flex-1 text-center"
                  onClick={() => setOpen(false)}
                >
                  👤 Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
