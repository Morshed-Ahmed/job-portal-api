const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

const jobSchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: [true, "Please provide a name for this product."],
      trim: true,
      lowercase: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLenght: [100, "Name is too large"],
    },
    description: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
      enum: {
        values: ["hours", "week", "month", "year", "fulltime"],
        message:
          "unit value can't be {VALUE}, must be hours/week/month/year/fulltime",
      },
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
      validate: {
        validator: (value) => {
          let date = new Date();
          if (date > this.applyLastDate) {
            value = "inactive";
          }
        },
      },
    },
    jobType: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
      lowercase: true,
    },
    skill: {
      type: String,
    },
    workplace: {
      type: String,
      required: true,
      enum: ["intern", "in-office"],
    },
    applyLastDate: {
      type: Date,
      required: true,
    },
    changeApplyLastDate: Date,
  },
  {
    timestamps: true,
  }
);

jobSchema.pre("save", function (next) {
  // const date = new Date();
  // date.setDate(date.getDate() + this.applyLastDate);
  // this.changeApplyLastDate = date;

  const date = new Date();
  if (date > this.applyLastDate) {
    this.status = "inactive";
  }

  next();
});

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = Jobs;
