import React from "react";

class Picture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isShown : true};
        
    }

    render() {
        if (this.props.item === this.props.activeSource) {
            return (
                <img src={this.props.item} alt={("Carousel Pic ")+this.props.item} key={("pic")+this.props.pic} className={this.state.isShown ? "carousel-pic shown" : "hidden"} />
                )
        }
    }
}

export default Picture;
