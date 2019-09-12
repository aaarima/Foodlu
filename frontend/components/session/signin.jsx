import React from "react";

function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t)
  });
}

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      active: {
        email: false,
        password: false
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidUpdate() {
    if (this.props.active === false && !Object.keys(this.state.active).every(el => !this.state.active[el])) {
      this.setState({
        active: {
          email: false,
          password: false
        }
      })
    }
  }

  handleInput(str) {
    return (e) => {
      this.setState({ [str]: e.target.value })
    }
  }

  handleSubmit(e) {
    if (e) e.preventDefault();
    this.props.login(this.state)
      .then(this.props.toggleLoginPage);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.toggleModal();
  }

  // handle the demo login. has a cool pasting animation.
  handleDemo(e) {
    e.preventDefault();
    this.setState({
      email: "demo@email.com"
    });
    setTimeout(() => this.setState({ password: "123456" }), 700);
    setTimeout(() => this.handleSubmit(), 1400);
  }

  validEmail() {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email);
  }

  validPassword() {
    return this.state.password.length > 5;
  }

  emailClass() {
    if (!this.state.active.email || this.validEmail()) {
      return "input"
    } else {
      return "input invalid-input"
    }
  }

  passwordClass() {
    if (!this.state.active.password || this.validPassword()) {
      return "input"
    } else {
      return "input invalid-input"
    }
  }

  // this is to see if a field has been typed in or not.
  // When the page loads, the desired layout is to have no errors initially until
  // the user starts typing in the field.
  setActive(field) {
    let nextActiveState = Object.assign({}, this.state.active);
    nextActiveState[field] = true;
    return e => {
      this.setState({
        active: nextActiveState
      });
    }
  }

  allValid() {
    return this.validEmail() && this.validPassword();
  }

  render() {
    return (
      <div className="form-container" onClick={this.props.toggleModal}>
        <form className={this.props.active ? "sign-in" : "hidden"} onClick={e => e.stopPropagation()}>
          <h3 className="h3">Log in to foodlu</h3>
          <label className="label">EMAIL</label>
          <input
            className={this.emailClass()}
            type="text"
            value={this.state.email}
            onChange={this.handleInput("email")}
            onClick={this.setActive("email")}
          />
          <div className="errors">
            {this.emailClass() === "input" ? "" : "Please Enter a Valid Email"}
          </div>
          <label className="label">PASSWORD</label>
          <input
            className={this.passwordClass()}
            type="text"
            value={this.state.password}
            onChange={this.handleInput("password")}
            onClick={this.setActive("password")}
          />
          <div className="errors">
            {this.passwordClass() === "input" ? "" : "Password must be 6 characters long"}
          </div>
          <div className="errors">
            {this.props.errors.join(", ")}
          </div>
          <button
            onClick={this.allValid() ? this.handleSubmit : null}
            className={this.allValid() ? "button" : "disabled-button"}
          >{this.allValid() ? "LOG IN" : "Credentials Invalid"}</button>

          <p>Don't want to waste time creating an account? <a onClick={this.handleDemo}>Click Here to login with a demo
            account!</a></p>
        </form>
      </div>
    )
  }
}