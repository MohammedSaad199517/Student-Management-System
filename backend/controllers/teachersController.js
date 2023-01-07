const {Teachers} = require('../models/index')


     const getAllTeachers=async(req,res)=>{
        const teachers =await Teachers.findAll()
        res.send(teachers)
    }



module.exports = {getAllTeachers}