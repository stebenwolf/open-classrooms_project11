import logement from '../assets/logements.js';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div className ="Home">
        <div className="Hero">
            <div className="HeroBg">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
        <div className="gallery">
            {logement.map((item) => (
                <div className="thumbBg">
                    <NavLink to={"/logement/"+`${item.id}`}>
                    <img src={item.cover} alt={item.title} key={item.id} />
                    <div className="thumb">
                        <p className="locationTitle" >{item.title}</p>
                    </div>
                    </NavLink>
                </div>
            ))}
        </div>
        </div>
    );
}


export default Home;