const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Obtiene el token

  if (!token) return res.sendStatus(401); // Si no hay token, devuelve 401 (no autorizado)

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Si el token no es válido, devuelve 403 (prohibido)
    req.user = user; // Almacena el usuario en la solicitud
    next(); // Continúa al siguiente middleware o ruta
  });
};
