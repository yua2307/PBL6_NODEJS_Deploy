const express = require("express");
const cors = require("cors");
const db = require("./db/connectDB");
const app = express();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const userResumesRoute = require("./routes/UserResumeRoute");
const emailRoute = require("./routes/SendEmail");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// connect db
db.sequelize.sync().then(() => {
  console.log("Connect DB Successfully");
});

app.use(userResumesRoute);
app.use(emailRoute);
// set port, listen for requests
const PORT = process.env.PORT || 3000 || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.get("/company", async (req, res) => {
  const listCompany = await db.Companies.findAll();

  res.json({ listCompany: listCompany });
});
