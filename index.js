const express = require("express");
const cors = require("cors");
const db = require("./src/config/connectDB");
const app = express();

app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// connect db

db.sequelize.sync().then(() => {
  console.log("Connect DB Successfully");
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.Companies.findAll().then((data) => {
  console.log("In here : ");
  console.log(data);
});

db.Branches.findAll()
  .then((data) => {
    console.log("data day ne", data);
  })
  .catch((err) => {
    console.log(err);
  });

const test = db.UserResumes.create({
  UserId: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
  ResumeName: "git flow",
  JobTitle: "github",
  FileId: "asdasdas",
  CreationTime: new Date(),
});
console.log(test);
