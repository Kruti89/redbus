const mongoose = require("mongoose");

// simple model (direct collection access)
const Bus = mongoose.model("Bus", new mongoose.Schema({}, { strict: false }));

// 🔥 GET all buses
exports.getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
