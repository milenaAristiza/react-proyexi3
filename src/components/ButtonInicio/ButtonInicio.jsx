import { Link } from "react-router-dom";
import logo from "./logo_pestañas.png";
import "./ButtonInicio.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <img src={logo} alt="Proyexi Logo" className="navbar-logo" />
      </Link>
    </div>
  );
};

const styles = {
  
};

export default Navbar;