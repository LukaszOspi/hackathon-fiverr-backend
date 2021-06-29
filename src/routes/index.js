const express = require("express");
const router = express.Router();

const eventRoutes = require("./eventRoutes");

router.use("/event", eventRoutes);

module.exports = router;
