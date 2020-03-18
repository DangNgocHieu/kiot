import React, { Component } from "react";
import './boxfree.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faFemale, faCoffee, faAngleDown, faAngleDoubleDown, faAddressCard, faMagic, faRadiation, faDollarSign, faBezierCurve, faJedi, faWalking, faObjectGroup, faTimes, faFan, faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import BoxFreeStep2 from "../BoxFreeStep2";

class BoxFree extends Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            boxfree: false,
        }
    }
    handleClick(e){
        this.setState(
            {
                boxfree: !this.state.boxfree
            }
        )
        console.log(this.state.boxfree)
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="black"></div>
                    <div className="wrraper">
                        <div className="boxfree-left">
                            <img src="//www.kiotviet.vn/wp-content/themes/kiotviet/css/../images/bg-step1.jpg"></img>
                            <div className="text-boxfree-left">
                                <h3>TẠO TÀI KHOẢN KIOTVIET</h3>
                                <div className="content">
                                    <h2>Hãy chọn ngành hàng kinh doanh của bạn</h2>
                                    <p>Để chúng tôi hỗ trợ một cách tốt nhất</p>
                                </div>
                                <div className="telephone">
                                    <div className="telephone-wrap">
                                        <span className="sp1"></span>
                                        <p>Hỗ trợ đăng ký 1800 6162</p>
                                        <span className="sp2"></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="boxfree-right">
                            <div className="list-industry">
                                <FontAwesomeIcon className="icon" icon={faFemale} />
                                <p>Thời trang</p>
                                <a className="hover-layout" onClick={e => this.handleClick(e)}>
                                    <p>Thời trang</p>
                                </a>
                                {
                                    this.state.boxfree 
                                    ? 
                                    <div id="step">
                                        <BoxFreeStep2 />
                                        <FontAwesomeIcon icon={faTimes}  onClick={(e) => this.handleClick(e)} />
                                    </div>
                                    :''
                                }

                            </div>
                            <div className="list-industry">
                                <FontAwesomeIcon className="icon" icon={faCoffee} />
                                <p>Tạp hóa </p>
                                <a href="#" className="hover-layout">
                                    <p>Tạp hóa</p>
                                </a>
                            </div>
                            <div className="list-industry">
                                <FontAwesomeIcon className="icon" icon={faAngleDown} />
                                <p>Bar, cafe & Nhà hàng Karaoke</p>
                                <a className="hover-layout">
                                    <p>Bar, cafe & Nhà hàng Karaoke</p>
                                </a>
                            </div>
                            <div className="list-industry">
                                <FontAwesomeIcon className="icon" icon={faAngleDoubleDown} />
                                <p>Điện thoai, máy lạnh</p>
                                <a className="hover-layout">
                                    <p>Điện thoai, máy lạnh</p>
                                </a>
                            </div>
                            <div className="list-industry">
                                <FontAwesomeIcon className="icon" icon={faAddressCard} />
                                <p>Nhà Thuốc</p>
                                <a className="hover-layout">
                                    <p>Nhà Thuốc</p>
                                </a>
                            </div>
                            <div className="list-industry">
                                <FontAwesomeIcon className="icon" icon={faMagic} />
                                <p>Mẹ và bé</p>
                                <a className="hover-layout">
                                    <p>Mẹ và bé</p>
                                </a>
                            </div>
                            <div className="list-industry">
                                <FontAwesomeIcon className="icon" icon={faTimes} />
                                <p>Hoa và tặng quà</p>
                                <a className="hover-layout">
                                    <p>Hoa và tặng quà</p>
                                </a>
                            </div>
                            <div className="list-industry">
                                <FontAwesomeIcon className="icon" icon={faRadiation} />
                                <p>Sách và Văn phòng phẩm</p>
                                <a className="hover-layout">
                                    <p>Sách và Văn phòng phẩm</p>
                                </a>
                            </div>
                            <div className="list-industry">
                                <FontAwesomeIcon className="icon" icon={faJedi} />
                                <p>Quần áo</p>
                                <a className="hover-layout">
                                    <p>Quần áo</p>
                                </a>
                            </div>
                            <div className="list-industry">
                                <FontAwesomeIcon className="icon" icon={faFan} />
                                <p>Vật liệu xây dựng</p>
                                <a className="hover-layout">
                                    <p>Vật liệu xây dựng</p>
                                </a>
                            </div>
                            <div className="list-industry">
                                <FontAwesomeIcon className="icon" icon={faAlignCenter} />
                                <p>Xe</p>
                                <a className="hover-layout">
                                    <p>Xe</p>
                                </a>
                            </div>
                            <div className="list-industry">
                                <FontAwesomeIcon className="icon" icon={faDollarSign} />
                                <p>Nông sản</p>
                                <a className="hover-layout">
                                    <p>Nông sản</p>
                                </a>
                            </div>
                            <div className="list-industry">
                                <FontAwesomeIcon className="icon" icon={faObjectGroup} />
                                <p>Mỹ phẩm</p>
                                <a className="hover-layout">
                                    <p>Mỹ phẩm</p>
                                </a>
                            </div>
                            <div className="list-industry">
                                <FontAwesomeIcon className="icon" icon={faWalking} />
                                <p>Nội thất</p>
                                <a className="hover-layout">
                                    <p>Nội thất</p>
                                </a>
                            </div>
                            <div className="list-industry">
                                <FontAwesomeIcon className="icon" icon={faBezierCurve} />
                                <p>Ngành khác</p>
                                <a className="hover-layout">
                                    <p>Ngành khác</p>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default BoxFree;