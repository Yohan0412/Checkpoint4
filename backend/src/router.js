const express = require("express");

const router = express.Router();

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

module.exports = router;
