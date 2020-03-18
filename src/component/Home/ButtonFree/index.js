import React, { Component } from "react";
import './buttonfree.scss'
import BoxFree from "../BoxFree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class ButtonFree extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            freeshow: false
        }
    }
    handleClick(e) {
        this.setState({
            freeshow: !this.state.freeshow
        })
        console.log(this.state.freeshow)
    }

    render() {
        return (
            <div>
                <a href="#" id="button-free" onClick={e => this.handleClick(e)}>
                    <button className="free">Dùng thử miễn phí</button>
                </a>
                <div>
                    {this.state.freeshow
                        ?
                        
                        <div id="action">
                            <BoxFree />
                            <FontAwesomeIcon className="close" icon={faTimes} onClick={e => this.handleClick(e)} />
                        </div>
                        : ""
                    }
                </div>
            </div>
        );
    }
}
export default ButtonFree;