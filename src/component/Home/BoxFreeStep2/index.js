import React, { Component } from "react";
import './boxfreestep2.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faFemale, faCoffee, faAngleDown, faAngleDoubleDown, faAddressCard, faMagic, faRadiation, faDollarSign, faBezierCurve, faJedi, faWalking, faObjectGroup, faTimes, faFan, faAlignCenter } from "@fortawesome/free-solid-svg-icons";


class BoxFreeStep2 extends Component {
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
                        <div class="form-group form-check-label"> <input type="text" class="form-control" id="fullname" placeholder="Họ tên" required="" />
                           
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default BoxFreeStep2;