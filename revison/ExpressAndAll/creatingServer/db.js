const mongoose = require("mongoose");

const dbconn = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/internshipapi", {
      useNewUrlParser: true,
    });
    console.log("db connected");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

module.exports = dbconn;
