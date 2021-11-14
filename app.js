const express = require("express");
const cors = require("cors");
const db = require("./config/connectDB");
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
// simple route
app.get("/", async (req, res) => {
  const listCompany = await db.Companies.findAll();
  console.log(listCompany);
  res.json({ listCompany: listCompany });

  // res.json({ message: "abcd" });
});
