import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </ul>
      </nav>
    </>
  );
};

export default Header;
