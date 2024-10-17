const express = require('express');
const router = express.Router();
const medicosController = require('../controllers/medicosController');

// Ruta para mostrar todos los médicos (GET /medicos)
router.get('/', medicosController.mostrar);  // Esta ruta maneja GET /medicos

// Otras rutas para crear, editar, borrar médicos
router.post('/crear', medicosController.crear);
router.post('/editar', medicosController.editar);
router.post('/borrar/:id', medicosController.borrar);

module.exports = router;
