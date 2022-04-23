import React from "react";
import arrow from "../assets/right-arrow.svg";
import '../styles/Dropdown.css';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make "this" work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {

        return (
            <div className="dropdown">
                <div className={this.state.isToggleOn ? "dropdown-open" : "dropdown-open dropdown-closed"}>
                    <h2 className="dropdown-title">{this.props.title}</h2>
                    <img src={arrow} className={this.state.isToggleOn ? "arrow-figure right" : "arrow-figure down"} alt="arrow" onClick={this.handleClick} />
                </div>
                <div className={this.state.isToggleOn ? "dropdown-content visible" : "dropdown-content hidden"}>
                    {this.props.content}
                </div>

            </div>
        )
    };
}

export default Toggle;