const express = require('express');
const { connectDB } = require('./config/Database');
const cors = require('cors');


const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

const { sequelize } = require('./config/Database');



// Sincronizar los modelos con la base de datos
sequelize.sync({ alter: true }).then(() => {
  console.log('Tablas sincronizadas y alteradas con la base de datos');
}).catch((error) => {
  console.error('Error al sincronizar las tablas:', error);
});

