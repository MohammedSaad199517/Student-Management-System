'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Courses = sequelize.define('Courses', {
    // Model attributes are defined here
    subjectId:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    stage: {
        type: DataTypes.STRING,
        allowNull: false
      },
    course: {
    type: DataTypes.STRING,
    allowNull: false
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
 
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Courses' ,// We need to choose the model name
    timestamps: false 
});
// Courses.sync({force:false}).then((data)=>{
//   ("table and model synced successfully!")
// }).catch((err)=>{
//   ("error syncing the table and model!")
// })
  module.exports = Courses;