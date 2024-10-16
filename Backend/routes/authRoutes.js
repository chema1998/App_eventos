const express = require('express');
const { register, login, getUser } = require('../controllers/authController'); // Asegúrate de importar getUser
const { authenticateToken } = require('../controllers/authMiddleware'); // Importa el middleware para autenticar el token
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/user', authenticateToken, getUser); // Agrega esta línea para el nuevo endpoint

module.exports = router;

