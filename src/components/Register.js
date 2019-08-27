import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { updateName, updateUsername } from "../redux/reducers/auth";
import { connect } from "react-redux";
import "../styles/index.css";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      verifyPassword: "",
      username: "",
      unsuccessfulLogin: false,
      usernameWasTaken: false,
      redirect: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    if (this.state.password !== this.state.verifyPassword) {
      this.setState({ unsuccessfulLogin: true });
    } else {
      let body = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        username: this.state.username
      };
      axios
        .post("/auth/register", body)
        .then(response => {
          console.log(response);
          this.props.updateName(response.data.name);
          this.props.updateUsername(response.data.username);
          this.setState({ redirect: true });
        })
        .catch(error => {
          if (
            error.request.status === 406 &&
            error.response.data.error === "USERNAME_TAKEN"
          ) {
            this.setState({ usernameWasTaken: true });
          }
        });
    }
  };

  render() {
    console.log(this.state);

    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="register-page">
        <div class="bg-grey-lighter min-h-screen flex flex-col">
          <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 class="mb-8 text-3xl text-center">Sign up</h1>
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="First Name"
                onChange={this.handleChange}
                name="firstName"
              />
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Last Name"
                onChange={this.handleChange}
                name="lastName"
              />
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Username"
                onChange={this.handleChange}
                name="username"
              />
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Password"
                type="password"
                onChange={this.handleChange}
                name="password"
              />
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Verify Password"
                type="password"
                onChange={this.handleChange}
                name="verifyPassword"
              />
              <button
                type="submit"
                class="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-green-dark focus:outline-none my-1"
                onClick={this.handleClick}
              >
                Register
              </button>
              <br />
              {this.state.unsuccessfulLogin === true ? (
                <h1>
                  Your passwords did not match. Please enter two matching
                  passwords
                </h1>
              ) : null}
              {this.state.usernameWasTaken === true ? (
                <h1>That username is taken. Please try picking another</h1>
              ) : null}
              <div class="text-grey-dark mt-6">
                Already have an account?
                <Link to="/login">
                  <button class="no-underline border-b border-blue text-blue">
                    Log in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  undefined,
  { updateName, updateUsername }
)(Register);
