import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>MediaPlayer</h2>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/features" className={({ isActive }) => isActive ? "active" : ""}>
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" className={({ isActive }) => isActive ? "active" : ""}>
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;