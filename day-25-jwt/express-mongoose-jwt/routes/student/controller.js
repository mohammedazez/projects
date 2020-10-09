require("dotenv").config()
const jwt = require('jsonwebtoken');
const {Student} = require('../../models');

module.exports = {
  getAllStudent: (req, res) => {
    Student.find()
    .populate("class", "-__v")
    .then(result => {
      res.status(200).json({
        message: "success get data student",
        result
      })
    })
    .catch(err => {
      res.status(404).json("cannot get data student")
    })
  },

  getStudentById: async (req, res) => {
    const students = await Student.findById(req.params.id);
  
    try {
      res.json({
        message: "success get user with id",
        students
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  getStudentInClass: async (req, res) => {
    const students = await Student.find({class: req.params.id});
  
    try {
      res.json({
        message: "success get student in class",
        students
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  postStudent: async (req, res) => {
    // console.log("Student", Student);
    const students = await Student.create(req.body);
    // console.log("students", students);
    try {
      res.json({
        message: "success add data student",
        students
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  loginStudent: async (req, res) => {
    try {
      const student = await Student.findOne({name: req.body.name})
      console.log(student)
      console.log(process.env.SECRET_KEY)


      if (student){
        const token = jwt.sign(student.toObject(), process.env.SECRET_KEY)
        res.json({
          message: "login success",
          token
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

}