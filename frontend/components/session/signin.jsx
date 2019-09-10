import React from "react";

function delay(t, v) {
  return new Promise(function(resolve) {
    setTimeout(resolve.bind(null, v), t)
  });
}

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
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

  handleDemo(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <button className={"button"} onClick={this.handleClick}>LOG IN</button>
        <div className={this.state.active ? "modal" : "hidden"} onClick={this.handleClick}>
          <form className={this.state.active ? "sign-in" : "hidden"} onClick={e => e.stopPropagation()}>
            <h3 className="h3">Log in to Godzillu</h3>
            <label className="label">EMAIL</label>
            <input
              className={this.state.password.length > 0 ? "input filled" : "input"}
              type="text"
              value={this.state.email}
              onChange={this.handleInput("username")}
            />
            <label className="label">PASSWORD</label>
            <input
              className={this.state.password.length > 0 ? "input filled" : "input"}
              type="text"
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
            <p>{this.props.errors.join(", ")}</p>
            <button onClick={this.handleSubmit} className="button">LOG IN</button>

            <p>Don't want to waste time creating an account? <a onClick={this.handleDemo}>Click Here to login with a demo account!</a></p>
          </form>
        </div>
      </div>
    )
  }
}