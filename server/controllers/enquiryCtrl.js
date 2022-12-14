const enquiryModel = require("../models/enquiryRegistrationForm");

const enquiryFormController = async (req, res) => {
  try {
    const newEnquiry = new enquiryModel(req.body);
    await newEnquiry.save();
    res
      .status(201)
      .send({ message: "Enquiry Registration Successfull", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Enquiry Register Controller ${error.message}`,
    });
  }
};
module.exports = enquiryFormController;
