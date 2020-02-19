import React, { Component } from "react";
import LeftStatusProducts from "../LeftStatusProducts";
import GroupProducts from "../GroupProducts";
import InventotyProducts from "../InventoryProducts";
import SalesProducts from "../SalesProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronDown, faSignInAlt, faSignOutAlt, faTh } from "@fortawesome/free-solid-svg-icons";

class ComponentProducts extends Component {
    constructor(props) {
        super(props);
        this.setTheme = this.setTheme.bind(this);
        this.state={
          color: ''
        }
      }
    
      setTheme(event,className) {
         event.stopPropagation(); // dwugnf tất cả các event cũ
    
        this.setState({
          color: className
        });
      }
    render () {
        return (
            <div className="componentProducts">
                <div className="wrraper">
                    <div className="products-left">
                        <div className="box-left sortView">
                            <h3>Tìm kiếm</h3>
                            <div className="boxleftC box">
                                <input type="text"  placeholder="Theo mã, tên hàng" />   
                                <input type="text"  placeholder="Theo ghi chú, mô tả đặt hàng" />
                            </div>
                        </div>    
                        <div className="box-left  leftStatus">
                            <LeftStatusProducts />
                        </div>
                        <div className="box-left  group">
                            <GroupProducts />
                        </div>               
                        <div className="box-left  inventory">
                            <InventotyProducts />
                        </div>                
                        <div className="box-left  sales">
                            <SalesProducts />
                        </div>
                        <div className="box-left  report">
                            <h3>Lựa chọn hiển thị</h3>
                            <div className="boxleftC box">
                                <div><input type="radio" /><span>Hàng đang kinh doanh</span></div>
                                <div className="boxleftC-chill"><input type="radio" ></input><span>Hàng ngừng kinh doanh</span></div>
                                <div className="boxleftC-chill"><input type="radio" ></input><span>Tất cả</span></div>
                                <div className="dropdown">
                                    <span className="number">Số bản ghi</span>
                                    <select id="cars">
                                        <option value="volvo">10</option>
                                        <option value="saab">15</option>
                                        <option value="opel">20</option>
                                        <option value="audi">30</option>
                                        <option value="audi">50</option>
                                        <option value="audi">100</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="products-right" >
                        <div className="title-products">
                            <div className="text-title">
                                <h1>Hàng hóa</h1> 
                            </div>
                            <div className="button-products">                               
                                <div className="add-products">
                                    <FontAwesomeIcon icon={faPlus} />
                                    <p>Thêm mới</p>
                                    <FontAwesomeIcon icon={faChevronDown} />                                                                                                    
                                </div>                                                            
                                <div className="import-products">
                                   <FontAwesomeIcon icon={faSignInAlt} />
                                   <p>Import</p>
                                </div>
                                <div className="export-products">
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                    <p>Xuất file</p>
                                </div>
                                <div className="columnSelection">
                                    <FontAwesomeIcon icon={faTh} className="icon-column" />
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                            </div>
                        </div>
                        <div className="table-products">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ComponentProducts;