import React from "react";
import SignInContainer from './signin_container'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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

  render() {
    return (
      <div>
        <div className="bar">
          <div className="left">
            <p>Godzillu</p>
          </div>
          <div className="right">
            <SignInContainer/>
          </div>
        </div>
        <form className="sign-up">
          <h1>Create an Account</h1>
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
    )
  }
}