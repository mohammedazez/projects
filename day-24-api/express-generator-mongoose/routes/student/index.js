var express = require('express');
var router = express.Router();

const {getAllStudent, getStudentById, postStudent} = require("./controller")

/* GET users listing. */
router.get('/', getAllStudent);
router.get("/:id", getStudentById)
router.post('/', postStudent)

module.exports = router;
