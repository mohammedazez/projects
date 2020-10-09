require("dotenv").config()
const jwt = require('jsonwebtoken');

module.exports = {
  auth: (req, res, next) => {
    const authHeader = req.headers.authorization
    console.log("HEADER", authHeader);
    const token = authHeader.split(" ")[1]
    console.log("TOKEN", token)

    if (token == null) return res.json("missing token")

    const isTokenValid = jwt.verify(token, process.env.SECRET_KEY)
    console.log("ISI TOKEN", isTokenValid)

    if (isTokenValid) {
      req.body = isTokenValid
      next()
    } else {
      res.json("token is not valid")
    }
    // "Bearer xxxxxxx"
  }
}