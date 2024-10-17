const express = require('express');
const router = express.Router();
const especialidadesController = require('../controllers/especialidadesController');

// Ruta para mostrar todas las especialidades
router.get('/', especialidadesController.mostrar);

// Ruta para crear una nueva especialidad (maneja el POST)
router.post('/crear', especialidadesController.crear);

// Ruta para editar una especialidad
router.post('/editar', especialidadesController.editar);

// Ruta para eliminar una especialidad
router.post('/borrar/:id', especialidadesController.borrar);

module.exports = router;
