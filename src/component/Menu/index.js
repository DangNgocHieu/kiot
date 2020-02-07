import React, { Component } from 'react';
import { Form, Container} from 'reactstrap';

class Menu extends Component {

  render() {
    return (      
      <div id="menu">
        <div className="wrraper">
            <div className="list-menu">
                <a href="#">Tổng quan</a>
                <a href="#">Hàng hóa</a>
                <a href="#">Giao dịch</a>
                <a href="#">Đối tác</a>
                <a href="#">Nhân viên</a>
                <a href="#">Sổ quỹ</a>
                <a href="#">Báo cáo</a>
            </div>
            <div className="shop">
                <a href="#">Bán Hàng</a>
            </div>
        </div>
      </div>
    );  
  }
}

export default Menu;
