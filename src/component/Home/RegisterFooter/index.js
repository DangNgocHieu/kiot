import React, { Component } from "react";
import ButtonFree from "../ButtonFree";
import './registerfooter.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare, faPager, faVideo, faCommentAlt } from "@fortawesome/free-solid-svg-icons";

class RegisterFooter extends Component {

    render() {
        return (

            <div id="register-footer">
                <div className="container">
                    <div className="content-box">
                        <h3 className="title">Hãy để KiotViet đồng hành kinh doanh cùng bạn</h3>
                        <ButtonFree />
                    </div>
                    <div className="hotline">

                        <div className="row">
                            <h5 className="icon-hotline">
                                <FontAwesomeIcon className="icon-row" icon={faPhoneSquare} />
                                HOTLINE
                            </h5>
                            <p>
                                Tư vấn bán hàng:
                            <span> 1800 6162</span>
                            </p>
                            <p>
                                Chăm sóc khách hàng:
                            <span> 1900 6522</span>
                            </p>
                            <p>Hoạt động 365 ngày/năm từ 7:00 đến 22:00 kể cả ngày nghỉ lễ tết.</p>
                        </div>
                        <div className="row">
                            <h5 className="icon-hotline">
                                <FontAwesomeIcon className="icon-row" icon={faPager} />
                                KiotViet Fanpage
                            </h5>

                            <p>Luôn trả lời các thông tin nhanh nhất các bạn thông qua các phản hồi trên Facebook.</p>
                        </div>
                        <div className="row">
                            <h5 className="icon-hotline">
                                <FontAwesomeIcon className="icon-row" icon={faVideo} />
                                Kênh hỗ trợ youtube
                            </h5>


                            <p>Luôn cập nhật các kiến thức sử dụng phần mềm tức thời, trực quan giúp người dùng sử dụng được
                                KiotViet dễ dàng và hiệu quả nhất.</p>
                        </div>
                        <div className="row">
                            <h5 className="icon-hotline">
                                <FontAwesomeIcon className="icon-row" icon={faCommentAlt} />
                                Chat trên web và mobile
                            </h5>

                            <p>Luôn có người trực chat để trả lời câu hỏi của các bạn nhanh và hiệu quả nhất suốt 365
 ngày/năm.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default RegisterFooter;