import React from 'react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onTop: true
    };
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }


  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(e) {
    if (!$(window).scrollTop()) {
      this.setState({
        onTop: true
      })
    } else {
      this.setState({
        onTop: false
      })
    }
  }

  render() {
    return (
      <div className={this.state.onTop ? "nav-bar top" : "nav-bar not-top"}>
        <div className="left">
          {this.props.left.map((item, idx) => <div className="item" key={idx}>{item}</div>)}
        </div>
        <div className={"right"}>
          {this.props.right.map((item, idx) => <div className="item" key={idx}>{item}</div>)}
        </div>
      </div>
    )
  }
}