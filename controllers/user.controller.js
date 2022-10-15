const { signUpService, logInService } = require("../services/signUp.service");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/token");
const User = require("../models/User");

exports.signUp = async (req, res) => {
  try {
    const user = await signUpService(req.body);
    res.status(200).json({
      status: "Success",
      message: "Sign up successful",
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      massage: error.message,
    });
  }
};

exports.logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        error: "Please provide your credentials",
      });
    }

    const user = await logInService(email);

    if (!user) {
      return res.status(401).json({
        status: "fail",
        error: "No user found. Please create an account",
      });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        status: "fail",
        error: "Password is not correct",
      });
    }

    if (user.status != "active") {
      return res.status(401).json({
        status: "fail",
        error: "Your account is not active yet.",
      });
    }

    const token = generateToken(user);

    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      status: "Success",
      message: "Successfully logged in",
      data: {
        user: others,
        token,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      massage: error.message,
    });
  }
};

exports.getMe = async (req, res) => {
  try {
    const user = await logInService(req.user?.email);
    res.status(200).json({
      status: "Success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      massage: error.message,
    });
  }
};

exports.makeAdmin = async (req, res) => {
  try {
    // const user = await logInService(req.user?.email);
    const { email } = req.body;
    const user = await User.updateOne(
      { email: email },
      { $set: { role: "admin" } }
    );
    // console.log(email);
    res.status(200).json({
      status: "Success",
      message: "Successfully make your admin",
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      massage: error.message,
    });
  }
};

exports.makeHiringManager = async (req, res) => {
  try {
    // const user = await logInService(req.user?.email);
    const { email } = req.body;
    const user = await User.updateOne(
      { email: email },
      { $set: { role: "hiring-manager" } }
    );
    // console.log(email);
    res.status(200).json({
      status: "Success",
      message: "Successfully make your hiring-manager",
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      massage: error.message,
    });
  }
};
