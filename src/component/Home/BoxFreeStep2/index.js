import React, { Component } from "react";
import './boxfreestep2.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Scroll from "../../Home/Scroll"
import { faFemale, faCoffee, faAngleDown, faAngleDoubleDown, faAddressCard, faMagic, faRadiation, faDollarSign, faBezierCurve, faJedi, faWalking, faObjectGroup, faTimes, faFan, faAlignCenter, faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import ReCAPTCHA from 'react-grecaptcha'
const callback = function () {};
const expiredCallback = function () {};

class BoxFreeStep2 extends Component {
    constructor() {
        super();
        this.state = {
            click: false,
            icon: faSortUp,
            city: [
                "Tỉnh/Thành phố - Quận/Huyện",
                "An Giang - Thành phố Châu Đốc",
                "An Giang - Thành phố Châu1235423423423423 Đốc",
                "An Giang - Thành phố C23423423423hâu Đốc",
                "An Giang - Thành phố Châu Đố121212121c",
                "An Giang - Thành phố Châu Đ12121212ốc",
                "An Giang - Thành phố Châu Đố12121212c",
                "An Giang - Thành phố Châu Đốc",
                "An Giang - Thành phố Châu Đ121341311234ốc"
            ],
            cityname: ""

        }
        this.handeClick = this.handeClick.bind(this)
      
    }
   
    handeClick(e) {
        if (this.state.icon == faSortUp) {
            this.setState(
                {
                    icon: faSortDown
                }
            )
        }
        else {
            this.setState(
                {
                    icon: faSortUp
                }
            )
        }
        this.setState(
            {
                click: !this.state.click,
            }
        )
        console.log(this.state.click)
    }
    onSet = (value, action) => {
        this.setState(
            {
                cityname: value,
                click: action
            }
        )

    }
    render() {
        return (

            <div className="container-step">
                <div className="black-step"></div>
                <div className="wrraper-step">
                    <div className="boxfree-left">
                        <img src="//www.kiotviet.vn/wp-content/themes/kiotviet/css/../images/bg-step2.jpg"></img>
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
                        <div className="form-group-right">
                            <div class="form-group form-check-label">
                                <input type="text" class="form-control" id="fullname" placeholder="Họ tên" />
                            </div>
                            <div className="form-group form-telephone-email">
                                <div className="form-telephone">
                                    <input type="text" className="form-control" id="phone" placeholder="Điện thoại" >
                                    </input>
                                    <span className="color-red">*</span>
                                </div>
                                <div className="form-email">
                                    <input type="text" className="form-control" id="phone" placeholder="Email" />
                                </div>
                            </div>
                            <div className="select-container ">
                                <div>
                                    <a href="#" className="select-choice" onClick={e => this.handeClick(e)}>
                                        <p>
                                            {this.state.cityname
                                                ? this.state.cityname
                                                : "Tỉnh/Thành phố - Quận/Huyện"
                                            }
                                        </p>
                                        < FontAwesomeIcon className="icon-sortdown" icon={this.state.icon} />
                                    </a>
                                    {
                                        this.state.click
                                            ?
                                            <Scroll city={this.state.city} onSet={this.onSet} />
                                            : ""
                                    }
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="name" placeholder="Đặt tên cho gian hàng của bạn" />
                                <span className="note" >kiotviet.vn</span>
                            </div>
                            <div className="form-group login">
                                <input type="text" className="form-control" id="name" placeholder="Tên đăng nhập" />
                                <input type="text" className="form-control" id="pass" placeholder="Mật khẩu" />
                            </div>
                            <div className="capcha form-group">
                                <ReCAPTCHA
                                    sitekey="6LeTci8UAAAAAAZV-D4OGD9x7VJvBUQ8QJDT9N4X"
                                    callback={callback}
                                    expiredCallback={expiredCallback}
                                    locale="en"
                                />
                            </div>
                            <div className="register">
                                    <a className="back" href="#" >Quay lại</a>
                                    <a className="submit" href="#"> Đăng ký </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default BoxFreeStep2;