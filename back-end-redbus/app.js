require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const crypto = require("crypto");
const Razorpay = require("razorpay");
const { v4: uuidv4 } = require("uuid");

const razorpayClient = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "rzp_test_yourKeyId",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "rzp_test_yourKeySecret",
});

// ===== MIDDLEWARE =====
app.use(express.json());
app.use(cors());

// ===== ROUTES IMPORT =====
const busRoutes = require("./routes/bus");
const bookingRoutes = require("./routes/booking");
const customerRoutes = require("./routes/customer");
const routeRoutes = require("./routes/route");
const bookingHireRoutes = require("./routes/bookinghire");
const busServiceRoutes = require("./routes/busservice");

// ===== RAZORPAY PAYMENT =====
app.post("/v1/api/razorpay/order", async (req, res) => {
  try {
    const { amount, currency } = req.body;
    const options = {
      amount: Number(amount) * 100,
      currency: currency || "INR",
      receipt: `receipt_${uuidv4()}`,
      payment_capture: 1,
    };

    const order = await razorpayClient.orders.create(options);
    res.status(200).json(order);
  } catch (err) {
    console.error("Razorpay order creation failed:", err);
    res.status(500).json({ error: "Unable to create Razorpay order" });
  }
});

app.post("/v1/api/razorpay/verify", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "rzp_test_yourKeySecret")
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    return res.status(200).json({ verified: true });
  }

  return res.status(400).json({ verified: false });
});

// ===== API ROUTES =====
app.use("/api/buses", busRoutes);
app.use("/", bookingRoutes);
app.use("/", customerRoutes);
app.use("/", routeRoutes);
app.use("/", bookingHireRoutes);
app.use("/", busServiceRoutes);

// ===== DATABASE CONNECTION =====
const connectDB = async () => {
try {
await mongoose.connect(
"mongodb+srv://redbus_db_user_1:umJkhSujb8dZoc2a@redbuscnstructweek.bujg6.mongodb.net/redbus?retryWrites=true&w=majority"
);
console.log("✅ MongoDB Connected");
} catch (error) {
console.log("❌ DB Error:", error);
process.exit(1);
}
};

// ===== SERVER START =====
const PORT = process.env.PORT || 5000;

const startServer = async () => {
await connectDB();

app.listen(PORT, () => {
console.log(`🚀 Server running on port ${PORT}`);
});
};

startServer();
