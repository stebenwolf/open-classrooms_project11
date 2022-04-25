import logement from '../assets/logements.js';
import { NavLink } from 'react-router-dom';
import Hero from './Hero';
import img from '../assets/IMG.png';
import React from 'react';

function Home() {
    return (
            <div className ="Home">
        <Hero pic={img} text="Chez vous, partout et ailleurs" />
        <div className="gallery">
            {logement.map((item) => (
                <div className="thumbBg" key={item.id}>
                    <NavLink to={"/logement/"+item.id}>
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