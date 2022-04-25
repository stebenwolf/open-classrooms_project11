import logo from "../assets/LOGO2.svg";
import '../styles/Header.css';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="App-header">
            <NavLink to="/">
                <img src={logo} className="App-logo" alt="logo" />
            </NavLink>
            <nav>
                <NavLink to="/" className={(navData) => navData.isActive? "active" : ""}>Accueil</NavLink>
                <NavLink to="/a-propos" className={(navData) => navData.isActive? "active" : ""}>A Propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;