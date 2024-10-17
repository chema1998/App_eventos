const express = require('express');
const { register, login, getUser } = require('../controllers/authController'); // Asegúrate de importar getUser
const { authenticateToken, checkAdmin } = require('../controllers/authMiddleware'); // Importa el middleware para autenticar el token
const { updateUserRole } = require('../controllers/authController'); // Importa la función
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/user', authenticateToken, getUser); // Agrega esta línea para el nuevo endpoint
router.put('/update-role', authenticateToken, checkAdmin, updateUserRole);

module.exports = router;

