const Apply = require("../models/Apply");
const Jobs = require("../models/Jobs");

exports.getJobService = async (filter) => {
  const job = await Jobs.find(filter);
  return job;
};

exports.findJobByIdService = async (id) => {
  const job = await Jobs.find({ _id: id });
  return job;
};

exports.jobApplyService = async (applyInfo) => {
  const apply = await Apply.create(applyInfo);
  return apply;
};
