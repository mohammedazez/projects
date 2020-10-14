var express = require('express');
var router = express.Router();

const {
    getAllStudent,
    getStudentById,
    postStudent,
    getStudentInClass,
    loginStudent,
} = require('./controller');
const { auth } = require('../../helper/auth');

router.get('/me', auth, (req, res) => {
    res.json({
        message: 'Hallo user',
        user: req.body,
    });
});

/* GET users listing. */
router.get('/', getAllStudent);
router.get('/:id', getStudentById);
router.get('/class/:id', getStudentInClass);
router.post('/', postStudent);

router.post('/login', loginStudent);

module.exports = router;
