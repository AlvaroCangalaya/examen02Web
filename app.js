const express = require('express');
const app = express();
const db = require('./db');  // Conexión a la base de datos

// Importar las rutas
const medicosRoutes = require('./routers/medicos');  // Debe apuntar a la ubicación correcta
const especialidadesRoutes = require('./routers/especialidades'); 

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Definir las rutas
app.use('/medicos', medicosRoutes);  // Prefijo correcto para la ruta de médicos
app.use('/especialidades', especialidadesRoutes);

app.listen(4000, () => {
    console.log('Servidor corriendo en puerto 4000');
});
