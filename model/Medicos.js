const mysql = require('mysql2');
const db = require('../db');

// Definimos el esquema para Médicos
const MedicoSchema = {
    nombre: String,
    apellido_paterno: String,
    apellido_materno: String,
    correo_electronico: String,
    perfil: String,
    educacion: String,
    horarios_disponibles: String,
    especialidad_id: Number
};

module.exports = db;
