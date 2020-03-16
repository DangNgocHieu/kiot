import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faSearch, faPlusCircle} from '@fortawesome/free-solid-svg-icons';

class Group extends Component {
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
          <h3 className="click" onClick={this.showMenu}>Nhóm hàng          
            <FontAwesomeIcon  className="icon-time" icon={faChevronDown} /> 
            <FontAwesomeIcon className="icon-add" icon={faPlusCircle} />           
          </h3>
        </div>
        
        
        {
          this.state.showMenu
            ? (
               
            <div className="box">
                <div className="search">
                    <FontAwesomeIcon icon={faSearch} className="icon-search" />
                    <input type="text" placeholder="Tìm kiếm nhóm hàng"  className="text-search"/>
                </div>
                <div className="text-group"><span>Tất cả</span></div>
                <div className="text-group"><span>Thời trang nam</span></div>
                <div className="text-group"><span>Thời trang nữ</span></div>
                <div className="text-group"><span>Phụ kiện nam</span></div>
                <div className="text-group"><span>Phụ kiện nữ</span></div>

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
export default Group;