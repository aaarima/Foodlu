import React from 'react';

export default class FeaturedExpander extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(show) {
    return e => {
      this.props.toggleModal();
      this.props.updateCurrentShow(show);
      if(show.watchableType === "series"){
        this.props.fetchSeriesEpisodes(show.id);
        this.props.toggleSeriesShow()
      } else {
        this.props.toggleMovieShow()
      }
    }
  }

  render() {
    return (
      <div className="large-expanders">
        <div className="expander large" onClick={this.handleClick(this.props.items[0])}>
          <div className="gradient"
               style={{ backgroundImage: `linear-gradient(to bottom, transparent, ${this.props.items[0].shellColor} 99%)` }}></div>
          <div className="img-container large">
            <img src={this.props.items[0].thumbnail} alt=""/>
          </div>
          <div className="title-container">
            <h1>{this.props.items[0].title}</h1>
            <h3>NOW STREAMING</h3>
          </div>
        </div>
        <div className="expander large" onClick={this.handleClick(this.props.items[1])}>
          <div className="gradient"
               style={{ backgroundImage: `linear-gradient(to bottom, transparent, ${this.props.items[1].shellColor} 99%)` }}></div>
          <div className="img-container large">
            <img src={this.props.items[1].thumbnail} alt=""/>
          </div>
          <div className="title-container">
            <h1>{this.props.items[1].title}</h1>
            <h3>NOW STREAMING</h3>
          </div>
        </div>
      </div>
    );
  }
}


// const FeaturedExpander = props => {
//   if (!props.items[0]) console.log(props);
//   return (
//     <div className="large-expanders">
//       <div className="expander large">
//         <div className="gradient"
//              style={{ backgroundImage: `linear-gradient(to bottom, transparent, ${props.items[0].shellColor} 99%)` }}></div>
//         <div className="img-container large">
//           {/*<img src={props.items[0].thumbnail} alt=""/>*/}
//         </div>
//         <div className="title-container">
//           <h1>{props.items[0].title}</h1>
//           <h3>NOW STREAMING</h3>
//         </div>
//       </div>
//       <div className="expander large">
//         <div className="gradient"
//              style={{ backgroundImage: `linear-gradient(to bottom, transparent, ${props.items[1].shellColor} 99%)` }}></div>
//         <div className="img-container large">
//           {/*<img src={props.items[1].thumbnail} alt=""/>*/}
//         </div>
//         <div className="title-container">
//           <h1>{props.items[1].title}</h1>
//           <h3>NOW STREAMING</h3>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default FeaturedExpander;