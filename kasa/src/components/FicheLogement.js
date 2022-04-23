import Carousel from './Carousel.js';
import Rating from './Rating';
import '../styles/FicheLogement.css';
import logement from '../assets/logements.js';
import Toggle from './Dropdown.js';

function FicheLogement() {

    let id=0;
    let rank = 0;
    const url = window.location.pathname
    const urlParts = url.substring(1).split("/");
    if(urlParts[0] === "logement") {
        logement.forEach((item, i) => {
            if(item.id === urlParts[1]) {
                id = i;
                rank = +item.rating;
            }
            
        })
    }

    return (
        <div className="FicheLogement">
            <Carousel id={id} />
            <div className="ficheHeader">
                <div className="ficheTitle">
                    <h1>{logement[id].title}</h1>
                    <h3>{logement[id].location}</h3>
                    <div className="ficheTags">
                        {logement[id].tags.map((tag) => (
                            <span className='tag' key={("span")+tag}>{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="ficheAuthor">
                    <div className="ficheProfile">
                        <span className="profileName">{logement[id].host.name}</span>
                        <img className="profilePic" src={logement[id].host.picture} alt={("Profile pic for ")+logement[id].host.name}></img>
                    </div>
                    <Rating rank={rank} />
                    
                </div>
            </div>

            <div className='dropdowns'>
                <Toggle id={id} title="Description" content={logement[id].description} />
                <Toggle id={id} title="Equipements" content={(<ul>
                    {logement[id].equipments.map((equipement) => (
                        <li key={('li')+equipement+logement[id].id}>{equipement}</li>
                    ))}
                </ul>)} />
            </div>
        </div>
    )
}

export default FicheLogement;