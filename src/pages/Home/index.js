import React, { Component } from 'react';
// import { Form, Container} from 'reactstrap';
import Header from './../../component/Header';
import Content from './../../component/Content'
import Footer from './../../component/Footer' 

class Home extends Component {

  
  render() {
    return (    
         
      <div id="home">
         <Header />
         <Content  history = {this.props.history }/>
         <Footer />
      </div>
    );
  }
}

export default Home;
