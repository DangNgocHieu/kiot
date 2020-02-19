import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faCube, faExchangeAlt, faUser, faDollarSign, faMale, faChartBar, faTh, faTags, faCheckSquare, faReplyAll, faCompressArrowsAlt, faFileAlt, faShareAlt, faUndo, faTable, faFileInvoiceDollar, faChartPie, faShare } from '@fortawesome/free-solid-svg-icons';

class Menu extends Component {

  render() {
    return (      
      <div id="menu" className={this.props.color} >
        <div className="wrraper">
            <div className="list-menu">
                <a href="https://www.facebook.com/" className="overview">
                  <FontAwesomeIcon className="icon-menu" icon={faEyeSlash} />
                  Tổng quan</a>
                <a href="http://localhost:3000/Products" className="merchandise">
                  <FontAwesomeIcon className="icon-menu" icon={faCube} />
                  Hàng hóa
                  <ul>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faTh} />
                      Danh mục</li>
                    <li>
                    <FontAwesomeIcon  className="icon-menu-chill" icon={faTags} />
                      Thiết lập giá</li>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faCheckSquare} />
                      Kiểm kho</li>
                  </ul>
                </a>
                <a href="https://www.facebook.com/" className="exchange">
                  <FontAwesomeIcon className="icon-menu" icon={faExchangeAlt} />
                  Giao dịch
                  <ul>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faFileAlt} />
                      Hóa đơn</li>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faReplyAll} />
                      Trả hàng</li>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faShareAlt} />
                      Nhập hàng</li>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faShare} />
                      Trả hàng nhập</li>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faCompressArrowsAlt} />
                      Xuất hủy</li>
                  </ul>
                </a>
                <a href="https://www.facebook.com/" className="partner">
                  <FontAwesomeIcon className="icon-menu" icon={faMale} />
                  Đối tác
                  <ul>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faMale} />
                      Khách hàng</li>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faUndo} />
                      Nhà cung cấp</li>
                  </ul>
                </a>
                <a href="https://www.facebook.com/" className="staff">
                  <FontAwesomeIcon className="icon-menu" icon={faUser} />
                  Nhân viên
                  <ul>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faMale} />
                      Nhân viên</li>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faTable} />
                      Chấm công</li>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faFileInvoiceDollar} />
                      Bảng tính lương</li>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faDollarSign} />
                      Thiết lập hoa hồng</li>
                  </ul>
                </a>
                <a href="https://www.facebook.com/">
                  <FontAwesomeIcon className="icon-menu" icon={faDollarSign} />
                  Sổ quỹ</a>
                <a href="https://www.facebook.com/" className="report">
                  <FontAwesomeIcon className="icon-menu" icon={faChartBar} />
                  Báo cáo
                  <ul>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faChartPie} />
                      Cuối ngày</li>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faFileAlt} />
                      Bán hàng</li>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faEyeSlash} />
                      Đặt hàng</li>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faEyeSlash} />
                      Hàng hóa</li>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faEyeSlash} />
                      Khách hàng</li>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faEyeSlash} />
                      Nhà cung cấp</li>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faEyeSlash} />
                      Nhân viên</li>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faEyeSlash} />
                      Kênh bán hàn</li>
                    <li>
                    <FontAwesomeIcon className="icon-menu-chill" icon={faEyeSlash} />
                      Tài chính</li>
                  </ul>
                </a>
            </div>
            <div className="shop">
                <a href="https://www.facebook.com/" class="sell">
                  <FontAwesomeIcon className="icon-menu" icon={faEyeSlash} />
                  Bán Hàng</a>
            </div>
        </div>
      </div>
    );  
  }
}

export default Menu;
