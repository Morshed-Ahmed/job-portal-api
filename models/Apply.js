const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");
const Jobs = require("./Jobs");
const { ObjectId } = mongoose.Schema.Types;

const applySchema = new Schema(
  {
    // userId: {
    //   type: ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    postId: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Email address is required"],
    },
    userEmail: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "UserEmail address is required"],
    },
    contactNumber: {
      type: String,
      validate: [
        validator.isMobilePhone,
        "Please provide a valid contact number",
      ],
    },
    description: {
      type: String,
      required: true,
    },
    uploadResume: {
      type: String,
      required: true,
      validate: [validator.isURL, "Please provide a valid resume url"],
    },
    // jobPost: {
    //   type: ObjectId,
    //   required: true,
    //   ref: "Jobs",
    // },
    // status: {
    //   type: String,
    //   enum: ["active", "inactive"],
    //   default: "active",
    // },
  },
  {
    timestamps: true,
  }
);

const Apply = mongoose.model("Apply", applySchema);

module.exports = Apply;
