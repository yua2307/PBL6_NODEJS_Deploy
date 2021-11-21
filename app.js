const express = require("express");
const cors = require("cors");
const db = require("./db/connectDB");
const app = express();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const userResumesRoute = require("./routes/UserResumeRoute");
const emailRoute = require("./routes/SendEmail");

// const swaggerOptions = {
//   swaggerDefinition: {
//     openapi: "3.0.0",
//     info: {
//       title: "My applicant API Information",
//       contact: {
//         name: "Amazing Dev",
//       },
//       servers: ["https://pbl6nodejs.azurewebsites.net"],
//     },
//   },
//   // [./routes/*.js]
//   apis: ["app.js"],
// };

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// connect db
// db.sequelize.sync().then(() => {
//   console.log("Connect DB Successfully");
// });

app.use(userResumesRoute);
app.use(emailRoute);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
// simple route

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});
/*

@
openapi: 3.0.1
info:
  title: defaultTitle
  description: defaultDescription
  version: '0.1'
servers:
  - url: http://localhost:8080
paths:
  /company:
    get:
      description: Get all company
      responses:
        '200':
          description: Get all company
          content:
            application/json; charset=utf-8:
              schema:
                type: string
              examples: {}
      servers:
        - url: http://localhost:8080
    servers:
      - url: http://localhost:8080
*/
app.get("/company", async (req, res) => {
  const listCompany = await db.Companies.findAll();

  res.json({ listCompany: listCompany });
});
