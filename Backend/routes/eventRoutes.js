const express = require('express');
const { createEvent, getEvents, registerEvent, getEventById, updateEvent, deleteEvent } = require('../controllers/eventController');
const { authenticateToken, checkAdmin } = require('../controllers/authMiddleware'); // Importa ambos middlewares
const router = express.Router();

router.post('/crear',authenticateToken, checkAdmin, createEvent);
router.get('/consultar', getEvents);
router.post('/:id/registrar', registerEvent);
router.get('/consultar/:id',getEventById);
router.put('/actualizar/:id',authenticateToken, checkAdmin, updateEvent);
router.delete('/borrar/:id',authenticateToken, checkAdmin, deleteEvent);

module.exports = router;
