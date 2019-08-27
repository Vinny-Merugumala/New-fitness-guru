import React, { Component } from "react";
import axios from "axios";
import "../app.css";

export default class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "",
      description: "",
      finished: false,
      error: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(e) {
    console.log(e.target.checked);
    this.setState({ [e.target.name]: e.target.value });
  }
  handleToggle(e) {
    this.setState({ [e.target.name]: e.target.checked });
  }

  render() {
    console.log(this.state.finished);
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (
            !this.state.description // maybe try this.state.example === undefined ||
          ) {
            this.setState({
              error: "Please add a description" //maybe try res.sendStatus here
            });
          } else if (this.state.finished === false) {
            axios
              .post("/api/toDo", {
                date: this.state.date,
                time: this.state.time,
                description: this.state.description
              })
              .then(response => {
                this.props.changeView("toDoTasks");
              })
              .catch(error => {
                console.log(error);
                this.setState({
                  error: "Fatal Error"
                });
              });
          } else {
            axios
              .post("/api/finished", {
                date: this.state.date,
                time: this.state.time,
                description: this.state.description
              })
              .then(response => {
                this.props.changeView("finishedTasks");
              })
              .catch(error => {
                console.log(error);
                this.setState({
                  error: "Fatal Error"
                });
              });
          }
        }}
      >
        <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
          <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div class="mb-4"></div>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Time"
              name="time"
              value={this.state.time}
              onChange={this.handleChange}
            />
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />

            <button
              class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
              type="submit"
            >
              submit
            </button>
            <button
              class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
              type="reset"
            >
              Cancel
            </button>
          </div>
        </div>

        {this.state.error ? <p>{this.state.error}</p> : null}
      </form>
    );
  }
}
