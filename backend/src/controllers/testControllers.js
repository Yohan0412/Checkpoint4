const models = require("../models");

const browse = (req, res) => {
  models.planete
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.planete
    .findById(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const planete = req.body;

  models.planete
    .insert(planete)
    .then(([result]) => {
      res.location(`/planete/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const suprm = (req, res) => {
  models.planete
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: "Couldn't delete offer!" });
      } else {
        res.status(204).json({ success: "Offer was successfuly deleted" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  add,
  suprm,
};
