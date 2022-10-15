const User = require("../models/User");

exports.getAllCandidatesService = async () => {
  const candidate = await User.find({ role: { $in: "candidate" } });
  return candidate;
};

exports.getAllHiringManagersService = async () => {
  const candidate = await User.find({ role: { $in: "hiring-manager" } });
  return candidate;
};
