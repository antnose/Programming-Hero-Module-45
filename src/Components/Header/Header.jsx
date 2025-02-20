import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="bg-gray-900 text-white p-4 shadow-lg mb-20">
        <ul className="flex justify-center space-x-6 text-lg font-semibold">
          <NavLink
            to="/"
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/users"
            className="hover:text-blue-400 transition duration-300"
          >
            Users
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-blue-400 transition duration-300"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-blue-400 transition duration-300"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/posts"
            className="hover:text-blue-400 transition duration-300"
          >
            Posts
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Header;
