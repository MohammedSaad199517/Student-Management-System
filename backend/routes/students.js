const express =require('express');
const router =express.Router();
const studentsController =require('../controllers/studentsController');
const ROLES_LIST = require("../config/roles_list")
const verifyRoles = require ('../middleware/verifyRoles')

router.route('/')
    .get(studentsController.getAllStudents);
module.exports = router;