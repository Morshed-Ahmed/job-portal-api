const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

const jobSchema = new Schema(
  {
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Email address is required"],
    },
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
    jobType: {
      type: String,
      required: true,
      enum: {
        values: ["fulltime", "part-time", "remote-job", "freelancer"],
        message:
          "unit value can't be {VALUE}, must be fulltime/part-time/remote-job/freelancer",
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
    jobCategory: {
      type: String,
      required: true,
      enum: {
        values: [
          "software",
          "finance",
          "recruiting",
          "management",
          "advertising",
        ],
        message:
          "unit value can't be {VALUE}, must be software/finance/recruiting/management/advertising",
      },
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
      enum: ["on-site", "remote", "hybrid"],
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
