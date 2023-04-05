const mongoose = require("mongoose");


// db connection function
const connectDatabase = async () => {
  await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
  console.log("Database connected");
};
module.exports = connectDatabase;
