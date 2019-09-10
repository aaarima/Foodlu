import React from "react";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      active: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(str) {
    return (e) => {
      this.setState({ [str]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div>
        <button className={"nav-button"} onClick={this.handleClick}>Sign In!</button>
        <div className={this.state.active ? "modal" : "hidden"}>
          <form className={this.state.active ? "sign-in" : "hidden"}>
            <ul className="errors">
              {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>EMAIL</label>
            <input type="text" value={this.state.username} onChange={this.handleInput("username")}/>
            <label>PASSWORD</label>
            <input type="text" value={this.state.password} onChange={this.handleInput("password")}/>
            <button onClick={this.handleSubmit}>Sign In</button>
          </form>
        </div>
      </div>
    )
  }
}