const Jobs = require("../models/Jobs");

exports.createJobService = async (jobInfo) => {
  const job = await Jobs.create(jobInfo);
  return job;
};

exports.getJobService = async (email) => {
  const job = await Jobs.find({ email });
  return job;
};

exports.findJobByIdService = async (id) => {
  const job = await Jobs.find({ _id: id });
  return job;
};

exports.updateJobService = async (id, data) => {
  const job = await Jobs.updateOne({ _id: id }, { $set: data });
  return job;
};
