const {
  getAllCandidatesService,
  getAllHiringManagersService,
} = require("../services/admin.service");

exports.getAllCandidates = async (req, res) => {
  try {
    const candidates = await getAllCandidatesService();

    res.status(200).json({
      status: "Success",
      data: candidates,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

exports.getAllHiringManagers = async (req, res) => {
  try {
    const candidates = await getAllHiringManagersService();

    res.status(200).json({
      status: "Success",
      data: candidates,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};
