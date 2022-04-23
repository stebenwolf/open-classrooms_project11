import arrow from '../assets/right-arrow.svg';

function About() {
    return (
        <div className="About">
            <div className="Hero">
                <div className="HeroBg"></div>
            </div>
            <div className="dropdowns-large">
                <div className="dropdown">
                    <div className="dropdown-open">
                        <h2 className="dropdown-title">Fiabilité</h2>
                        <img src={arrow} className="arrow-figure" alt="arrow" />
                    </div>
                    <p className="dropdown-content">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                </div>

                <div className="dropdown">
                    <div className="dropdown-open">
                        <h2 className="dropdown-title">Respect</h2>
                        <img src={arrow} className="arrow-figure" alt="arrow" />
                    </div>
                    <p className="dropdown-content">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>

                <div className="dropdown">
                    <div className="dropdown-open">
                        <h2 className="dropdown-title">Service</h2>
                        <img src={arrow} className="arrow-figure" alt="arrow" />
                    </div>
                    <p className="dropdown-content">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </div>

                <div className="dropdown">
                    <div className="dropdown-open">
                        <h2 className="dropdown-title">Sécurité</h2>
                        <img src={arrow} className="arrow-figure" alt="arrow" />
                    </div>
                    <p className="dropdown-content">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </div>
            </div>
        </div>
    )
}

export default About;