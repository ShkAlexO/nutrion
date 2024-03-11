import { NavLink } from "react-router-dom";
import "./navigation.scss";

function Navigation({ classNav, classButton }) {
  return (
    <nav className={classNav}>
      <ul className="menu">
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/team" className="nav-link">
            Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/process" className="nav-link">
            Process
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className="nav-link">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={`nav-link ${classButton}`}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
