const {
  createJobService,
  getJobService,
  findJobByIdService,
  updateJobService,
} = require("../services/job.service");

exports.createJob = async (req, res) => {
  try {
    const job = await createJobService(req.body);
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

exports.getJobs = async (req, res) => {
  try {
    const { email } = req.params;
    // console.log(email);
    const job = await getJobService(email);
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

exports.updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await updateJobService(id, req.body);
    res.status(200).json({
      status: "Success",
      massage: "Job post update successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      massage: error.message,
    });
  }
};
