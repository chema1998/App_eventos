const Event = require('./Event');
const User = require('./User');

const EventParticipants = require('./EventParticipants'); // Cargar la tabla de asociación

// Definir la relación muchos a muchos
Event.belongsToMany(User, { through: EventParticipants });
User.belongsToMany(Event, { through: EventParticipants });

module.exports = {
  Event,
  User,
  EventParticipants,
};
