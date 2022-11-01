const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 7000;

app.use(cors());


const fullCourses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("learn more coding API is running");
});


app.get("/all-courses-details", (req, res) => {
  res.send(fullCourses);
});

app.listen(port, () => {
  console.log("learn more coading running on port", port);
});
