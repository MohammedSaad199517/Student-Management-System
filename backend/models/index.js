const sequelize = require('../config/database');
const Admins =require('./admins');
const Students =require ('./students');
const Courses =require ('./courses');
const Teachers =require ('./teachers');
//----------------------------------------
Teachers.hasMany(Courses,{
    foreignKey:'teacherId'
});
//----------------------------------------
sequelize.sync({ alter: true }).then((data)=>{
    ("table and model synced successfully!")
  }).catch((err)=>{
    ("error syncing the table and model!")
  })
  
module.exports={
    Admins,
    Students,
    Courses,
    Teachers
}