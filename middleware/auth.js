const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");
const auth = async (req, res, next) => {
  try {
    const secretKey = JSON.stringify(process.env.JWT_SECRET_KEY);
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt_decode(token);
    const iss = "http://20.85.234.109:1112";
    const aud = "Hreo";

    if (decoded.iss != iss || decoded.aud != aud) {
      throw new Error();
    }

    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate" });
  }
};
module.exports = auth;
