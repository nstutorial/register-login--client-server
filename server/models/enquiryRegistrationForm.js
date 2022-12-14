const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "nameis require"],
  },
  fname: {
    type: String,
    required: [true, "email is required"],
  },
  age: {
    type: String,
    required: [true, "password is required"],
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  cnumber: {
    type: String,
    required: [true, "contact number is required"],
  },
});

const enquiryModel = mongoose.model("enquiry_registration_form", enquirySchema);
module.exports = enquiryModel;
