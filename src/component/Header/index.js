import React, { Component } from 'react';
import { Form, Container} from 'reactstrap';

class Header extends Component {

  render() {
    return (      
      <div id="header">
        <div className="wrraper">
          <div>
            <a href="#" className="logo">
              <img src="https://cdn-app.kiotviet.vn/retailler/Content/kiotvietLogo.png" />
            </a>
          </div>
          <div className="list-menu">   
                <a href="#" className="topic" >Chủ đề</a>         
                <a href="#" className="support">Hỗ trợ</a>            
                <a href="#" className="dowload">Tải công cụ hỗ trợ</a>                            
                <a href="#" className="branch-center">Chi nhánh trung tâm</a>                            
                <a href="#" className="setup" >Thiết lập                  
                  <ul>
                    <li>Thiết lập cửa hàng</li>
                    <li>Quản lý mẫu in</li>
                    <li>Quản lý người dùng</li>
                    <li>Quản lý chi nhánh nhắn</li>
                    <li>Lịch sử thao tác</li>
                    <li>Xóa dữ liệu dùng thử</li>   
                  </ul>              
                </a>                                    
                <a href="#" className="account" >0386639126                 
                  <ul>
                    <li>Tài khoản</li>
                    <li>Đăng xuất</li>    
                  </ul>                
                </a>             
          </div>
        </div>
      </div>
    );  
  }
}

export default Header;
