import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="bg-gray-900 text-white p-4 shadow-lg mb-20">
        <ul className="flex justify-center space-x-6 text-lg font-semibold">
          <Link to="/" className="hover:text-blue-400 transition duration-300">
            Home
          </Link>
          <Link
            to="/users"
            className="hover:text-blue-400 transition duration-300"
          >
            Users
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-400 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-400 transition duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/posts"
            className="hover:text-blue-400 transition duration-300"
          >
            Posts
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Header;
