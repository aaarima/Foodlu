import React from 'react';

export default class MiniExpander extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.item.watchableType === "series") {
      this.props.toggleModal();
      this.props.updateCurrentShow(this.props.item);
      this.props.fetchSeriesEpisodes(this.props.item.id);
      this.props.toggleSeriesShow();
    } else {
      this.props.toggleModal();
      this.props.updateCurrentShow(this.props.item);
      this.props.toggleMovieShow();
    }
  }

  render() {
    if (!this.props.item) return false;
    return (
      <div className="expander mini" onClick={this.handleClick}>
        <div className="img-container">
          <img src={this.props.item.thumbnail} alt=""/>
        </div>
        <div className="title">
          <h4>FOR FANS OF {this.props.genres[this.props.item.genres[0]].title.toUpperCase()}</h4>
          <h3>{this.props.item.title}</h3>
        </div>
      </div>
    );
  }
}