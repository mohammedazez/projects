const express = require('express');
const router = express.Router()

const {getAllUser, getUserById} = require("./controller") 

router.get("/", getAllUser)
router.get("/:id", getUserById)

module.exports = router