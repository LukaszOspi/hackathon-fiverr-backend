const express = require("express");
const router = express.Router();

const eventRoutes = require("./eventRoutes");
const userRoutes = require("./userRoutes");

router.use("/event", eventRoutes);

router.use("/user", userRoutes);

module.exports = router;
