import React, { Component } from "react";
import './customer.scss'

class Customer extends Component {
    render() {
        return (
            <div id="customer">
                <div className="container">
                    <div className="box-title">
                        <h2 className="title">Khách hàng của chúng tôi</h2>
                        <p>KiotViet là phần mềm quản lý bán hàng PHỔ BIẾN NHẤT hiện nay. Với hơn 100.000 cửa hàng đang sử dụng và hơn 5.000 cửa hàng mới mỗi tháng.</p>
                    </div>
                    <div className="box-customer">
                        <div className="list-customer">
                            <div className="img-customer">
                                <img src="https://www.kiotviet.vn/wp-content/themes/kiotviet/images/aothun.jpg" ></img>
                                </div>
                            <h3>Aothun.vn</h3>
                        </div>
                        <div className="list-customer">
                            <div className="img-customer">
                                <img src="https://www.kiotviet.vn/wp-content/themes/kiotviet/images/dalat.jpg" ></img>
                                </div>
                            <h3>Aothun.vn</h3>
                        </div>
                        <div className="list-customer">
                            <div className="img-customer">
                                <img src="https://www.kiotviet.vn/wp-content/themes/kiotviet/images/master.jpg" ></img>
                                </div>
                            <h3>Aothun.vn</h3>
                        </div>
                        <div className="list-customer">
                            <div className="img-customer">
                                <img src="https://www.kiotviet.vn/wp-content/themes/kiotviet/images/cuulong.jpg" ></img>
                                </div>
                            <h3>Aothun.vn</h3>
                        </div>
                        <div className="list-customer">
                            <div className="img-customer">
                                <img src="https://www.kiotviet.vn/wp-content/themes/kiotviet/images/vtc.jpg" ></img>
                                </div>
                            <h3>Aothun.vn</h3>
                        </div>

                    </div>
                    <button className="btn" >Xem thêm...</button>
                </div>
            </div>
        );
    }
}
export default Customer;