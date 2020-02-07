// import React, { Component } from 'react';
// import { Form, Container} from 'reactstrap';
// class Content extends Component {
//   handle(i){
//     this.props.history.push(`${i}`) //truyền string
//   }

//   render() {
//     // cách sử dụng vòng lặp
//     // const array1 = [
//     //   {
//     //     image : "https://cdn.vatgia.vn/pictures/thumb/418x418/2016/09/zwu1474964173.png",
//     //     info : "Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm"
//     //   },
//     //   {
//     //     image : "https://cdn.vatgia.vn/pictures/thumb/418x418/2016/09/zwu1474964173.png",
//     //     info : "Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm Máy bơm"
//     //   },
//     // ]
//     // console.log("đsadá",this.props)
//     // let a= []
//     // for(let i = 0; i< array1.length ; i++){
//     //   a.push(<Form className="form">
//     //   <img class="image" src={array1[i].image} alt="" />                                                {/*array1[i] && array1[i].image ? array1[i].image : ""*/}
//     //   <p>{ array1[i].info}</p>                                                                          {/*array1[i] && array1[i].info ? array1[i].info : ""*/}
//     //   <div href="/" onClick={()=>this.handle(i)}>Chi tiết thiết bị</div>  
//     //  </Form>)
//     // }
//     return (    
         
//       <Container id="content">
//         {/* {a} */}
//         <Form className="form-home">
//          <img class="image" src="https://www.chothietbi.com/products/17mm-may-duc-1-025w-bosch-gsh-500.jpg" alt="" />
//          <h3 onClick={()=>this.handle("abc")}>30MM MÁY ĐỤC BÊ TÔNG 750W PN 3500X</h3>      
//          <p>Mã: 01234</p>
//          <p>Loại: Khoan</p>
//          <p>Trạng thái: Mới</p>
//          <p>Ngày nhập: 14/2/2020</p>
//          <p>Người sử dụng: Hiếu Đẹp Trai</p>
//          {/* <div href="/" onClick={()=>this.handle("abc")}>Chi tiết thiết bị</div>   */}
         
//         </Form>
//         <Form className="form-home">
//          <img class="image" src="https://www.chothietbi.com/products/2000w-may-duc-be-tong-ingco-pdb20001.jpg" alt="" />       
//          <h3 onClick={()=>this.handle("abc")}>2000W MÁY ĐỤC BÊ TÔNG MAKITA HM1812</h3>    
//          {/* <div href="/" onClick={()=>this.handle(2)}>Chi tiết thiết bị</div>   */}
//          <p class = "code">Mã: 01234</p>
//          <p>Loại: Đục</p>
//          <p>Trạng thái: Mới</p>
//          <p>Ngày nhập: 14/2/2020</p>
//          <p>Người sử dụng: Hiếu Đẹp Trai</p>
//         </Form>
//         <Form className="form-home">
//          <img class="image" src="https://www.chothietbi.com/products/2000w-may-duc-be-tong-makita-hm1802.jpg" alt="" />       
//          <h3 onClick={()=>this.handle("abc")}>6.35MM MÁY BẮT VÍT 500W MAXPRO MPES500V</h3>    
//          {/* <div href="/" onClick={()=>this.handle(3)}>Chi tiết thiết bị</div>   */}
//          <p class = "code">Mã: 01234</p>
//          <p>Loại: Đóng</p>         
//          <p>Trạng thái: Mới</p>
//          <p>Ngày nhập: 14/2/2020</p>
//          <p>Người sử dụng: Hiếu Đẹp Trai</p>
//         </Form>
//         <Form className="form-home">
//          <img class="image" src="https://www.chothietbi.com/products/40mm-may-khoan-duc-be-tong-1100w-makita-hr4013c.jpg" alt="" />       
//          <h3 onClick={()=>this.handle("abc")}>MÁY KHOAN BÚA ĐỤC BÊ TÔNG 1600W DEWALT D25961K</h3>    
//          {/* <div href="/" onClick={()=>this.handle(4)}>Chi tiết thiết bị</div>   */}
//          <p class = "code">Mã: 01234</p>
//          <p>Loại: Chọc</p>      
//          <p>Trạng thái: Mới</p>
//          <p>Ngày nhập: 14/2/2020</p>
//          <p>Người sử dụng: Hiếu Đẹp Trai</p>
//         </Form>
//         <Form className="form-home">
//          <img class="image" src="https://www.chothietbi.com/products/1-500w-may-duc-be-tong-hm1213c.jpg" alt="" />       
//          <h3 onClick={()=>this.handle("abc")}>720W MÁY VẶN VÍT TÔN S 2500E</h3>    
//          {/* <div href="/" onClick={()=>this.handle(5)}>Chi tiết thiết bị</div>   */}
//          <p class = "code">Mã: 01234</p>
//          <p>Loại: Khoan</p>
//          <p>Trạng thái: Mới</p>
//          <p>Ngày nhập: 14/2/2020</p>
//          <p>Người sử dụng: Hiếu Đẹp Trai</p>
//         </Form>
//         <Form className="form-home">
//          <img class="image" src="https://www.chothietbi.com/products/1700w-may-duc-be-tong-bosch-gsh-11vc.jpg" alt="" />       
//          <h3 onClick={()=>this.handle("abc")}>570W MÁY VẶN VÍT MAKITA FS2500</h3>    
//          {/* <div href="/" onClick={()=>this.handle(6)}>Chi tiết thiết bị</div>   */}
//          <p class = "code">Mã: 01234</p>
//          <p>Loại: Khoan</p>
//          <p>Trạng thái: Mới</p>
//          <p>Ngày nhập: 14/2/2020</p>
//          <p>Người sử dụng: Hiếu Đẹp Trai</p>
//         </Form>
//         <Form className="form-home">
//          <img class="image" src="https://www.chothietbi.com/products/1500w-may-duc-be-tong-ingco-pdb15006.jpg" alt="" />       
//          <h3 onClick={()=>this.handle("abc")}>17MM MÁY KHOAN ĐỤC BÊ TÔNG HELI Z1C BT 26-1</h3>    
//          {/* <div href="/" onClick={()=>this.handle(7) }>Chi tiết thiết bị</div>  */}
//          <p class = "code">Mã: 01234</p>
//          <p>Loại: Khoan</p>
//          <p>Trạng thái: Mới</p>
//          <p>Ngày nhập: 14/2/2020</p>
//          <p>Người sử dụng: Hiếu Đẹp Trai</p>
//         </Form>
//         <Form className="form-home">
//          <img class="image" src="https://www.chothietbi.com/products/1700w-may-duc-be-tong-ingco-pdb17002.jpg" alt="" />       
//          <h3 onClick={()=>this.handle("abc")}>2200W MÁY ĐỤC BÊ TÔNG TOTAL TH220502</h3>    
//          {/* <div href="/" onClick={()=>this.handle(8)}>Chi tiết thiết bị</div>   */}
//          <p class = "code">Mã: 01234</p>
//          <p>Loại: Khoan</p>
//          <p>Trạng thái: Mới</p>
//          <p>Ngày nhập: 14/2/2020</p>
//          <p>Người sử dụng: Hiếu Đẹp Trai</p>
//         </Form>
//         {/* <Form className="form new">
//           <Button class=" btn btn-secondary add-device"  onClick={()=>this.handle(9)}>Thêm thiết bị</Button>
//         </Form> */}
//       </Container>
//     );
//   }
// }

// export default Content;\
