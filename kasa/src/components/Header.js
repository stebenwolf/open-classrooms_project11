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
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/a-propos">A Propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;