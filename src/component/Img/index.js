import React from 'react';


class Img extends React.Component {
    
    render(){
        return(
            <img className="img" src={this.props.link} />
        );
    }
}
export default Img;
