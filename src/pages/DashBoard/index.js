import React, { Component } from 'react';
import Header from './../../component/Header';
// import Content from './../../component/Content'
import Menu from './../../component/Menu' 


class DashBoard extends Component {

  
  render() {
    return (    
         
      <div id="dashboard">
         <Header />
         <Menu />
      </div>
    );
  }
}

export default DashBoard;
