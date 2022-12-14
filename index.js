const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;

const jobsRouter = require("./routers/jobs.router");
const applyRouter = require("./routers/apply.route");
const userRouter = require("./routers/user.route");
const adminRouter = require("./routers/admin.route");

app.use(cors());
app.use(express.json());

//DATABASE Connect
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Database connect successfully");
  })
  .catch((error) => {
    console.log(" Database is not connect");
  });

app.use("/", jobsRouter);
app.use("/jobs", applyRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("Job Portal Api Ready...!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
