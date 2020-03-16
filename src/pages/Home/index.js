import React, { Component } from 'react';
// import { Form, Container} from 'reactstrap';
import HeaderHome from './../../component/Home/HeaderHome';
import BannerHome from '../../component/Home/BannerHome';
import Introduces from '../../component/Home/Introduces';
import Industry from '../../component/Home/Industry';
import Customer from '../../component/Home/Customer';
import News from '../../component/Home/News';

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
      </div>
    );
  }
}

export default Home;
