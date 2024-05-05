const contactModel = require("../model/contactModel");

const addContact = async (req, res) => {
  // Check incoming data
  console.log(req.body);

  // Destructure the data
  const { name, phone, email } = req.body;

  // Validate the data(if empty, stop the process)
  if (!name || !phone || !email) {
    return res.json({
      success: false,
      message: "Please enter all fields!",
    });
  }

  // Error handling
  try {
    // Check for existing phone number
    const existingContact = await contactModel.findOne({ phone: phone });
    // If phone number found, sent response
    if (existingContact) {
      return res.json({
        status: false,
        message: "Contact Already Exists",
      });
    }

    // If phone number is new
    const newContact = new contactModel({
      name: name,
      phone: phone,
      email: email,
    });

    // Save to database
    await newContact.save();

    // Send response
    res.json({
      success: true,
      message: `${name} : ${phone} `,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  addContact,
};
