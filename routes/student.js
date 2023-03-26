const express = require("express");
const studentController = require('../controller/student')

const router = express.Router();

router.post('/student', studentController.studentEnrollment);
router.put('/student',studentController.UpdateStudent)
router.delete('/student',studentController.deleteStudent)
router.get('/student',studentController.findStudent)
module.exports = router;