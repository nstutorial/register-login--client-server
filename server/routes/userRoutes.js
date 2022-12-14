const express = require("express");
const {
  loginController,
  registerController,
  enquiryFormController
} = require("../controllers/userCtrl");

// router object
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//ENQUIRY REGISTRATION FORM
router.post("/enquiry-form", enquiryFormController);

module.exports = router;
