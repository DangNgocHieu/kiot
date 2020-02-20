import React, { Component } from "react";
import LeftStatusProducts from "../LeftStatusProducts";
import GroupProducts from "../GroupProducts";
import InventotyProducts from "../InventoryProducts";
import SalesProducts from "../SalesProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronDown, faSignInAlt, faSignOutAlt, faTh, faStar, faCaretSquareLeft, faCaretLeft, faCaretSquareRight, faCaretRight, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import TableProducts from "../TableProducts";

class ComponentProducts extends Component {
    constructor(props) {
        super(props);
        this.setTheme = this.setTheme.bind(this);
        this.myRef = React.createRef();
        this.state={
          color: '',
          row:[
           
            {
                mahang: "NU016" ,
                tenhang: "Thắt lưng nữ " ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU017" ,
                tenhang: "Thắt lưng nữ HEX " ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU018" ,
                tenhang: "Thắt lưng nam HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            }
            ,
            {
                mahang: "NU019" ,
                tenhang: "Thắt lưng nam  xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            
            {
                mahang: "NU020" ,
                tenhang: "Sơ mi nam HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            
            {
                mahang: "NU021" ,
                tenhang: "Cà vạt HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            
            {
                mahang: "NU022" ,
                tenhang: "Cà vạt nam Hàn quốc" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            
            {
                mahang: "NU023" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            
            {
                mahang: "NU024" ,
                tenhang: "Thắt lưng nữ  lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            
            {
                mahang: "NU025" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU026" ,
                tenhang: "Thắt lưng nữ " ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU027" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU028" ,
                tenhang: "Thắt HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU029" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU030" ,
                tenhang: "Thắt  xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU031" ,
                tenhang: "Thắt Nam HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU032" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU033" ,
                tenhang: "Thắt lưng nữ " ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU034" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU035" ,
                tenhang: "Thắt lưng xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU036" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU037" ,
                tenhang: "Thắt  lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU038" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU039" ,
                tenhang: "Thắt  lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU040" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU041" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU042" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU043" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU044" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU045" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU046" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU047" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU048" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU049" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU050" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU051" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU052" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU053" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU054" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU055" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU056" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU057" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU058" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU059" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU060" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU061" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU062" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            },
            {
                mahang: "NU063" ,
                tenhang: "Thắt lưng nữ HEX xanh lá" ,
                giaban: "4.300.000" , 
                giavon: "1.920.000" , 
                tonkho: "8"
            }

            ],
            firstElement: 0,
            lastElement: 10,
            classScroll: ''
        }
      }
      //event khi component được gọi
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
      }
      //event khi component k được gọi, sẽ biến mất
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
      handleScroll = (event) => {
        const node = this.myRef.style;
        if(window.scrollY >= 93){
            this.setState({
                classScroll: 'scroll-active'
            })
        }
        else{
            this.setState({
                classScroll: ''
            })
        }
      };

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
                    <div className={"products-right "+ this.state.classScroll} ref={this.myRef} >
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
                            <table className="scrollable">    
                                <thead>
                                    <tr className="title-table">
                                        <th><input type="checkbox" /></th>
                                        <th>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </th>
                                        <th className="text-left">Mã hàng</th>
                                        <th className="text-left">Tên hàng</th>
                                        <th className="text-right">Giá bán</th>
                                        <th className="text-right">Giá vốn</th>
                                        <th className="text-right">Tồn kho</th>
                                    </tr>                
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th className="text-right">184</th>
                                    </tr>                                    
                                </thead>                        
                                <tbody>
                                    <TableProducts rownew={this.state.row} firstElement={this.state.firstElement} lastElement={this.state.lastElement} />
                                </tbody>
                            </table>
                            <div className="paging-box">
                                <div className="pager">
                                    <a href="#" title="Trang đầu" className="nav-head"
                                     onClick={() => {
                                        this.setState({
                                            firstElement: 0,
                                            lastElement: 10
                                        })}} 
                                    >
                                        <FontAwesomeIcon icon={faCaretSquareLeft} />
                                    </a>
                                     <a href="#" title="Trang trước" className="nav-pre" 
                                         onClick={() => {
                                             if (this.state.firstElement != 0){
                                                let fElement = this.state.firstElement - 10;
                                                let lElement = this.state.lastElement - 10;
                                              this.setState({
                                                   firstElement: fElement,
                                                   lastElement: lElement
                                               })
                                             }}}
                                     >
                                         <FontAwesomeIcon icon={faCaretLeft} />
                                         </a>
                                     <ul>
                                        <li className="number" 
                                         onClick={() => {
                                           this.setState({
                                                firstElement: 0,
                                                lastElement: 10
                                            })}} >
                                            <span>1</span>
                                        </li>
                                        <li className="number" onClick={() => {
                                            this.setState({
                                                firstElement: 10,
                                                lastElement: 20
                                            })}} >
                                            <span>2</span>
                                        </li>
                                        <li className="number" onClick={() => {
                                            this.setState({
                                                firstElement: 20,
                                                lastElement: 30
                                            })}} >
                                            <span>3</span>
                                        </li>
                                        <li className="number"onClick={() => {
                                            this.setState({
                                                firstElement: 30,
                                                lastElement: 40
                                            })}}  >
                                            <span>4</span>
                                        </li>
                                     </ul>
                                    <a href="#" title="Trang sau" className="nav-next"
                                     onClick={() => {
                                        if (this.state.lastElement != 40){
                                           let fElement = this.state.firstElement + 10;
                                           let lElement = this.state.lastElement + 10;
                                         this.setState({
                                              firstElement: fElement,
                                              lastElement: lElement
                                          })
                                        }}}
                                    >
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        </a>
                                    <a href="#" title="Trang cuối" className="nav-last"
                                     onClick={() => {
                                        this.setState({
                                            firstElement: 30,
                                            lastElement: 40
                                        })}} 
                                     >
                                         <FontAwesomeIcon icon={faCaretSquareRight} />
                                    </a>
                                    <a className="laber">Hiển thị 1 - 10 trên tổng số 40 hàng hóa</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ComponentProducts;