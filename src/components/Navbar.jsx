import { Link } from "react-router-dom";
import "../components/css/Navbar.css"; // External CSS for styling

const NavBar = () => {
  return (
    <nav className="dynamic-navbar">
      <div className="dynamic-navbar-container">
        <div className="dynamic-navbar-content">
          <Link to="/" className="dynamic-navbar-logo">
            ClinicPing
          </Link>
          <ul className="dynamic-navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
