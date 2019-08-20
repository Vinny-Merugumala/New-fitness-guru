import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Account(props) {
  if (props.name === "") {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Welcome {props.name}</h1>
      <h2>{props.username}</h2>
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    username: reduxState.username,
    name: reduxState.name
  };
}

export default connect(mapStateToProps)(Account);
