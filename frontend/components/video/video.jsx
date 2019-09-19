import React from 'react';

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mini: false
    };
    this.closeVideo = this.closeVideo.bind(this)
  }

  closeVideo(e) {
    if (e.currentTarget.className === e.target.className) {
      this.props.closeCurrentVideo();
    }
  };

  render() {
    if (!this.props.video) return false;
    return (
      <div className={this.props.video ? "video-container" : "hidden"} onClick={this.closeVideo}>
        <video autoPlay controls>
          {/*<source src="https://res.cloudinary.com/aaarima/video/upload/v1568758782/main_sfls3o.mp4"/>*/}
          <source src={this.props.video.video}/>
        </video>
      </div>
    );
  }
}