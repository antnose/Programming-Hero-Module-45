import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Gym. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link to="/privacy" className="hover:text-gray-400">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-gray-400">
            Terms of Service
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
