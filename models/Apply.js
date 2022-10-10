const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const jobSchema = new Schema(
  {
    name: {
      type: ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = Jobs;
