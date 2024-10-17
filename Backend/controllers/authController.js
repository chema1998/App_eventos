const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



exports.register = async (req, res) => {
  const { name, email, password, termsAccepted, role } = req.body;
  if (!termsAccepted) {
    return res.status(400).json({ message: 'Debes aceptar los términos y condiciones.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, termsAccepted, role: role || 'user' });
    res.status(201).json({ message: 'Usuario registrado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Actualiza la última conexión
    user.lastConnection = new Date();
    await user.save();

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, user: { id: user.id, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Error al autenticar usuario', error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id); // Asumiendo que req.user contiene el ID del usuario autenticado
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    
    // Excluye el campo de contraseña si lo tienes
    const { password, ...userData } = user.dataValues;
    res.json(userData); // Devuelve la información del usuario
  } catch (error) {
    res.status(500).json({ message: 'Error al recuperar usuario', error: error.message });
  }
};
exports.updateUserRole = async (req, res) => {
  const { userId, role } = req.body;

  // Verificar que el usuario autenticado es un administrador
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'No tienes permiso para realizar esta acción.' });
  }

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    user.role = role; // Cambia el rol
    await user.save();
    res.status(200).json({ message: 'Rol de usuario actualizado.', user });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el rol del usuario', error: error.message });
  }
};


