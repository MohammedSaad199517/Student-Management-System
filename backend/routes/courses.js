const express =require('express');
const router =express.Router();
const {postCourse,getCourses,deleteSubject,updateSubject} =require('../controllers/coursesController')

router.post('/',postCourse)
router.get('/',getCourses)
router.delete('/:id',deleteSubject)
router.put('/:id',updateSubject)
module.exports = router;





