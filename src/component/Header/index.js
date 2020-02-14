import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faExclamationCircle, faCloudDownloadAlt, faSortDown, faWrench, faFileAlt, faMale, faPuzzlePiece, faHistory, faTrashAlt, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Img from './../../component/Img';
import Menu from './../../component/Menu';

class Header extends Component {
  constructor(props) {
    super(props);
    this.setTheme = this.setTheme.bind(this);
    this.state={
      color: ''
    }
  }

  setTheme(event,className) {
     event.stopPropagation(); // dwugnf tất cả các event cũ

    this.setState({
      color: className
    });
  }
  render() {
    return (    
      <div>  
      <div id="header">
        <div className="wrraper">
          <div>
            <a href="https://www.facebook.com/" className="logo">
              <Img link="https://cdn-app.kiotviet.vn/retailler/Content/kiotvietLogo.png" />
            </a>
          </div>
          <div className="list-menu">   
            <div className="list-menu-center">
              <a href="#" alt=" " className="topic" >
                <FontAwesomeIcon className="icon-header" icon={faPaintBrush} />
                Chủ đề
                <div className="topic-box">
                  <ul className="box-color">
                  {this.props.color.map(item => (
                    <li className={'color ' + item.className} onClick={event => this.setTheme(event, item.className)}></li>
                  ))}
                  </ul>
                </div>
              </a>     
               
              <a href="https://www.facebook.com/" className="support">
                <FontAwesomeIcon className="icon-header" icon={faExclamationCircle} />
                Hỗ trợ</a>   

              <a href="https://www.facebook.com/" className="dowload">
                <FontAwesomeIcon className="icon-header" icon={faCloudDownloadAlt} />
                Tải công cụ hỗ trợ
                <ul>
                  <li>TeamViewer</li>
                  <li>UntraViewer</li>
                  <li>AnyDesk</li>
                  <li>KiotViet chấm công vân tay</li>
                </ul>
              </a>                      
            </div>      
            <div className="list-menu-end">
              <a href="https://www.facebook.com/" className="branch-center">
                Chi nhánh trung tâm
                <FontAwesomeIcon className="icon-header" icon={faSortDown} />
              </a>   

              <a href="https://www.facebook.com/" className="setup" >Thiết lập 
              <FontAwesomeIcon className="icon-header" icon={faSortDown} />                 
                <ul>
                  <li>
                    <FontAwesomeIcon className="icon-header-chill" icon={faWrench} />
                    Thiết lập cửa hàng
                    </li>
                  <li>
                    <FontAwesomeIcon className="icon-header-chill" icon={faFileAlt} /> 
                    Quản lý mẫu in</li>
                  <li>
                    <FontAwesomeIcon className="icon-header-chill" icon={faMale} />
                    Quản lý người dùng</li>
                  <li>
                    <FontAwesomeIcon className="icon-header-chill" icon={faPuzzlePiece} />
                    Quản lý chi nhánh nhắn</li>
                  <li>
                    <FontAwesomeIcon className="icon-header-chill" icon={faHistory} />
                    Lịch sử thao tác</li>
                  <li>
                    <FontAwesomeIcon className="icon-header-chill" icon={faTrashAlt} />
                    Xóa dữ liệu dùng thử</li>   
                </ul>              
              </a> 

              <a href="https://www.facebook.com/" className="account" >0386639126  
              <FontAwesomeIcon className="icon-header" icon={faSortDown} />       
                <ul>
                  <li>
                    <FontAwesomeIcon className="icon-header-chill" icon={faUser} />
                    Tài khoản</li>
                  <li>
                    <FontAwesomeIcon className="icon-header-chill" icon={faSignOutAlt} />
                    Đăng xuất</li>    
                </ul>                
              </a>             
            </div>
          </div>
        </div>
      </div><Menu color={this.state.color} /></div>
    );  
  }
}

export default Header;
