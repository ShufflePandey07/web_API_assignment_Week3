// Importing libraries
const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./database/database");

// Initialize app
const app = express();

// Express Json Config
app.use(express.json());

// dotenv Configuration
dotenv.config();

// Connecting to database
connectDatabase();

// Defining the port
const PORT = process.env.PORT;

// Test api
app.get("/test", (req, res) => {
  res.send("Test API is Working!....");
});

// Configuring route of contact
app.use("/api/contact", require("./routes/contactRoutes"));

// Configuring route of reservations
app.use("/api/reservations", require("./routes/reservationRoutes"));

// Configuring route of appointment
app.use("/api/book-appointment", require("./routes/appointmentRoutes"));

// Starting the server (always at the last)
app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
