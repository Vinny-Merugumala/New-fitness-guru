const toDoTasks = [
  {
    date: "August 18, 2019",
    time: "3:00 pm",
    description: "Have to finish cardio",
    finished: false,
    id: 1
  }
];
let id = 2;
const getToDoTasks = (req, res) => {
  const db = req.app.get("db");

  res.json(toDoTasks);
};

const addToDoTask = (req, res) => {
  const { date, time, description } = req.body;
  if (!date || !time || !description) {
    return res.status(417).json("Date, time, and description are required");
  }
  toDoTasks.push({ date, time, description, id });
  id++;
  res.json(toDoTasks);
};

const updateToDoTask = (req, res) => {
  const { id } = req.params;
  const { date, time, description } = req.body;
  const index = toDoTasks.findIndex(toDo => toDo.id === +id);

  edittedObject = {
    date,
    time,
    description,
    id: +id
  };
  toDoTasks[index] = edittedObject;
  res.json(toDoTasks);
};

const deleteToDoTask = (req, res) => {
  const { id } = req.params;
  index = toDoTasks.findIndex(toDo => toDo.id === +id);
  toDoTasks.splice(index, 1);
  res.json(toDoTasks);
  console.log(id);
};

module.exports = {
  getToDoTasks,
  addToDoTask,
  updateToDoTask,
  deleteToDoTask
};
