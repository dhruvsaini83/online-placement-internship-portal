const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  skills: String,
  salary: Number,
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

});

module.exports = mongoose.model("Job", jobSchema);

