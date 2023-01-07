'use strict';
const {Sequelize}  = require('sequelize');
const sequelize = new Sequelize('userAuth','user','pass',{
    dialect:"sqlite",
    host:'./data/data.sqlite'
})

     sequelize.authenticate().then(()=>{
        console.log('Connection has been established successfully.');
     }).catch ((error) =>{
    console.error('Unable to connect to the database:', error);
  })
module.exports=sequelize