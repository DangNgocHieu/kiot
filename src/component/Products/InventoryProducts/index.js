import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

class Iventory extends Component {
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
        <div>
          <h3 className="click" onClick={this.showMenu}>Tồn kho
          <FontAwesomeIcon  className="icon-time" icon={faChevronDown} /> 
          </h3>
        </div>
        
        
        {
          this.state.showMenu
            ? (
               
            <div className="box">
                <div className="row-box"><input type="radio"  ></input><span>Tất cả</span></div>
                <div className="row-box"><input type="radio"  ></input><span>Dưới định mức tồn</span></div>
                <div className="row-box"><input type="radio"  ></input><span>Vượt định mức tồn</span></div>
                <div className="row-box"><input type="radio"  ></input><span>Còn hàng trong kho</span></div>
                <div className="row-box"><input type="radio"  ></input><span>Hết hàng trong kho</span></div>
                
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
export default Iventory;