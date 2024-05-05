const router = require("express").Router();
const userController = require("../controller/contactController");

// Create contact creation route
router.post("/create", userController.addContact);

module.exports = router;
