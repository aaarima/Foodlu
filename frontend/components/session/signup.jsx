import React from "react";

export default class SignUp extends React.Component {
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
      this.setState({[str]: e.target.value})

    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createUser(this.state).then(this.props.history.push("/"))
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
        <button className={"nav-button"} onClick={this.handleClick}>Sign Up!</button>
        <div className={this.state.active ? "modal" : "hidden"}>
          <form className={this.state.active ? "sign-up" : "hidden"}>
            <ul>
              { this.props.errors.map((error, idx) => <li key={idx}>{error}</li>) }
            </ul>
            <label>EMAIL</label>
            <input type="text" value={ this.state.username } onChange={ this.handleInput("username") }/>
            <label>PASSWORD</label>
            <input type="text" value={ this.state.password } onChange={ this.handleInput("password") }/>
            <button onClick={ this.handleSubmit }>Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}