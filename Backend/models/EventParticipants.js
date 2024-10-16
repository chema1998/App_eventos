const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/Database');

const EventParticipants = sequelize.define('EventParticipants', {
  eventId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Events', // Nombre de la tabla
      key: 'id',
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', // Nombre de la tabla
      key: 'id',
    },
  },
}, {
  timestamps: false,
  tableName: 'EventParticipants' // Aseguramos que el nombre de la tabla sea consistente
});

module.exports = EventParticipants;
