import React, { Component } from "react";
import './news.scss'

class News extends Component {
    render() {
        return (
            <div id="news">
                <div className="container">
                    <h2 className="title">Tin tức nổi bật</h2>
                    <div className="box-news">
                        <div className="box-news-left">
                            <div className="news-list list-news-1">
                                <a href="https://www.kiotviet.vn/kich-hoat-van-chuyen-ngay-khuyen-mai-trao-lien-tay/" title="Kích hoạt VẬN CHUYỂN ngay - Khuyến mãi trao liền tay" className="img-news"
                                   
                                > <img src="https://www.kiotviet.vn/wp-content/uploads/2019/11/kich-hoat-van-chuyen-2-1.png" /></a>
                            </div>
                            <div className="news-list list-news-2">
                                <a href="https://www.kiotviet.vn/cham-soc-chu-dao-tang-toc-ho-tro-voi-tong-dai-19006522/" title="Chăm sóc chu đáo, tăng tốc hỗ trợ với tổng đài 19006522" className="img-news"
                                   
                                > <img src="https://www.kiotviet.vn/wp-content/uploads/2020/02/Website.jpg" /></a>
                            </div>
                        </div>
                        <div className="box-news-right">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default News;