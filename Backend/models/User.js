
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
  },
  role: { // Agrega el campo de rol
    type: DataTypes.ENUM('admin', 'user'), // Define los roles posibles
    allowNull: false,
    defaultValue: 'user' // Por defecto, asigna el rol de usuario
  }
}, {
  timestamps: true
});

module.exports = User;
