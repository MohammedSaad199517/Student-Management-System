const express =require('express');
const router =express.Router();
const {getAllTeachers} =require('../controllers/teachersController');


router.get('/',getAllTeachers);
module.exports = router;