import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";

class Support extends Component {
    render() {
        return(
            <a href="#" id="support">
                <FontAwesomeIcon className="icon" icon={faCommentAlt} />
                <a href="#" className="text"> Hỗ trợ KiotViet</a>
                
            </a>
        );
    }
}
export default Support;