const Jobs = require("../models/Jobs");
const {
  getJobService,
  findJobByIdService,
  jobApplyService,
} = require("../services/apply.service");
const { comDate } = require("../utils/condition");

exports.getJobs = async (req, res) => {
  try {
    const job = await getJobService(req.query);
    res.status(200).json({
      status: "Success",
      data: job,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      massage: error.message,
    });
  }
};

exports.findJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await findJobByIdService(id);
    res.status(200).json({
      status: "Success",
      data: job,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      massage: error.message,
    });
  }
};

exports.jobApply = async (req, res) => {
  try {
    const { id } = req.params;

    const jobs = await Jobs.findOne({ _id: id });
    const last = jobs.applyLastDate;
    const date = new Date();
    // console.log(last);
    // console.log(date);
    // if (!date < last) {
    //   res.status(401).json({
    //     status: "Fail",
    //     message: "Apply date expire",
    //   });
    // }

    comDate(last);
    // console.log(req.body.email);

    const apply = await jobApplyService(req.body);

    res.status(200).json({
      status: "Success",
      message: "Create an job post successful",
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      massage: error.message,
    });
  }
};
