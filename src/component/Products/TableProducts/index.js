import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class TableProducts extends Component {

    render() {
       
        return (

            this.props.rownew.slice(this.props.firstElement, this.props.lastElement).map(item => (
                <tr>
                    <td><input type="checkbox"></input></td>
                    <td><FontAwesomeIcon icon={faStar} /></td>
                    <td className="text-left">{item.mahang}</td>
                    <td className="text-left">{item.tenhang}</td>
                    <td className="text-right">{item.giaban}</td>
                    <td className="text-right">{item.giavon}</td>
                    <td className="text-right">{item.tonkho}</td>
                </tr>
            ))



        );
    }
}

export default TableProducts;