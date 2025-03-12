const express = require("express");

const router = express.Router();

const { verify } = require("jsonwebtoken");
const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const testControllers = require("./controllers/testControllers");

router.get("/planete", testControllers.browse);
router.get("/planete/:id", testControllers.read);

const vehiculeControllers = require("./controllers/vehiculeContollers");

router.get("/vehicule", vehiculeControllers.browse);
router.get("/transport/:id", vehiculeControllers.read);

const userController = require("./controllers/userControlleur");
const hashPassword = require("./middlewares/hashPassword");

router.post("/newuser", hashPassword, userController.add);
router.get("/user", userController.brows);
router.post("/login", userController.log);

router.use(verify); // ROUTE PRIVEE

router.delete("/delete-vehicule/:id", verify, vehiculeControllers.destroy);
router.post("/ajout-planets", verify, testControllers.add);
router.delete("/suprm-planete/:id", verify, testControllers.suprm);
router.delete("/user/:id", verify, userController.destroy);
router.post("/ajoutvehicule", verify, vehiculeControllers.add);
router.delete("/delete-user/:id", userController.destroy);

module.exports = router;
