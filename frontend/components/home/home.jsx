import React from 'react'
import NavBar from "../nav_bar/NavBar";
import UserDropdownContainer from "./user_dropdown_container"
import FeaturedExpanderContainer from "../expanders/featured_container";
import MoviesContainer from "../movies/movies_index_container";
import SeriesContainer from '../series/series_index_container'
import { Link } from "react-router-dom";

function getThreeRandomItems(props) {
  let result = [];
  while (result.length < 3) {
    let mainType = Math.random() < .5 ? "series" : "movies";
    let mainIndex = Math.ceil(Math.random() * Object.keys(props[mainType]).length);
    if (result.every(watchable => watchable.title !== props[mainType][mainIndex].title)) result.push(props[mainType][mainIndex])
  }
  return result;
}

export default class Home extends React.Component{

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchSeries();
    this.props.fetchGenres();
    this.props.fetchMovies();
    this.props.fetchEpisodes();
  }

  handleClick(show) {
    return e => {
      this.props.updateCurrentShow(show);
      this.props.toggleModal();
      if(show.watchableType === "series") {
        this.props.fetchSeriesEpisodes(show.id);
        this.props.toggleSeriesShow()
      } else {
        this.props.toggleMovieShow();
      }
    }
  }

  render() {
    if (!this.props.series[1] || !this.props.movies[1] || !this.props.genres[1] ) return false;
    let threeFeatured = getThreeRandomItems(this.props);
    return (
      <div>
        <NavBar left={[<Link to={"/"}><p key={"logo"} className="logo">foodlu</p></Link>]} right={[<UserDropdownContainer/>]} />
        <div className="home-header-container">
          <div className="home-header">
            <div className="gradient" style={{backgroundImage: `linear-gradient(to left, transparent, ${threeFeatured[0].shellColor} 75%)`}}></div>
            <div className="gradient" style={{backgroundImage: `linear-gradient(to bottom, transparent, transparent, black 99%)`, opacity: .5, zIndex: 4}}></div>
            <img src={threeFeatured[0].thumbnail} alt="" />
            <div className={"header-text"}>
              <h1 onClick={this.handleClick(threeFeatured[0])}>{`${threeFeatured[0].title} (${threeFeatured[0].year})`}</h1>
              <div className="description">
                <h3>{threeFeatured[0].description}</h3>
              </div>
              <div>
                <h2 onClick={this.handleClick(threeFeatured[0])} className="watch-button">WATCH NOW</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <FeaturedExpanderContainer items={[threeFeatured[1], threeFeatured[2]]}/>
          <SeriesContainer/>
          <MoviesContainer/>
        </div>
      </div>
    )
  }
}

// const Home = props => (
//   <div>
//     <NavBar left={[<Link to={"/"}><p key={"logo"} className="logo">foodlu</p></Link>]} right={[<UserDropdownContainer/>]} />
//     <div className="welcome-image-container">
//       <div className="gradient"></div>
//       <h1>Placeholder stuff for now</h1>
//       <img src="https://chopra.com/sites/default/files/field/image/6dailyhabitsofhappypeople2.jpg" alt=""/>
//     </div>
//   </div>
// );
//
// export default Home;