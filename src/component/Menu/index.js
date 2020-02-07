import React, { Component } from 'react';

class Menu extends Component {

  render() {
    return (      
      <div id="menu">
        <div className="wrraper">
            <div className="list-menu">
                <a href="https://www.facebook.com/">Tổng quan</a>
                <a href="https://www.facebook.com/">Hàng hóa</a>
                <a href="https://www.facebook.com/">Giao dịch</a>
                <a href="https://www.facebook.com/">Đối tác</a>
                <a href="https://www.facebook.com/">Nhân viên</a>
                <a href="https://www.facebook.com/">Sổ quỹ</a>
                <a href="https://www.facebook.com/">Báo cáo</a>
            </div>
            <div className="shop">
                <a href="https://www.facebook.com/">Bán Hàng</a>
            </div>
        </div>
      </div>
    );  
  }
}

export default Menu;
