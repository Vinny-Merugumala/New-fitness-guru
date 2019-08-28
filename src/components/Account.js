import React, { Component } from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import ToDoList from "./ToDoList";
import NewTask from "./NewItem";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: ""
    };
    this.changeView = this.changeView.bind(this);
  }
  changeView(newView) {
    this.setState({ view: newView });
  }
  render() {
    // if (props.name === "") {
    //   return <Redirect to="/" />;
    // }

    return (
      <div className="account-page">
        <div className="main-container">
          <nav className="navbar-todo">
            <button
              id="todo"
              onClick={() => {
                this.setState({ view: "toDoTasks" });
              }}
            >
              Notes
            </button>
            <button
              id="addnew"
              onClick={() => {
                this.setState({ view: "newTasks" });
              }}
            >
              Add New Note
            </button>
          </nav>
          {this.state.view === "toDoTasks" ? <ToDoList /> : null}
          {this.state.view === "newTasks" && (
            <NewTask changeView={this.changeView} />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    username: reduxState.username,
    name: reduxState.name
  };
}

export default connect(mapStateToProps)(Account);
