const express = require("express");
const router = express.Router();
const busController = require("../controllers/bus");

// 🔥 GET all buses
router.get("/", busController.getAllBuses);

module.exports = router;