const appointmentController = require("../controller/appointmentController");
const router = require("express").Router();

// Create appointment creation route
router.post("/", appointmentController.bookAppointment);

module.exports = router;
