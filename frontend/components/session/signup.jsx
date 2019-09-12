import React from "react";
import { Link } from 'react-router-dom'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      age: "",
      gender: "select",
      first_name: "",
      last_name: "",
      middle_initial: "",
      active: {
        email: false,
        password: false,
        age: false,
        gender: false,
        first_name: false,
        last_name: false,
        middle_initial: false,
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearSessionErrors();
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
    e.preventDefault();
    this.props.createUser(this.state).then(() => this.props.history.push("/"))
  }

  validEmail() {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email);
  }

  validFirstName() {
    return this.state.first_name.length > 0;
  }

  validLastName() {
    return this.state.last_name.length > 0;
  }

  nameErrorMessage() {
    let errorMessage = [];
    if(this.firstNameClass() !== "input") {
      errorMessage.push("Invalid First Name")
    }
    if (this.lastNameClass() !== "input") {
      errorMessage.push("Invalid Last Name")
    }
    return errorMessage.join(", ")
  }

  validGender() {
    return this.state.gender !== "select";
  }

  validAge() {
    return this.state.age.match(/^-{0,1}\d+$/);
  }

  ageGenderErrorMessage() {
    let error = [];
    if (this.genderClass() !== "input") {
      error.push("Please Select an Option");
    }
    if (this.ageClass() !== "input") {
      error.push("Please Enter a Valid Age");
    }
    return error.join(', ')
  }

  validPassword() {
    return this.state.password.length > 5;
  }

  allValid() {
    return this.validAge() && this.validEmail() && this.validFirstName() && this.validLastName()
      && this.validGender() && this.validPassword();
  }

  // Methods to determine what class to give elements
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

  firstNameClass() {
    if (!this.state.active.first_name || this.validFirstName()) {
      return "input"
    } else {
      return "input invalid-input"
    }
  }

  lastNameClass() {
    if (!this.state.active.last_name || this.validLastName()) {
      return "input"
    } else {
      return "input invalid-input"
    }
  }

  ageClass() {
    if (!this.state.active.age || this.validAge()) {
      return "input"
    } else {
      return "input invalid-input"
    }
  }

  genderClass() {
    if (!this.state.active.gender || this.validGender()) {
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
  render() {
    return (
      <div>
        <div className="bar">
          <div className="left">
            <div className="item">
              <p className="logo">foodlu</p>
            </div>
          </div>
          <div className="right">
            <div className="item" onClick={e => {this.props.toggleLoginPage(); this.props.toggleModal()}}>
              <Link to={"/welcome"}>LOG IN</Link>
            </div>
          </div>
        </div>
        <div className="background">
          <div className={"form-container"}>
            <h1>Create Your Account</h1>
            <form className={"sign-up"} onSubmit={e => e.preventDefault()}>
              <label>EMAIL</label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput("email")}
                className={this.emailClass()}
                onClick={this.setActive("email")}
              />
              <div className="errors">
                {this.emailClass() === "input" ? "" : "Please enter a valid email"}
              </div>

              <label>PASSWORD</label>
              <input
                type="text" value={this.state.password}
                onChange={this.handleInput("password")}
                className={this.passwordClass()}
                onClick={this.setActive("password")}
              />
              <div className="errors">
                {this.passwordClass() === "input" ? "" : "Password must be at least 6 characters long"}
              </div>

              <div className={"name-input"}>
                <div className="input-container first">
                  <label>FIRST NAME</label>
                  <input
                    type="text"
                    value={this.state.first_name}
                    onChange={this.handleInput("first_name")}
                    className={this.firstNameClass()}
                    onClick={this.setActive("first_name")}
                  />
                </div>
                <div className="input-container middle">
                  <label>MIDDLE IN.</label>
                  <input
                    type="text"
                    value={this.state.middle_initial}
                    onChange={this.handleInput("middle_initial")}
                    onClick={this.setActive("middle_initial")}
                  />
                </div>
                <div className="input-container last">
                  <label>LAST NAME</label>
                  <input
                    type="text"
                    value={this.state.last_name}
                    onChange={this.handleInput("last_name")}
                    className={this.lastNameClass()}
                    onClick={this.setActive("last_name")}
                  />
                </div>
              </div>
              <div className="errors">
                {this.nameErrorMessage()}
              </div>

              <div className="age-gender">
                <div className="age">
                  <label>AGE</label>
                  <input
                    type="number"
                    value={this.state.age}
                    onChange={this.handleInput("age")}
                    className={this.ageClass()}
                    onClick={this.setActive("age")}
                  />
                </div>
                <div className="gender">
                  <label>GENDER</label>
                  <select
                    defaultValue={"select"}
                    onChange={this.handleInput("gender")}
                    className={this.genderClass()}
                    onClick={this.setActive("gender")}
                  >
                    <option value="select" disabled={true}>Select</option>
                    <option value={null} name="na">Prefer Not to Say</option>
                    <option value="Male" name="Male">Male</option>
                    <option value="Female" name="Female">Female</option>
                  </select>
                </div>
              </div>
              <div className="errors">
                {this.ageGenderErrorMessage()}
              </div>
              <div className="errors">
                {this.props.errors.join(", ")}
              </div>
            </form>
            <p>By clicking "SUBMIT" you agree to not abuse my wallet by streaming videos.</p>
            <button
              onClick={this.allValid() ? this.handleSubmit : e => e.preventDefault()}
              className={this.allValid() ? "button" : "disabled-button"}
            >{this.allValid() ? "SUBMIT" : "Invalid Input(s)"}</button>
          </div>

        </div>
      </div>
    )
  }
}