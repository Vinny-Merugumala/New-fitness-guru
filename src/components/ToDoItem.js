import React, { Component } from "react";
import axios from "axios";

export default class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "",
      description: ""
    };
  }
  componentDidMount() {
    this.setState({
      date: this.props.date,
      time: this.props.time,
      description: this.props.description
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    const { date, time, description } = this.state;
    axios
      .put("/api/toDo/" + this.props.id, { date, time, description })
      .then(response => {
        this.props.updateToDoTasks(response.data);
      })
      .catch(err => {
        return console.log(err);
      });
  };
  handleClick2 = () => {
    const { date, time, description } = this.state;
    axios
      .delete("/api/toDo/" + this.props.id, { date, time, description })
      .then(response => {
        this.props.deleteToDoTasks(response.data);
      });
  };

  render() {
    return (
      <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div class="mb-4">
            <h1 class="text-grey-darkest">Gym Calendar</h1>
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
              placeholder="Add Workout Description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <button
              class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
              onClick={this.handleClick}
            >
              Update
            </button>
            <button
              class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
              onClick={this.handleClick2}
            >
              Delete
            </button>
            <div class="flex mb-4 items-center">
              <h3 class="w-full text-grey-darkest">{this.props.date}</h3>

              <h3 class="w-full text-grey-darkest">{this.props.time}</h3>

              <h3 class="w-full text-grey-darkest">{this.props.description}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
