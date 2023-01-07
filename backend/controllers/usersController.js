const Admins = require('../models/admins')

const userController = {
     getAllEmployees :async(req,res)=>{
       const admins =await Admins.findAll()
        res.json(admins)
    },

    createNewEmployee :(req,res)=>{
        const newEmployee = {
            id : data.employees[data.employees.length - 1].id + 1 || 1    ,
            firstname:req.body.firstname,
            lastname:req.body.lastname
        }
        if(!newEmployee.firstname || !newEmployee.lastname){
            return res.status(400).json({
                "message" : "First and last name are required."
            })
        }
        data.setEmployees([...data.employees,newEmployee]);
        res.status(201).json(data.employees)
    },

    updateEmployee :(req,res)=>{
    const employee = data.employees.find(emp => emp.id ===parseInt(req.body.id));
    if(!employee){
        return res.status(400).json({
            "message" : `employee ID ${req.body.id} not found`
        })
    } 
    if(req.body.firstname) employee.firstname = req.body.firstname;
    if(req.body.lastname) employee.lastname = req.body.lastname;
    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id))
    const unsortedArray = [...filteredArray,employee]
    data.setEmployees(unsortedArray.sort((a,b)=>a.id >b.id ? 1 :a.id < b.id ? -1 :0))
    res.json(data.employees)
    },
    deleteEmployee :(req,res)=>{
        const employee = data.employees.find(emp => emp.id ===parseInt(req.body.id));
        if(!employee){
            return res.status(400).json({
                "message" : `employee ID ${req.body.id} not found`
            })
        } 
    
        const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id))
        
        data.setEmployees([...filteredArray])
        res.json(data.employees)
    },


    getEmployee : (req,res)=>{
    const employee = data.employees.find(emp => emp.id ===parseInt(req.body.id));
    if(!employee){
        return res.status(400).json({
            "message" : `employee ID ${req.body.id} not found`
        })
    } 
  
    res.json(employee)
    },



}


module.exports = userController