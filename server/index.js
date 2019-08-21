require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const { register, login, logout } = require("./controllers/authController");
const {
  getToDoTasks,
  updateToDoTask,
  addToDoTask,
  deleteToDoTask
} = require("./controllers/toDoController");

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/../build`));

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("Database Connected");
});

// endpoints
app.post("/auth/register", register);
app.post("/auth/login", login);
app.get("/auth/logout", logout);
app.get("/api/user", function(req, res) {
  if (req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(400).json("User logged in");
  }
});

app.get("/api/toDo", getToDoTasks);
app.post("/api/toDo", addToDoTask);
app.put("/api/toDo/:id", updateToDoTask);
app.delete("/api/toDo/:id", deleteToDoTask);
// app.post("/api/Notes", checkForUser, addNotes);
// app.put("/api/posts/:country", checkForUser, editNotes);
// app.delete("/api/posts/:id", checkForUser, deleteNotes);

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Listening on ${process.env.SERVER_PORT}`)
);
