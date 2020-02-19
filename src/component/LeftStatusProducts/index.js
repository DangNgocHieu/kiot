import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';

class LeftStatus extends Component {
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
          <h3 className="click" onClick={this.showMenu}>Loại hàng
          <FontAwesomeIcon  className="icon-time" icon={faChevronDown} /> 
          </h3>
        </div>
        
        
        {
          this.state.showMenu
            ? (
               
            <div className="box">
                <div className="row-box"><input type="checkbox"  ></input><span>Hàng hóa</span></div>
                <div className="row-box"><input type="checkbox"  ></input><span>Dịch vụ</span></div>
                <div className="row-box"><input type="checkbox"  ></input><span>Combo - Đóng gói</span></div>
                
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
export default LeftStatus;