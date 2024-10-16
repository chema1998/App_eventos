const express = require('express');
const { createEvent, getEvents, registerEvent, getEventById, updateEvent, deleteEvent } = require('../controllers/eventController');
const router = express.Router();

router.post('/crear', createEvent);
router.get('/consultar', getEvents);
router.post('/:id/registrar', registerEvent);
router.get('/consultar/:id',getEventById);
router.put('/actualizar/:id',updateEvent);
router.delete('/borrar/:id',deleteEvent);

module.exports = router;
