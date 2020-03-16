import React, { Component } from "react";
import './video.scss';
class Video extends Component {
    
    render() {
        return (
            <div className="video">
                <iframe className="link-video" src={this.props.videoUrl} />
            </div>
        );
    }
}
export default Video;