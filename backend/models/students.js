'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Students = sequelize.define('Students', {
    // Model attributes are defined here
    studentId:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    email: {
    type: DataTypes.STRING,
    allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false
    },
    refreshToken:{
      type:DataTypes.STRING,
    },
    session:{
        type:DataTypes.STRING,
        allowNull: false
    },
    stage:{
        type:DataTypes.STRING,
        allowNull: false
    },
    gender:{
        type:DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Students' ,// We need to choose the model name
    timestamps: false 
});
// Students.sync({force:false}).then((data)=>{
//   console.log("table and model synced successfully!")
// }).catch((err)=>{
//   console.log("error syncing the table and model!")
// })
  module.exports = Students;