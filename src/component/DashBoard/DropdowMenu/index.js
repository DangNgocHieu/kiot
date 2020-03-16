import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

class Card extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    }
    
    this.showMenu = this.showMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render() {
    return (
      <div>
        <button class="click" onClick={this.showMenu}>
          Hôm nay
          <FontAwesomeIcon  className="icon-time" icon={faChevronDown} /> 
        </button>
        
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <button className ="text"> Hôm nay </button>
                <button className ="text"> Hôm qua </button>
                <button className ="text"> 7 ngày qua </button>
                <button className ="text"> Tháng này </button>
                <button className ="text"> Tháng trước </button> 
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}
export default Card;