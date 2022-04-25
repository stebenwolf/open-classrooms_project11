import { NavLink } from "react-router-dom";
import '../styles/Error404.css';

function error404() {
    return (
        <div className="error404">
            <h1 className="error404-big">404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <NavLink to='/'>Revenir sur la page d'accueil</NavLink>
        </div>
    )
}

export default error404;