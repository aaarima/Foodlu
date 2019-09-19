import React from 'react';
import EpisodeExpanderContainer from "../expanders/episode_container";

export default class SeriesShow extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.menuClick = this.menuClick.bind(this);
    this.openVideo = this.openVideo.bind(this);
    this.state = {
      episodes: true,
      trailer: false,
      extras: false
    }
  }

  openVideo(e) {
    this.props.updateCurrentVideo(this.props.episodes[0])
  }

  closeModal(e) {
    if(e.target.className === e.currentTarget.className) {
      this.props.toggleModal();
    }
  }

  menuClick(menu) {
    return e => {
      Object.keys(this.state).forEach(key => key === menu ? this.setState({[key]: true}) : this.setState({[key]: false}))
    }
  }

  render() {
    if (!this.props.active) return false;
    return (
      <div className="close-modal" onClick={this.closeModal}>
        <div className="show">
          <div className="top-section">
            <div className="gradient" style={{backgroundImage: `linear-gradient(to left, transparent, ${this.props.show.shellColor} 80%)`}}></div>
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
                <div className="description">
                  <p>{this.props.show.description}</p>
                </div>
                <div className="watch-container">
                  <h3 className="item" onClick={this.openVideo}>WATCH S1E1 {this.props.episodes[0].title}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <div className="nav">
              <div className="item">
                <p>Episodes</p>
              </div>
              <div className="item">
                <p>Extras</p>
              </div>
              <div className="item">
                <p>Trailer</p>
              </div>
            </div>
            <div>
              <div className={this.state.episodes ? "content-container" : "hidden"}>
                {this.props.episodes[0].id ? this.props.episodes.map(episode => <EpisodeExpanderContainer item={episode} key={episode.id}/>) : ""}
              </div>
              <div className={this.state.series ? "content-container" : "hidden"}>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}