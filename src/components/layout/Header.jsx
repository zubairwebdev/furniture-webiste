// src/components/layout/Header.jsx
import React, { useState, useEffect } from "react";
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
  const [open, setOpen] = useState(false);

  // close on escape & disable body scroll when menu open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

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
          <div className="hidden md:flex gap-4 text-lg">
            <button
              className="p-2 rounded-full hover:bg-emerald-50 transition"
              aria-label="Cart"
            >
              🛒
            </button>
            <button
              className="p-2 rounded-full hover:bg-emerald-50 transition"
              aria-label="Account"
            >
              👤
            </button>
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

            <div className="border-t mt-6 pt-6">
              <div className="flex gap-3">
                <button
                  className="flex-1 bg-emerald-700 text-white py-2 rounded"
                  aria-label="Let's talk"
                >
                  Let's Talk
                </button>
                <button className="px-3 py-2 border rounded" aria-label="Cart">
                  🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
