'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Teachers = sequelize.define('Teachers', {
    // Model attributes are defined here
    teacherId:{
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
  
    gender:{
        type:DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Teachers' ,// We need to choose the model name
    timestamps: false 
});
// Teachers.sync({force:false}).then((data)=>{
//   console.log("table and model synced successfully!")
// }).catch((err)=>{
//   console.log("error syncing the table and model!")
// })
  module.exports = Teachers;