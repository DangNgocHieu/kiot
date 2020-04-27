import React, { Component } from "react";
import "./banner.scss";
import Video from '../Video';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ButtonFree from "../ButtonFree";


class BannerHome extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            videoShow: false,
            link: "https://www.youtube.com/embed/oSZsEnsR71U?rel=0&controls=0&autoplay=1"
        }
    }
    handleClick(e) {
        this.setState({
            videoShow: !this.state.videoShow
        }
        )
    }
    render() {
        return (
            <div id="bannerHome">
                <div className="container">
                    <div className="left-container">
                        <a href="#" className="icon-video" onClick={e => this.handleClick(e)}></a>
                    </div>
                    <div className="right-container">
                        <div className="text-banner">
                            <span className="heading">Phần mềm quản lý bán hàng KiotViet</span>
                            <p className="text">KiotViet - Phần mềm quản lý bán hàng PHỔ BIẾN NHẤT với hơn 100.000 cửa hàng đang sử dụng. Đơn giản, dễ dùng, tiết kiệm chi phí và phù hợp với hơn 15 ngành hàng khác nhau.</p>
                            {/* <ButtonFree /> */}
                            <button id="btn">Biểu đồ</button>
                        </div>
                    </div>
                </div>
                <div className="box-video">
                    {this.state.videoShow
                        ?
                        <div className="login-overlay">
                            <Video videoUrl={this.state.link} />
                            <FontAwesomeIcon className="close" icon={faTimes} onClick={e => this.handleClick(e)} />

                        </div>
                        : ""
                    }
                </div>
            </div>
        );
    }
}
export default BannerHome;