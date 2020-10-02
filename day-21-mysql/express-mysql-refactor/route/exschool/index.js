const express = require('express');
const router = express.Router()

const {getAllExschool} = require("./controller") 

router.get("/", getAllExschool)

module.exports = router