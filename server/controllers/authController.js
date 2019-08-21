const bcrypt = require("bcryptjs");

module.exports = {
  register: async function(req, res) {
    const { firstName, lastName, password, username } = req.body;
    console.log(req.body);
    const db = req.app.get("db");
    const response = await db.check_user([username]);
    console.log(+response[0].count);
    if (+response[0].count > 0) {
      res.status(406).json({
        error: "USERNAME_TAKEN"
      });
    } else {
      const hash = await bcrypt.hash(password, 10);
      await db.add_user(firstName, lastName, hash, username);
      req.session.user = {
        name: firstName + " " + lastName,
        username
      };
      res.status(200).json(req.session.user);
    }
  },

  login: async function(req, res) {
    const db = req.app.get("db");

    const { username, password } = req.body;
    const info = await db.getUserInfo(username);
    console.log(info[0].password);
    const isCorrect = await bcrypt.compare(password, info[0].password);

    if (isCorrect === true) {
      req.session.user = {
        username,
        name: info[0].first_name + " " + info[0].last_name
      };
      res.status(200).json(req.session.user);
    } else {
      res.status(401).json({
        error: "INCORRECT_USERNAME_OR_PASSWORD"
      });
    }
  },
  logout: async function(req, res) {
    req.session.destroy();
    return res.sendStatus(200);
  }
};
