import React from "react";

class Hero extends React.Component {
    render() {
        return (
            <div className="Hero">
            <div className="HeroBg" style={{background:`linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${this.props.pic})`}}>
                <h1>{this.props.text}</h1>
            </div>
        </div>
        )
    };
}

export default Hero;