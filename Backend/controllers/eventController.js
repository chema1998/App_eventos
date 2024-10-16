
const { Event, User } = require('../models/index');
// Crear un evento
exports.createEvent = async (req, res) => {
  const { name, description, date, location, price } = req.body;

  // Validar que todos los campos requeridos están presentes
  if (!name || !date || !location) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const event = await Event.create({ name, description, date, location, price });
    res.status(201).json({ message: 'Evento creado exitosamente', event });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el evento', error: error.message });
  }
};

// Obtener todos los eventos
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener eventos', error: error.message });
  }
};

// Registrar un usuario en un evento
exports.registerEvent = async (req, res) => {
  const { userId } = req.body;
  const { id: eventId } = req.params;

  try {
    const event = await Event.findByPk(eventId);
    const user = await User.findByPk(userId);
    console.log(event)
    if (event && user) {
      await event.addUser(user); // Asegúrate que la relación entre evento y usuario esté definida
      res.status(200).json({ message: 'Usuario registrado en el evento exitosamente' });
    } else {
      res.status(404).json({ message: 'Evento o usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar en el evento', error: error.message });
  }
};

// Obtener un evento por su ID
exports.getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByPk(id);

    if (!event) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un evento
exports.updateEvent = async (req, res) => {
  const { id } = req.params;
  const { name, date, location } = req.body;

  if (!name || !date || !location) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    // Actualizar el evento
    await event.update({ name, date, location });
    res.status(200).json({ message: 'Evento actualizado exitosamente', event });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un evento
exports.deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ error: 'Evento no encontrado' });
    }

    // Eliminar el evento
    await event.destroy();
    res.status(204).json({ message: 'Evento eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



