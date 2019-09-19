import React from 'react';

export default class EpisodeExpander extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.updateCurrentVideo(this.props.item);
  }

  render() {
    return (
      <div className="expander episode" onClick={this.handleClick}>
        <div className="img-container">
          <img src={this.props.item.thumbnail} alt=""/>
          <div className="time">
            <p>{Math.floor(this.props.item.length/60) < 10 ? "0" : ""}{Math.floor(this.props.item.length/60)}:{this.props.length % 60 < 10 ? "0" : ""}{this.props.length % 60}</p>
          </div>
        </div>
        <div className="title">
          <h4>EPISODE {this.props.item.episodeNumber}</h4>
          <h3>{this.props.item.title}</h3>
        </div>
      </div>
    );
  }
}