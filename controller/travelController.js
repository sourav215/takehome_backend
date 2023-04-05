// External imports
const validator = require("validator");

// Internal imports
const Travel = require("../models/travelModel");

// To add new entries
const addNewDataInDB = async (req, res) => {
  try {
    const { name, email, destination, no_of_travellers, budget_per_person } =
      req.body;

    // If any of the fields are empty
    if (
      !name ||
      !email ||
      !destination ||
      !no_of_travellers ||
      !budget_per_person
    ) {
      return res.status(500).send({ message: "Incomplete Data" });
    }

    // If email address is not valid
    if (!validator.isEmail(email)) {
      return res.status(500).send({ message: "Invalid email address" });
    }

    // Check currency
    if (
      !validator.isCurrency(budget_per_person, {
        symbol: "$",
        require_symbol: true,
      })
    ) {
      return res
        .status(500)
        .send({ message: "The currency should be in dollars" });
    }

    // If all the informations are correct insert data into Database
    await Travel.create({
      name,
      email,
      destination,
      no_of_travellers,
      budget_per_person,
    });

    // sending success message
    res.send({
      message: "Data added Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "There was an server side error" });
  }
};

// To get entries from Database
const getAllDataFromDB = async (req, res) => {
  try {
    let data = await Travel.find();
    // sending response
    res.send({
      message: "Success",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "There was an server side error" });
  }
};

module.exports = {
  addNewDataInDB,
  getAllDataFromDB,
};
