const fs = require("fs");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Application is running",
  });
});

app.get("/raihan", (req, res) => {
  res.status(200).json({ message: "you have hit raihan endpoint!!!" });
});

// middleware / handler untuk url yang tidak dapat diakses karena memang tidak ada di aplikasi
// membuat middleware sendiri = our own middleware
app.use((req, res, next) => {
  res.status(404).json({ status: "Failed", message: "Ora Ketemu Woii!!!" });
});

app.listen(3000, () => {
  console.log("start aplikasi kita di port 3000");
});
