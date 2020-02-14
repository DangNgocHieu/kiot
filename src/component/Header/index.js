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
                    <li>
                      <Img  link="https://lh3.googleusercontent.com/proxy/b7MLcwkPrByozoSq2mYsWHVqOF4f-rBmFGFtRktyo_H6LT3fRZ9i7Foz4nRNJcXFPQFbrxBKR8sYyBsopHiHGCVH7ybnF7m-1PdH2nYpi-aiVFDwv5gXzpI5yWAGBirWa0Ea" />
                      <a href="#" className="text-link">TeamViewer</a>
                      </li>
                    <li>
                      <Img link="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDGg3oG6m3E2bKrDIehVnV7CRDgJvHqTLVrjuknyDIahwOBQVe" />
                      <a href="#" className="text-link">UntraViewer</a>
                    </li>
                    <li>
                      <Img link="https://cdn.neow.in/news/images/uploaded/2018/04/1523434306_anydesk_story.jpg" />
                      <a href="#" className="text-link">AnyDesk</a>
                      </li>
                    <li>
                      <Img link="https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ac/d2/68/acd268c3-0063-6716-6ad4-ef689b0011bc/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-85-220.png/1200x630wa.png"/>
                      <a href="#" className="text-link">KiotViet chấm công vân tay</a>
                      </li>
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
