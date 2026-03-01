import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./logoh.png";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        
        <Link to="/" className="logo">
          <img src={logo} alt="Proyexi Diseño & Construcción" />
        </Link>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/fachadas">Fachadas</Link>
        <Link to="/#hero">Inicio</Link>
        /*<Link to="/#foot">Contacto</Link>*/
          
        </nav>

        <div 
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
};

export default Navbar;