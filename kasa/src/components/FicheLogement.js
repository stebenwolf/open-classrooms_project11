import Carrousel from './Carrousel.js';
import arrow from '../assets/right-arrow.svg';
import starGrey from '../assets/star-grey.svg';
import starFull from '../assets/star-full.svg';
import '../styles/FicheLogement.css';
import logement from '../assets/logements.js';

function FicheLogement() {

    let id=0;
    const url = window.location.pathname
    const urlParts = url.substring(1).split("/");
    if(urlParts[0] === "logement") {
        logement.forEach((item, i) => {
            if(item.id === urlParts[1]) {
                id = i;
            }
        })
    }
    console.log("id vaut: ",id);

    return (
        <div className="FicheLogement">
            <Carrousel id={id} />
            <div className="ficheHeader">
                <div className="ficheTitle">
                    <h1>{logement[id].title}</h1>
                    <h3>{logement[id].location}</h3>
                    <div className="ficheTags">
                        {logement[id].tags.map((tag) => (
                            <span className='tag'>{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="ficheAuthor">
                    <div className="ficheProfile">
                        <span className="profileName">{logement[id].host.name}</span>
                        <img className="profilePic" src={logement[id].host.picture} alt="profile-pic"></img>
                    </div>
                    <div className="ficheRanking">
                        {/* {
                        for(let x=0;x<{`logement[0].rating`};x++) {
                            <img src={starFull} className="star starFull-figure" alt="star-full" />
                        }
                        } */}
                        
                        <img src={starFull} className="star starFull-figure" alt="star-full" />
                        <img src={starFull} className="star starFull-figure" alt="star-full" />
                        <img src={starGrey} className="star starGrey-figure" alt="star" />
                        <img src={starGrey} className="star starGrey-figure" alt="star" />
                    </div>
                </div>
            </div>

            <div className="dropdowns">
            <div className="dropdown">
                <div className="dropdown-open">
                    <h2 className="dropdown-title">Description</h2>
                    <img src={arrow} className="arrow-figure" alt="arrow" />
                </div>
                <p className="dropdown-content">{logement[id].description}</p>
            </div>

            <div className="dropdown">
                <div className="dropdown-open">
                    <h2 className="dropdown-title">Equipements</h2>
                    <img src={arrow} className="arrow-figure" alt="arrow" />
                </div>
                <div className="dropdown-content">
                <ul>
                    {logement[id].equipments.map((equipement) => (
                        <li>{equipement}</li>
                    ))}
                </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default FicheLogement;