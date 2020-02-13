import React, { Component } from 'react';
import { Form, Container} from 'reactstrap';
import Img from './../../component/Img';
class Footer extends Component {

  render() {
    return (      
      <Container id="footer">
        <Form className="form-footer">
        <Img link="https://3.bp.blogspot.com/-IzYETuZ48C8/T7MQmHucwCI/AAAAAAAABEQ/jBTkIk7ObKY/s1600/hinh-nen-dep-31.jpg" alt="" />   
        </Form>
      </Container>
    );
  }
}

export default Footer;
