const getToDoTasks = (req, res) => {
  const db = req.app.get("db");
  console.log("hello", req);
  db.get_usernotes([req._parsedOriginalUrl.query]).then(toDo => {
    console.log(toDo);
    res.status(200).json(toDo);
  });
};

const addToDoTask = (req, res) => {
  const { date, time, description, username } = req.body;
  const db = req.app.get("db");
  db.add_note([date, time, description, username]).then(() => {
    res.sendStatus(200);
  });
};

const updateToDoTask = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { date, time, description } = req.body;
  const db = req.app.get("db");
  db.update_note([date, time, description, id])
    .then(() => {
      console.log("hit");
      console.log(req.body);

      res.sendStatus(200);
    })
    .catch(e => {
      console.log(e);
    });
};

const deleteToDoTask = (req, res) => {
  const { id } = req.params;
  const db = req.app.get("db");
  db.delete_note(id).then(() => res.sendStatus(200));
};

module.exports = {
  getToDoTasks,
  addToDoTask,
  updateToDoTask,
  deleteToDoTask
};
