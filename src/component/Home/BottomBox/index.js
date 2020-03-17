import React, { Component } from "react";
import './bottombox.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHolding, faDice, faDiceThree, faGamepad, faUserPlus } from "@fortawesome/free-solid-svg-icons";
class BottomBox extends Component {
    render() {
        return (
            <div id="bottombox">
                <div className="container">
                    <div className="header-row">
                        <div className="company column-fotter">
                            <h4>DOANH NGHIỆP</h4>
                            <ul>
                                <li><a title="Về KiotViet" href="https://www.kiotviet.vn/ve-ki-ot-viet/" rel="nofollow">Về KiotViet</a></li>
                                <li><a title="Khách hàng" href="https://www.kiotviet.vn/khach-hang/" rel="nofollow">Khách hàng</a></li>
                                <li><a title="Điều khoản sử dụng" href="https://www.kiotviet.vn/dieu-khoan-su-dung/" rel="nofollow">Điều khoản sử dụng</a></li>
                                <li><a title="Chính sách bảo mật" href="https://www.kiotviet.vn/chinh-sach-bao-mat/" rel="nofollow">Chính sách bảo mật</a></li>
                                <li><a title="Liên hệ" href="https://www.kiotviet.vn/lien-he/" rel="nofollow">Liên hệ</a></li>
                            </ul>
                        </div>
                        <div className="items column-fotter">
                            <h4>NGÀNH HÀNG</h4>
                            <ul>
                                <li><a title="Thời trang" href="https://www.kiotviet.vn/phan-mem-ban-hang-thoi-trang">Thời trang</a></li>
                                <li><a title="Bar, café &amp; Nhà hàng Karaoke" href="https://www.kiotviet.vn/bar-cafe-nha-hang/">Bar, café &amp; Nhà hàng Karaoke</a></li>
                                <li><a title="Điện thoại &amp; Điện máy" href="https://www.kiotviet.vn/dien-thoai-dien-may/">Điện thoại &amp; Điện máy</a></li>
                                <li><a title="Siêu thị mini" href="https://www.kiotviet.vn/phan-mem-ban-hang-sieu-thi-mini">Siêu thị mini</a></li>
                                <li><a title="Hoa &amp; Quà tặng" href="https://www.kiotviet.vn/hoa-qua-tang/">Hoa &amp; Quà tặng</a></li>
                            </ul>
                        </div>
                        <div className="noname-1 column-fotter">
                            <h4></h4>
                            <ul>
                                <li><a title="Tạp hóa" href="https://www.kiotviet.vn/phan-mem-ban-hang-tap-hoa">Tạp hóa</a></li>
                                <li><a title="Nội thất &amp; Gia dụng" href="https://www.kiotviet.vn/noi-that/">Nội thất &amp; Gia dụng</a></li>
                                <li><a title="Xe, Máy móc &amp; linh kiện Sửa chữa" href="https://www.kiotviet.vn/linh-kien-may-moc/">Xe, Máy móc &amp; linh kiện Sửa chữa</a></li>
                                <li><a title="Sách &amp; Văn phòng phẩm" href="https://www.kiotviet.vn/sach-van-phong-pham/">Sách &amp; Văn phòng phẩm</a></li>
                                <li><a title="Vật liệu xây dựng" href="https://www.kiotviet.vn/vat-lieu-xay-dung/">Vật liệu xây dựng</a></li>
                            </ul>
                        </div>
                        <div className="noname-2 column-fotter">
                            <h4></h4>
                            <ul>
                                <li><a title="Mỹ phẩm" href="https://www.kiotviet.vn/phan-mem-quan-ly-ban-hang-my-pham">Mỹ phẩm</a></li>
                                <li><a title="Nông sản &amp; Thực phẩm" href="https://www.kiotviet.vn/nong-san-thuc-pham/">Nông sản &amp; Thực phẩm</a></li>
                                <li><a title="Mẹ &amp; Bé" href="https://www.kiotviet.vn/me-be/">Mẹ &amp; Bé</a></li>
                                <li><a title="Nhà thuốc" href="https://www.kiotviet.vn/phan-mem-quan-ly-nha-thuoc">Nhà thuốc</a></li>
                                <li><a title="Ngành hàng khác" href="https://www.kiotviet.vn/nganh-hang-khac/">Ngành hàng khác</a></li>
                            </ul>
                        </div>
                        <div className="support column-fotter">
                            <h4>HỖ TRỢ</h4>

                            <ul>
                                <li><a title="Video hướng dẫn sử dụng" href="https://www.youtube.com/c/HDSDPhanmemKiotViet" rel="nofollow">Video hướng dẫn sử dụng</a></li>
                                <li><a title="Câu hỏi thường gặp" href="https://www.kiotviet.vn/ho-tro/#faqs" rel="nofollow">Câu hỏi thường gặp</a></li>
                                <li><a title="Wiki KiotViet" href="https://www.kiotviet.vn/wiki-ki-ot-viet/" rel="nofollow">Wiki KiotViet</a></li>
                                <li><a title="Hướng dẫn sử dụng" href="https://www.kiotviet.vn/huong-dan-su-dung-kiotviet/" rel="nofollow">Hướng dẫn sử dụng</a></li>
                                <li><a title="Blog" href="https://www.kiotviet.vn/blog/" rel="nofollow">Blog</a></li>
                                <li><a title="Thông tin cập nhật Kiotviet" href="https://www.kiotviet.vn/noi-dung-cap-nhat-sap-toi/">Thông tin cập nhật Kiotviet</a></li>
                            </ul>
                        </div>
                        <div className="contact column-fotter">
                            <h4>LIÊN HỆ</h4>
                            <ul>
                                <li>Hotline</li>
                                <li>Tư vấn bán hàng:</li>
                                <li><span>1800 6162</span></li>
                                <li>Chăm sóc khách hàng:</li>
                                <li><span>1900 6522</span></li>
                                <li>Email : <a class="active" href="mailto:hotro@kiotviet.com">hotro@kiotviet.com</a></li>
                            </ul>
                            <div className="social">
                                <h4>MẠNG XÃ HỘI</h4>
                                <div className="icon-social">
                                    <FontAwesomeIcon className="icon" icon={faUserPlus} />
                                    <FontAwesomeIcon className="icon" icon={faHandHolding} />
                                    <FontAwesomeIcon className="icon" icon={faDiceThree} />
                                    <FontAwesomeIcon className="icon" icon={faGamepad} />
                                </div>
                                <p className="clearfix">© Copyright 2010-2015. KiotViet là phần mềm của Công ty Citigo.</p>
                            </div>
                        </div>
                    </div>
                    <h4>ĐỊA CHỈ</h4>
                    <div className="fotter-row">
                       
                        <div className="mb">
                            <div className="add-title">Miền Bắc</div>
                            <p><strong>HÀ NỘI:</strong> Số 1B Yết Kiêu, quận Hoàn Kiếm</p>
                            <p><strong>HẢI PHÒNG:</strong> Số 176A Tôn Đức Thắng, quận Lê Chân <br /> Hotline: 02 256 509 126</p>
                            <p><strong>QUẢNG NINH:</strong> Số 92 Cao Thắng, TP. Hạ Long<br /> Hotline: 02 036 296 060</p>
                            <p><strong>THÁI NGUYÊN:</strong> Số 111 Lương Ngọc Quyến, TP. Thái Nguyên<br /> Hotline: 0866 482 168</p>
                            <p><strong>NAM ĐỊNH:</strong> Số 125 Hai Bà Trưng, TP. Nam Định<br /> Hotline: 0981 374 268</p>
                            <p><strong>PHÚ THỌ:</strong> Lô 7 – 827 Đại Lộ Hùng Vương, TP. Việt Trì</p>
                        </div>
                        <div className="mt">
                            <div className="add-title">Miền Trung</div>
                            <p><strong>ĐÀ NẴNG:</strong> Số 223 Nguyễn Văn Linh, quận Thanh Khê<br /> Hotline: 02 366 523 966</p>
                            <p><strong>KHÁNH HÒA:</strong> Số 5B, Tòa nhà CT3, Khu đô thị VCN Phước Hải, TP. Nha Trang<br /> Hotline: 0901 903 866</p>
                            <p><strong>NGHỆ AN:</strong> Số 24 Lý Thường Kiệt, TP. Vinh<br /> Hotline: 02 386 668 168</p>
                            <p><strong>ĐẮK LẮK:</strong> Số 59 Lê Duẩn, TP. Buôn Ma Thuột<br /> Hotline: 02 623 686 890</p>
                            <p><strong>THANH HÓA:</strong> Số 15 Đội Cung, TP. Thanh Hóa<br /> Hotline: 02 376 546 688</p>
                            <p><strong>THỪA THIÊN HUẾ:</strong> Số 21 Phan Bội Châu, TP. Huế<br /> Hotline: 02 346 542 468</p>
                            <p><strong>BÌNH ĐỊNH:</strong> Số 136 Chương Dương, TP. Quy Nhơn<br /> Hotline: 02 566 527 662</p>
                            <p><strong>GIA LAI:</strong> Số 01 Đoàn Thị Điểm, TP. Pleiku<br /> Hotline: 0869 561 268</p>
                            <p><strong>LÂM ĐỒNG:</strong> Số 186 Hai Bà Trưng, TP. Đà Lạt<br /> Hotline: 0868 435 268</p>
                        </div>
                        <div className="mn">
                            <div className="add-title">Miền Nam</div>
                            <p><strong>TP. HCM:</strong> Tầng 6 – Khu C, Tòa nhà WASECO Số 10 Phổ Quang, quận Tân Bình</p>
                            <p><strong>CẦN THƠ:</strong> Số 58B Đường 03 tháng 02, quận Ninh Kiều<br /> Hotline: 0292 6502 777</p>
                            <p><strong>VŨNG TÀU:</strong> Số 17 Phạm Hồng Thái, TP. Vũng Tàu<br /> Hotline: 02 542 210 888</p>
                            <p><strong>KIÊN GIANG:</strong> L4-Căn số 2 Phan Thị Ràng, TP. Rạch Giá</p>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
export default BottomBox;