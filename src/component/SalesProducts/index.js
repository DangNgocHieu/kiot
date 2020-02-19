import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';

class Sales extends Component {
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
          <h3 className="click" onClick={this.showMenu}>Bán trực tiếp
          <FontAwesomeIcon  className="icon-time" icon={faChevronDown} /> 
          </h3>
        </div>
        
        
        {
          this.state.showMenu
            ? (
               
            <div className="box">
                <div className="row-box box-sales"><input type="radio"  ></input><span>Tất cả</span></div>
                <div className="row-box box-sales"><input type="radio"  ></input><span>Được bán trực tiếp</span></div>
                <div className="row-box box-sales"><input type="radio"  ></input><span>Không được bán trực tiếp</span></div>
                
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
export default Sales;