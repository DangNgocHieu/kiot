import React, { Component } from "react";
import './introduces.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube, faUserPlus, faDollarSign } from "@fortawesome/free-solid-svg-icons";
class Introduces extends Component {
    render() {
        return (
            <div id="introduces">
                <div className="container">
                    <div className="list-introduces">
                        <h2 className="title">Tại sao bạn thích phần mềm quản lý bán hàng KiotViet?</h2>
                    </div>
                    <div className="row">
                        <div className="list-introduces like-products">
                           <FontAwesomeIcon className="icon-checkbox"icon={faCube} />
                            <div className="text-introduces">
                                <h3>Đơn giản & dễ dùng</h3>
                                <p>Nhân viên bán hàng chỉ mất 15 phút làm quen để bắt đầu bán hàng với KiotViet.
                                Giao diện đơn giản, thân thiện, thông minh giúp bạn triển khai quản lý bán hàng thật dễ dàng và nhanh chóng.
                                </p>
                            </div>
                        </div>
                        <div className="list-introduces like-products">
                            <FontAwesomeIcon className="icon-checkbox" icon={faUserPlus} />
                            <div className="text-introduces">
                                <h3>Phù hợp cho từng ngành hàng</h3>
                                <p>Cùng với các chuyên gia bán hàng dày kinh nghiệm, chúng tôi nghiên cứu thiết kế phần mềm phù hợp đến hơn 15 ngành hàng dành cho cả bán buôn lẫn bán lẻ.
                                </p>
                            </div>
                        </div>
                        <div className="list-introduces like-products">
                           <FontAwesomeIcon className="icon-checkbox" icon={faDollarSign} />
                            <div className="text-introduces">
                                <h3>Tiết kiệm chi phí nhất</h3>
                                <p>Miễn phí cài đặt, phí triển khai, nâng cấp và hỗ trợ. Rẻ hơn một ly trà đá, chỉ từ 6.000 đồng/ngày, bạn đã có thể áp dụng công nghệ vào quản lý cửa hàng.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="free">Dùng thử miễn phí</button>
                </div>
            </div>
        );
    }
}
export default Introduces;