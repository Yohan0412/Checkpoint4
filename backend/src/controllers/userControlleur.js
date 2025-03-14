const { verify } = require("argon2");
require("argon2");
const models = require("../models");
const { generateToken } = require("../jwt/jwt");

const add = (req, res) => {
  const user = req.body;

  models.user
    .insert(user)
    .then(() => {
      res.status(201).json({ success: "User saved" });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const brows = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(404);
    });
};

const log = async (req, res) => {
  const { name, password } = req.body;

  models.user
    .findByName(name)
    .then(([[user]]) => {
      if (!user) {
        return res.status(403).json({ error: "User not found" });
      }

      verify(user.password, password)
        .then((match) => {
          if (match) {
            const token = generateToken({
              id: user.id,
              name: user.name,
            });
            return res
              .cookie("user_auth", token, { httpOnly: true, secure: false })
              .status(200)
              .json({ token, sucess: "User logged" });
          }
          return res.status(403).json({ error: "password incorrect" });
        })
        .catch((error) => {
          console.error(error);
        });
      return false;
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.user.delete(req.params.id).then(([result]) => {
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Couldn't delete user!" });
    } else {
      res.status(204).json({ success: "User was successfuly deleted" });
    }
  });
};

module.exports = {
  add,
  brows,
  log,
  destroy,
};
