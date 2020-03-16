import React, { Component } from "react";
import Img from "../../Img";

class HeaderHome extends Component {
    render() {
        return (
            <div id="header-home">
                <div className="header">
                    <Img link="https://www.kiotviet.vn/wp-content/themes/kiotviet/images/kiotvietLogo.png" />
                    <div className="nav-menu">
                    <a href="#" className="menu-item">Khách hàng</a>
                    <a href="#" className="menu-item">Sản phẩm
                        <ul>
                            <li><p>Tính năng</p></li>
                            <li><p>Hỗ trợ</p></li>
                        </ul>
                    </a>
                    <a href="#" className="menu-item">Phí dịch vụ</a>
                    <a href="#" className="menu-item">Hỗ trợ</a>
                    <a href="#" className="menu-item">Hợp tác
                        <ul>
                            <li><p>Giới thiệu khách hàng</p></li>
                        </ul>
                    </a>
                    <a href="#" className="menu-item">Tin tức 
                        <ul>
                            <li><p>Kinh nghiệm kinh doanh</p></li>
                            <li><p>Câu chuyện thành công</p></li>
                            <li><p>Mẹo hay</p></li>
                            <li><p>Khuyến mãi</p></li>
                            <li><p>Tin tức về KiotViet</p></li>
                            <li><p>Thông tin cập nhật KiotViet</p></li>
                        </ul>
                    </a>
                    <label href="#" className=" login" >Đăng nhập</label>
                    </div>
                </div>
               

            </div>
           
        );
    }
}
export default HeaderHome;