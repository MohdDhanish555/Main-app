import { Link } from "react-router-dom";
import "./css/NavBar.css";

const NavBar = () => (
  <nav className="navbar-container">
    <Link to="/">HOME</Link>
    <Link to="/Blogs">BLOGS</Link>
    <Link to="/ContactUs">CONTACT US</Link>
  </nav>
);
export default NavBar;
