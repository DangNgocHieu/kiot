import React, { Component } from "react";
import './boxkiot.scss'
import Img from "../../Img";
class BoxKiot extends Component {
    render() {
        return (
            <div id="boxkiot">
                <div className="container">
                    <h3 className="title">Hãy để chúng tôi giúp bạn!</h3>
                    <p>Tại KiotViet, chúng tôi luôn cố gắng tạo ra môi trường làm việc chuyên nghiệp,
                    sáng tạo và kỷ luật cao. KiotViet tập hợp những chuyên gia hàng đầu trong lĩnh vực bán lẻ,
                    đội ngũ kỹ sư trẻ giàu nhiệt huyết
                    và các nhân viên tư vấn khách hàng luôn sẵn sàng hỗ trợ bạn suốt 7 ngày trong tuần.
                    </p>
                </div>
                <div className="content">
                    <Img link="//www.kiotviet.vn/wp-content/themes/kiotviet/css/../images/Anh-tap-the.png" />
                </div>
            </div>
        );
    }
}
export default BoxKiot;