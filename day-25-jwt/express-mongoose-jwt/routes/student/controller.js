require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { Student } = require('../../models');

module.exports = {
    getAllStudent: (req, res) => {
        Student.find()
            .populate('class', '-__v')
            .then((result) => {
                res.status(200).json({
                    message: 'success get data student',
                    result,
                });
            })
            .catch((err) => {
                res.status(404).json('cannot get data student');
            });
    },

    getStudentById: async (req, res) => {
        const students = await Student.findById(req.params.id);

        try {
            res.json({
                message: 'success get user with id',
                students,
            });
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    },

    getStudentInClass: async (req, res) => {
        const students = await Student.find({ class: req.params.id });

        try {
            res.json({
                message: 'success get student in class',
                students,
            });
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    },

    postStudent: async (req, res) => {
        // console.log("Student", Student

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        let student = {
            ...req.body,
            password: hash,
        };
        console.log(student);

        // console.log("students", students);
        student = await Student.create(student);
        try {
            res.json({
                message: 'success add data student',
                student,
            });
        } catch (err) {
            console.log('ini error', err);
            // res.send(err);
            res.status(500).send(err);
        }
    },

    loginStudent: async (req, res) => {
        try {
            const student = await Student.findOne({ email: req.body.email });
            if (student) {
                const pass = bcrypt.compareSync(
                    req.body.password,
                    student.password
                );
                if (pass) {
                    const token = jwt.sign(
                        student.toObject(),
                        process.env.SECRET_KEY
                    );
                    res.json({
                        message: 'login success',
                        token,
                    });
                } else {
                    res.status(400).json('wrong password');
                }
            } else {
                res.json('user not found');
            }
        } catch (err) {
            console.log(err);
        }
    },
};
