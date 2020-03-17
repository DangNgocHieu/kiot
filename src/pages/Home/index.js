import React, { Component } from 'react';
// import { Form, Container} from 'reactstrap';
import HeaderHome from './../../component/Home/HeaderHome';
import BannerHome from '../../component/Home/BannerHome';
import Introduces from '../../component/Home/Introduces';
import Industry from '../../component/Home/Industry';
import Customer from '../../component/Home/Customer';
import News from '../../component/Home/News';
import BoxKiot from '../../component/Home/BoxKiot';
import RegisterFooter from '../../component/Home/RegisterFooter';
import BottomBox from '../../component/Home/BottomBox';
import Support from '../../component/Support';

class Home extends Component {

  
  render() {
    return (    
      
      <div id="home">
        <HeaderHome />
        <BannerHome />
        <Introduces />
        <Industry />
        <Customer />
        <News />
        <BoxKiot />
        <RegisterFooter />
        <BottomBox />
        <Support />
      </div>
    );
  }
}

export default Home;
