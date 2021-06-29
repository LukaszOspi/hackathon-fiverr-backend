const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

router.post("/", eventController.create);

router.get("/:id", eventController.index);

router.get("/", eventController.show);

router.put("/:id", eventController.update);

router.delete("/:id", eventController.destroy);

module.exports = router;
