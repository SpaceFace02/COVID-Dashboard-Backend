// Create mongoose schema for CovidModel
const mongoose = require("mongoose");

const CovidSchema = new mongoose.Schema(
  {
    Global: {
      type: Object,
    },
    Countries: {
      type: Array,
    },
    message: {
      type: String,
    },
  },
  {
    strict: false,
  }
);

const Covid = mongoose.model("Covid", CovidSchema, "ingest");

module.exports = Covid;
