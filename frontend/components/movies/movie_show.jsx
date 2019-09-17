import React from 'react';

export default class MovieShow extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal(e) {
    if(e.target.className === e.currentTarget.className) {
      this.props.toggleModal();
    }
  }

  render() {
    if (!this.props.active) return false;
    return (
      <div className="close-modal">
        <div className="show">
          <div className="top-section">
            <div className="gradient" style={{backgroundImage: `linear-gradient(to left, transparent, ${this.props.show.shellColor} 99%)`}}></div>
            <div className="img-container">
              <img src={this.props.show.thumbnail} alt=""/>
            </div>
            <div className="main">
              <div className="img-container">
                <img src={this.props.show.cover} alt=""/>
              </div>
              <div className="text-container">
                <h1>{this.props.show.title} ({this.props.show.year})</h1>
                <h3>{this.props.show.contentRating} &#183; {this.props.genres.map(genre => genre.title).join(", ")} &#183; {this.props.show.contentType === "series" ? "TV Series" : "Movie"} &#183; {this.props.show.year}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}