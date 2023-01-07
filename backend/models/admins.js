'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Admins = sequelize.define('Admins', {
    // Model attributes are defined here
    adminId:{
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
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Admins' ,// We need to choose the model name
    timestamps: false 
});
// Admins.sync({force:false}).then((data)=>{
//   ("table and model synced successfully!")
// }).catch((err)=>{
//   ("error syncing the table and model!")
// })
  module.exports = Admins;