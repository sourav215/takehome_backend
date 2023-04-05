const mongoose = require("mongoose");

// Schema
const TravelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      enum: ["India", "Africa", "Europe"],
      required: true,
    },
    no_of_travellers: {
      type: Number,
      required: true,
    },
    budget_per_person: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

// Model
const Travel = mongoose.model("Travel", TravelSchema);

module.exports = Travel;
