
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/Database');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  termsAccepted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false // Por defecto, no aceptado
  },
  lastConnection: {
    type: DataTypes.DATE
  }
}, {
  timestamps: true
});

module.exports = User;
