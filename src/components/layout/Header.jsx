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
  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold">
          Lalasia
        </Link>

        {/* Navbar */}
        <nav className="hidden md:flex gap-8">
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

        {/* Icons */}
        <div className="flex gap-4 text-lg">
          <button className="p-2 rounded-full hover:bg-emerald-50 transition">
            🛒
          </button>
          <button className="p-2 rounded-full hover:bg-emerald-50 transition">
            👤
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
