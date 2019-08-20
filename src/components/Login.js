import React from "react";
import axios from "axios";
import { updateName, updateUsername } from "../redux/reducers/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

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
        this.props.updateBalance(response.data.balance);
        this.props.updateName(response.data.name);
        this.props.updateUsername(response.data.username);
        this.setState({ redirect: true });
      });
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="login">
        <input placeholder="Username" onChange={this.handleUsername} />
        <input
          onChange={this.handlePassword}
          placeholder="Password"
          type="password"
        />
        <button onClick={this.handleClick}>Login</button>
      </div>
    );
  }
}

export default connect(
  undefined,
  { updateName, updateUsername }
)(Login);
