import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchDollar, faReply, faArrowCircleDown, faArrowCircleRight, faChevronDown, faVolumeDown } from '@fortawesome/free-solid-svg-icons';
import ColumnGraphRevenue from '../ColumnGraphRevenue';
import RowGraphTop from '../RowGraphTop';
import DropdowMenu from '../DropdowMenu';
import Menu from '../../Menu';
import Img from '../../Img';


class ContainerDashBoard extends Component {

    render() {
        return (
            <div id="containerdashboard">
                <Menu />
                <div className="wrraper">
                    <div className="dashboardLeft">
                    <div className="dashloadInfo">
                                <Img link="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/82507248_177416883347702_3813286383041118208_n.jpg?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=ke1nB0BwBJsAX8m9DmJ&_nc_ht=scontent-hkg4-1.xx&oh=0416bd358d64eee1bb42ec9e86cdbe7e&oe=5EC676DC&dl=1" />
                                <span className="text-name">Quỳnh Lê</span>
                                <FontAwesomeIcon className="icon" icon={faChevronDown} />
                            </div>
                        <div className="dashboardBox">
                           
                            <div className="dashloadGeneral">
                                <div className="total">
                                    <FontAwesomeIcon className="icon-total" icon={faSearchDollar} />
                                    <div className="text-total">
                                        <span className="dash-title"> 0 Hóa đơn</span>
                                        <span className="number"> 0</span>
                                        <span className="yesterday">Doanh thu tuần</span>
                                    </div>
                                </div>
                                <div className="return">
                                    <FontAwesomeIcon className="icon-total" icon={faReply} />
                                    <div className="text-return">
                                        <span className="dash-title"> 0 Hóa đơn</span>
                                        <span className="number"> 0</span>
                                        <span className="yesterday">Trả hàng</span>
                                    </div>
                                </div>
                                <div className="download">
                                    <FontAwesomeIcon className="icon-dowload" icon={faArrowCircleDown} />
                                    <div className="text-dowload">
                                        <span className="dash-title">&ensp;</span>
                                        <span className="number"> -20.98%</span>
                                        <span className="yesterday"> So với cùng kỳ tháng trước</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dashboardBox">
                            <div className="dashboarhTitle">
                                <div className="posR">
                                    <span>DOANH THU THUẦN HÔM NAY</span>
                                    <span>&ensp; &ensp;</span>
                                    <FontAwesomeIcon icon={faArrowCircleRight} />
                                    <span>&ensp;</span>
                                    <span>0</span>
                                </div>
                                <div className="time time-one " >
                                    <DropdowMenu />
                                </div>
                            </div>
                            <div>
                                <ul className="kv-tab">
                                    <li className="date">Theo ngày</li>
                                    <li className="hour">Theo giờ</li>
                                    <li className="day">Theo thứ</li>
                                </ul>
                            </div>
                            <div className="columngraph">
                                <ColumnGraphRevenue />
                            </div>
                        </div>
                        <div className="dashboardBox">
                            <div className="dashboarhTitle">
                                <div className="posR">
                                    <span>TOP 10 HÀNG HÓA BÁN CHẠY THÁNG NÀY</span>
                                    <span>&ensp; &ensp;</span>
                                    <a href="#" alt=''>THEO DOANH THU
                                    <span>&ensp;</span>
                                        <FontAwesomeIcon className="icon-time" icon={faChevronDown} />
                                    </a>
                                </div>
                                <div className="time">
                                    <DropdowMenu />
                                </div>
                            </div>
                            <div className="rowgraph">
                                {/* <canvas id="bar-chart-horizontal" width="800" height="450"></canvas> */}
                                <RowGraphTop />
                            </div>
                        </div>
                    </div>
                    {/* <div className="dashboardRight">
                        <div className="dashboarImg">
                            <img src="https://www.kiotviet.vn/wp-content/uploads/2013/09/anh-banner.png" />
                        </div>
                        <div className="dashboard-noPie">
                            <div className="title">
                                Các hoạt động gần đây
                            </div>
                            <div className="dashboard-list">
                                <ul>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faVolumeDown} />
                                        <a className="list-title">Ưu đãi độc quyền – Đồng giá giao hàng</a>
                                        <p className="text-title">Kính gửi quý khách hàng! Giao Hàng Nhanh, ViettelPost, VNPost, J&T, Ahamove đồng giá...</p>
                                        <p className="time-day">2 ngày trước</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faVolumeDown} />
                                        <a className="list-title">Ưu đãi độc quyền – Đồng giá giao hàng</a>
                                        <p className="text-title">Kính gửi quý khách hàng! Giao Hàng Nhanh, ViettelPost, VNPost, J&T, Ahamove đồng giá...</p>
                                        <p className="time-day">2 ngày trước</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faVolumeDown} />
                                        <a className="list-title">Ưu đãi độc quyền – Đồng giá giao hàng</a>
                                        <p className="text-title">Kính gửi quý khách hàng! Giao Hàng Nhanh, ViettelPost, VNPost, J&T, Ahamove đồng giá...</p>
                                        <p className="time-day">2 ngày trước</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faVolumeDown} />
                                        <a className="list-title">Ưu đãi độc quyền – Đồng giá giao hàng</a>
                                        <p className="text-title">Kính gửi quý khách hàng! Giao Hàng Nhanh, ViettelPost, VNPost, J&T, Ahamove đồng giá...</p>
                                        <p className="time-day">2 ngày trước</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faVolumeDown} />
                                        <a className="list-title">Ưu đãi độc quyền – Đồng giá giao hàng</a>
                                        <p className="text-title">Kính gửi quý khách hàng! Giao Hàng Nhanh, ViettelPost, VNPost, J&T, Ahamove đồng giá...</p>
                                        <p className="time-day">2 ngày trước</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faVolumeDown} />
                                        <a className="list-title">Ưu đãi độc quyền – Đồng giá giao hàng</a>
                                        <p className="text-title">Kính gửi quý khách hàng! Giao Hàng Nhanh, ViettelPost, VNPost, J&T, Ahamove đồng giá...</p>
                                        <p className="time-day">2 ngày trước</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faVolumeDown} />
                                        <a className="list-title">Ưu đãi độc quyền – Đồng giá giao hàng</a>
                                        <p className="text-title">Kính gửi quý khách hàng! Giao Hàng Nhanh, ViettelPost, VNPost, J&T, Ahamove đồng giá...</p>
                                        <p className="time-day">2 ngày trước</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faVolumeDown} />
                                        <a className="list-title">Ưu đãi độc quyền – Đồng giá giao hàng</a>
                                        <p className="text-title">Kính gửi quý khách hàng! Giao Hàng Nhanh, ViettelPost, VNPost, J&T, Ahamove đồng giá...</p>
                                        <p className="time-day">2 ngày trước</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faVolumeDown} />
                                        <a className="list-title">Ưu đãi độc quyền – Đồng giá giao hàng</a>
                                        <p className="text-title">Kính gửi quý khách hàng! Giao Hàng Nhanh, ViettelPost, VNPost, J&T, Ahamove đồng giá...</p>
                                        <p className="time-day">2 ngày trước</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faVolumeDown} />
                                        <a className="list-title">Ưu đãi độc quyền – Đồng giá giao hàng</a>
                                        <p className="text-title">Kính gửi quý khách hàng! Giao Hàng Nhanh, ViettelPost, VNPost, J&T, Ahamove đồng giá...</p>
                                        <p className="time-day">2 ngày trước</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faVolumeDown} />
                                        <a className="list-title">Ưu đãi độc quyền – Đồng giá giao hàng</a>
                                        <p className="text-title">Kính gửi quý khách hàng! Giao Hàng Nhanh, ViettelPost, VNPost, J&T, Ahamove đồng giá...</p>
                                        <p className="time-day">2 ngày trước</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="icon" icon={faVolumeDown} />
                                        <a className="list-title">Ưu đãi độc quyền – Đồng giá giao hàng</a>
                                        <p className="text-title">Kính gửi quý khách hàng! Giao Hàng Nhanh, ViettelPost, VNPost, J&T, Ahamove đồng giá...</p>
                                        <p className="time-day">2 ngày trước</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
        </div> */}
                </div>
            </div>
        );
    }
}
export default ContainerDashBoard;