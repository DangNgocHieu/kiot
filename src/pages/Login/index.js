import React  from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp, faBabyCarriage, faTasks} from "@fortawesome/free-solid-svg-icons";
import { useTranslation  } from 'react-i18next';
import Img from './../../component/Img';

export default function Login() {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = useTranslation();
  
  return (
    <div id="login">
      <div className="loginbox">
        <header className="text">
          <a href="https://www.facebook.com/" className="logo">
            <span className="text-login">{t('Đăng Nhập Hệ Thống')}</span>
            <Img link="https://cdn-app.kiotviet.vn/retailler/Content/kiotvietLogo.png" />
            {/* <img src="https://cdn-app.kiotviet.vn/retailler/Content/kiotvietLogo.png" alt=""></img> */}
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
            <FontAwesomeIcon icon={faThumbsUp} />
            <a href="https://www.facebook.com/" className="remember-login">Duy trì đăng nhập</a>
            <span className="split">|</span>
            <a class="link" href="https://www.facebook.com/">
              Quên mật khẩu?</a>
          </div>
        </section>

        <section className="lgBtn">
          <a href="http://localhost:3000/DashBoard" className="loginBtn">
            <FontAwesomeIcon icon={faTasks} />
            <h6>Quản Lý</h6>
          </a>
          <a href="https://www.facebook.com/" className="loginBtn loginBtnSale">
            <FontAwesomeIcon icon={faBabyCarriage} />
            <h6>Bán Hàng</h6>
          </a>
        </section>

      </div>
      <div className="other">
        <span className="support">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmgTWL_sWNWCffLiNTyj0tHNkW1MWzwutfPKPVNojpHENuWwih" alt =""></img>
          Hỗ trợ: 18006162</span>
      </div>
    </div>
  );
}

// export default Login;
