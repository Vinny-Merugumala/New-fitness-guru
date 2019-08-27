import React from "react";
import axios from "axios";
import { updateName, updateUsername } from "../redux/reducers/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    redirect: false
  };
  componentDidMount() {
    axios.get("/api/user").then(response => {
      if (!response.data.error) {
        this.props.updateName(response.data.name);
        this.props.updateUsername(response.data.username);
        this.setState({ redirect: true });
      }
    });
  }

  loginUser = () => {};

  handleUsername = e => {
    this.setState({ username: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleClick = e => {
    axios
      .post("/auth/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        this.props.updateName(response.data.name);
        this.props.updateUsername(response.data.username);
        this.setState({ redirect: true });
      });
  };

  render() {
    console.log(this.state);
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-page">
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 class="mb-8 text-3xl text-center">Log In</h1>
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Username"
                onChange={this.handleUsername}
              />
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                onChange={this.handlePassword}
                placeholder="Password"
                type="password"
              />
              <button
                class="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-green-dark focus:outline-none my-1"
                onClick={this.handleClick}
              >
                Login
              </button>
              <div class="text-grey-dark mt-6">
                Don't have an account?
                <div>
                  <Link to="/register">
                    <button class="no-underline border-b border-blue text-blue">
                      Register
                    </button>
                  </Link>
                </div>
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
)(Login);
