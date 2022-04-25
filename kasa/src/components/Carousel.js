import React from "react";
import logements from "../assets/logements";
import '../styles/Carousel.css'
import Picture from "./Picture";
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';

class Carousel extends React.Component {
    constructor(props) {
        super(props)
        window.scroll(0, 0);
        this.state = {activePic: 0};
        this.logement = logements[this.props.id];
        this.picList = this.logement.pictures;
        this.length = this.picList.length;

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickPrevious = this.handleClickPrevious.bind(this);
    }

    // const [activePic, setActivePic] = React.useState(0);

    handleClickPrevious() {
        if (this.state.activePic === 0) {
            // setActivePic(prevState.activePic + This.length - 1)
            this.setState((prevState) => ({
                activePic: (prevState.activePic + this.length-1)
            }));
        } else {
            this.setState(prevState => ({
                activePic: (prevState.activePic - 1)%this.length
            }));
        }
    }

    handleClickNext() {
        this.setState(prevState => ({
            activePic: (prevState.activePic + 1)%this.length
        }));
    }

    render() {
        return (
            <div className="Carousel">
               
                {this.picList.map(
                    (pic) => (
                        <Picture item={pic} activeSource={this.picList[this.state.activePic]} key={("pic "+pic)} />
                    )
                )}

                <div className="Carousel-arrows">

                    {(this.length > 1) ? <img className="carousel-arrow carouselLeftArrow" src={leftArrow} onClick={this.handleClickPrevious} alt={leftArrow} /> : ''}
                    {(this.length > 1) ? <img className="carousel-arrow carouselRightArrow" src={rightArrow} onClick={this.handleClickNext} alt={rightArrow} /> : ''}
                </div>
            </div>
        )
    }
}

export default Carousel;