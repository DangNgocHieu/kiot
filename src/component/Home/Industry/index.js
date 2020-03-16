import React,{ Component } from "react"
import './inductry.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFemale, faCoffee, faAngleDown, faAngleDoubleDown, faAddressCard, faMagic, faRadiation, faDollarSign, faBezierCurve, faJedi, faWalking, faObjectGroup, faTimes, faFan, faAlignCenter } from "@fortawesome/free-solid-svg-icons";

class Industry extends Component {
    render (){
        return(
            <div id="industry">
                <div className="container">
                    <div className="box-title">
                        <h2 className="title">Chúng tôi thiết kế phần mềm chuyên biệt cho từng ngành hàng.</h2>
                        <p>Hãy chọn ngành hàng của bạn để xem các tính năng KiotViet giúp bạn như thế nào.</p>
                    </div>
                    <div className="box-list-industry">
                        <div className="list-industry">
                            <FontAwesomeIcon className="icon" icon={faFemale} />
                            <h3>Thời trang</h3>
                        </div>
                        <div className="list-industry">
                            <FontAwesomeIcon className="icon" icon={faCoffee} />
                            <h3>Tạp hóa </h3>
                        </div>
                        <div className="list-industry">
                            <FontAwesomeIcon className="icon" icon={faAngleDown} />
                            <h3>Bar, cafe & Nhà hàng Karaoke</h3>
                        </div>
                        <div className="list-industry">
                            <FontAwesomeIcon className="icon" icon={faAngleDoubleDown} />
                            <h3>Điện thoai, máy lạnh</h3>
                        </div>
                        <div className="list-industry">
                            <FontAwesomeIcon className="icon" icon={faAddressCard} />
                            <h3>Nhà Thuốc</h3>
                        </div>
                        <div className="list-industry">
                            <FontAwesomeIcon className="icon" icon={faMagic} />
                            <h3>Mẹ và bé</h3>
                        </div>
                        <div className="list-industry">
                            <FontAwesomeIcon className="icon" icon={faTimes} />
                            <h3>Hoa và tặng quà</h3>
                        </div>
                        <div className="list-industry">
                            <FontAwesomeIcon className="icon" icon={faRadiation} />
                            <h3>Sách và Văn phòng phẩm</h3>
                        </div>
                        <div className="list-industry">
                            <FontAwesomeIcon className="icon" icon={faJedi} />
                            <h3>Quần áo</h3>
                        </div>
                        <div className="list-industry">
                            <FontAwesomeIcon className="icon" icon={faFan} />
                            <h3>Vật liệu xây dựng</h3>
                        </div>
                        <div className="list-industry">
                            <FontAwesomeIcon className="icon" icon={faAlignCenter} />
                            <h3>Xe</h3>
                        </div>
                        <div className="list-industry">
                            <FontAwesomeIcon className="icon" icon={faDollarSign} />
                            <h3>Nông sản</h3>
                        </div>
                        <div className="list-industry">
                            <FontAwesomeIcon className="icon" icon={faObjectGroup} />
                            <h3>Mỹ phẩm</h3>
                        </div>
                        <div className="list-industry">
                            <FontAwesomeIcon className="icon" icon={faWalking} />
                            <h3>Nội thất</h3>
                        </div>
                        <div className="list-industry">
                            <FontAwesomeIcon className="icon" icon={faBezierCurve} />
                            <h3>Ngành khác</h3>
                        </div>

                    </div>
                    <div className="box-register">
                        <h2 className="title">Đăng ký dùng thử miễn phí 10 ngày!</h2>
                        <button className="free">Dùng thử miễn phí</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Industry;