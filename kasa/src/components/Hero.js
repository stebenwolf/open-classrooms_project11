import React from "react";
import '../styles/Hero.css'

class Hero extends React.Component {
    render() {
        return (
            <div className="Hero">
            <div className="HeroBg" style={{background:`linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url(${this.props.pic}) 50%`}}>
                <h1>{this.props.text}</h1>
            </div>
        </div>
        )
    };
}

export default Hero;