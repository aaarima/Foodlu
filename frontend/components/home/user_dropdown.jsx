import React from 'react';

export default class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver(e) {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOver} >
        <h3 className="h3">{this.props.user.firstName}</h3>
        <div className={this.state.active ? "dropdown" : "hidden"}>
          <button onClick={this.props.logout}>LOG OUT</button>
        </div>
      </div>
    );
  }
};

