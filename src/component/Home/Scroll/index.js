import React, { Component } from "react";
import './scroll.scss'


class Scroll extends Component {

    handeClick = (value, action) => {

        this.props.onSet(value, action);

    }
    render() {
        return (
            <div id="scroll">
                <input type="text" autoComplete="off" className="select-input" >

                </input>
                <ul className="scroll-select">
                    {this.props.city.map((keyName, i) => (
                        <li key={i}><a href="#" className="name-city" onClick={(e) => this.handeClick(keyName, false)} >{keyName}</a></li>
                    ))}

                </ul>


            </div>
        );
    }
}
export default Scroll;