const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const dburl = "mongodb://localhost:27017/sdpproject19"
mongoose
  .connect(dburl)
  .then(() => {
    console.log("Connected to DB Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(cors());
app.use(express.json());
// app.use(fileUpload());

const userRouter = require("./routes/userroutes");
const productRouter = require("./routes/productroutes");
// const adminRouter = require("./routes/adminroutes");

app.use("", userRouter);
app.use("", productRouter);
// app.use("", adminRouter);

const port = 2014;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});