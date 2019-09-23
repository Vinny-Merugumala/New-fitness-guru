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
              className="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => {
                this.setState({ view: "toDoTasks" });
              }}
            >
              Notes
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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
