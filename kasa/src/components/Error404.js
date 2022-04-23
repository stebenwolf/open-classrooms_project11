import { NavLink } from "react-router-dom";

function error404() {
    return (
        <div className="error404">
            <h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <NavLink to='/'>Revenir sur la page d'accueil</NavLink>
        </div>
    )
}

export default error404;