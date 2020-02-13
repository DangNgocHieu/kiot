import React from 'react';


class Img extends React.Component {
    
    render(){
        return(
            <img src={this.props.link} />
        );
    }
}
export default Img;
