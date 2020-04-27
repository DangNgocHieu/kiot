import React, { Component } from "react";
import './news.scss'
import Img from "../../Img";
import { faThumbsUp, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class News extends Component {
    render() {
        return (
            <div id="news">
                <div className="container">
                    <h2 className="title">Tin tức nổi bật</h2>
                    <div className="box-news">
                        <div className="box-news-left">
                            <div className="list-news-1">
                                <Img link="https://dahua.vn/wp-content/uploads/2018/10/logoDSS.png" />
                                <h3>
                                    <a href="https://www.kiotviet.vn/kich-hoat-van-chuyen-ngay-khuyen-mai-trao-lien-tay/" title="Kích hoạt VẬN CHUYỂN ngay - Khuyến mãi trao liền tay"> Kích hoạt VẬN CHUYỂN ngay - Khuyến mãi trao liền tay </a>
                                </h3>
                                <p className="text">Chỉ với KiotViet, bạn đã có thể quản lý đơn hàng chặt chẽ, chính xác tiết kiệm thời gian, hạn…</p>
                                <button type="submit" className="inlineBlock" title="Like Kích hoạt VẬN CHUYỂN ngay - Khuyến mãi trao liền tay">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    <span>Like</span>
                                    <span>3</span>
                                </button>
                                <button type="submit" className="share" title="Share">
                                    <FontAwesomeIcon icon={faShare} />
                                    <span>Share</span>
                                </button>
                            </div>
                            <div className=" list-news-2">
                                <Img link="https://dahua.vn/wp-content/uploads/2020/04/anh-thums.jpg" />
                                <h3>
                                    <a href="https://dahua.vn/talkshow-ban-nghi-gi-ve-cong-nghe/" title="Lãnh đạo DSS Việt Nam chia sẻ trong Talkshow “Bạn nghĩ gì về công nghệ”"> Lãnh đạo DSS Việt Nam chia sẻ trong Talkshow “Bạn nghĩ gì về công nghệ” </a>
                                </h3>
                                <p>Từ ngày 01/03/2020, tổng đài chăm sóc khách hàng 1900 6522 của KiotViet chính thức được đưa vào hoạt động.…</p>
                                <button type="submit" className="inlineBlock" title="Like Kích hoạt VẬN CHUYỂN ngay - Khuyến mãi trao liền tay">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    <span>Like</span>
                                    <span>3</span>
                                </button>
                                <button type="submit" className="share" title="Share">
                                    <FontAwesomeIcon icon={faShare} />
                                    <span>Share</span>
                                </button>
                            </div>
                            <div className="list-news-3">
                                <Img link="https://www.kiotviet.vn/wp-content/uploads/2019/11/nang-tam-kinh-doanh-online-voi-giai-phap-quan-ly-ban-hang-fanpage-hoan-toan-moi.png" />
                                <h3>
                                    <a href="https://www.kiotviet.vn/nang-tam-kinh-doanh-online-voi-giai-phap-quan-ly-ban-hang-fanpage-hoan-toan-moi/" title="Nâng tầm kinh doanh online với Giải pháp quản lý bán hàng Fanpage hoàn toàn mới">
                                        Nâng tầm kinh doanh online với Giải pháp quản lý bán hàng Fanpage hoàn toàn mới </a>
                                </h3>
                            </div>
                            <div className="list-news-4">
                                <Img link="https://www.kiotviet.vn/wp-content/uploads/2019/12/giai-phap-cham-cong-1.png" />
                                <h3>
                                    <a href="https://www.kiotviet.vn/tich-hop-giai-phap-quan-ly-cham-cong-tinh-luong-nhan-vien-ngay-tren-kiotviet/" title="Tích hợp Giải pháp quản lý Chấm công - Tính lương nhân viên ngay trên KiotViet">
                                        Tích hợp Giải pháp quản lý Chấm công - Tính lương nhân viên ngay trên KiotViet </a>
                                </h3>
                            </div>
                            <button className="btn" >Xem thêm...</button>
                        </div>
                        <div className="box-news-right">
                            <h5 >Báo chí viết về KiotViet</h5>

                            <div className="list-img first-child">
                                <a href="http://dantri.com.vn/suc-manh-so/intel-viet-nam-chuyen-giao-cong-nghe-den-cac-nha-ban-le-20151125153648785.htm" rel="nofollow noopener noreferrer" target="_blank">
                                    <Img link="https://www.kiotviet.vn/wp-content/uploads/easy_logo_slider/352182357051vnexpress.jpg" />
                                </a>
                            </div>
                            <div className="list-img">
                                <a href="http://dantri.com.vn/suc-manh-so/intel-viet-nam-chuyen-giao-cong-nghe-den-cac-nha-ban-le-20151125153648785.htm" rel="nofollow noopener noreferrer" target="_blank">
                                    <Img link="https://www.kiotviet.vn/wp-content/uploads/easy_logo_slider/840580869293dantri.jpg" />
                                </a>
                            </div>
                            <div className="list-img">
                                <a href="http://dantri.com.vn/suc-manh-so/intel-viet-nam-chuyen-giao-cong-nghe-den-cac-nha-ban-le-20151125153648785.htm" rel="nofollow noopener noreferrer" target="_blank">
                                    <Img link="https://www.kiotviet.vn/wp-content/uploads/easy_logo_slider/936866217894carebiz.jpg" />
                                </a>
                            </div>
                            <div className="list-img">
                                <a href="http://dantri.com.vn/suc-manh-so/intel-viet-nam-chuyen-giao-cong-nghe-den-cac-nha-ban-le-20151125153648785.htm" rel="nofollow noopener noreferrer" target="_blank">
                                    <Img link="https://www.kiotviet.vn/wp-content/uploads/easy_logo_slider/28841843171tinhte.jpg" />
                                </a>
                            </div >
                            <div className="list-img">
                                <a href="http://dantri.com.vn/suc-manh-so/intel-viet-nam-chuyen-giao-cong-nghe-den-cac-nha-ban-le-20151125153648785.htm" rel="nofollow noopener noreferrer" target="_blank">
                                    <Img link="https://www.kiotviet.vn/wp-content/uploads/easy_logo_slider/61353919316thanhnien.jpg" />
                                </a>
                            </div>
                            <div className="list-img">
                                <a href="http://dantri.com.vn/suc-manh-so/intel-viet-nam-chuyen-giao-cong-nghe-den-cac-nha-ban-le-20151125153648785.htm" rel="nofollow noopener noreferrer" target="_blank">
                                    <Img link="https://www.kiotviet.vn/wp-content/uploads/easy_logo_slider/840580869293dantri.jpg" />
                                </a>
                            </div>
                            <div className="list-img">
                                <a href="http://dantri.com.vn/suc-manh-so/intel-viet-nam-chuyen-giao-cong-nghe-den-cac-nha-ban-le-20151125153648785.htm" rel="nofollow noopener noreferrer" target="_blank">
                                    <Img link="https://www.kiotviet.vn/wp-content/uploads/easy_logo_slider/751462503482saigon.jpg" />
                                </a>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        );
    }
}
export default News;