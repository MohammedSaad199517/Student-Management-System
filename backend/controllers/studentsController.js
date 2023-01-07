const {Students} = require('../models/index')

const studentsController = {
     getAllStudents :async(req,res)=>{
        const students =await Students.findAll()
    
        res.send(students)
    },
}


module.exports = studentsController