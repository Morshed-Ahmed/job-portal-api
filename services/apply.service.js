const Jobs = require("../models/Jobs");

exports.getJobService = async () => {
  const job = await Jobs.find({});
  return job;
};

exports.findJobByIdService = async (id) => {
  const job = await Jobs.find({ _id: id });
  return job;
};
