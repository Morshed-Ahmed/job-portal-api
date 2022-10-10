const {
  getJobService,
  findJobByIdService,
} = require("../services/apply.service");

exports.getJobs = async (req, res) => {
  try {
    const job = await getJobService(req.body);
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
