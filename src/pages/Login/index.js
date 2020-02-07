import React, { Component } from 'react';
import {InputGroupText} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Login extends Component {
  handle(i){
    this.props.history.push(`${i}`) //truyền string
  }
  render() {
    return (      
      <div id="login">
        <div className="loginbox">
          <header className="text">
            <a className="logo">
              <span className="text-login">Đăng nhập hệ thống</span>
              <img src="https://cdn-app.kiotviet.vn/retailler/Content/kiotvietLogo.png" ></img>
            </a>
          </header>

          <section className="formlogin">
            <div className="username">
              <input data-val="true" data-val-required="Nhập tên đăng nhập!" id="UserName" name="UserName" placeholder="Tên đăng nhập" tabindex="1" type="text" />
            </div>  

            <div className="password">
              <input data-val="true" data-val-required="Nhập mật khẩu!" id="Password" name="Password" placeholder="Nhập mật khẩu" tabindex="2" type="password" />
            </div>

            <div className="remember">
              <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-house-icon-png-image_4013710.jpg"/>
              <a href="#" className="remember-login">Duy trì đăng nhập</a>              
              <span className="split">|</span>
              <a class="link" href="#">Quên mật khẩu?</a>
            </div>
          </section>

          <section className="lgBtn">
            <a href="#" className="loginBtn" onClick={()=>this.handle("DashBoard")}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQapZJP_SUrjTLA19TYStgz7J7wG3jG8bP4myDiUEWwMotTe5Nr" />
            Quản Lý</a>
            <a href="#" className="loginBtn loginBtnSale">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMPBbMK8m80_4mEwcoNQayyIDzvHAAyXUpk_C5Yw3kTR_awR1m" /> 
              Bán Hàng</a>
          </section>

        </div>
        <div className="other">
          <span className="support">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmgTWL_sWNWCffLiNTyj0tHNkW1MWzwutfPKPVNojpHENuWwih"></img>
            Hỗ trợ: 18006162</span>
        </div>
      </div>
    );
  }
}

export default Login;
