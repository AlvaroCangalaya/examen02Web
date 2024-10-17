const db = require('../db');

// Mostrar todos los médicos
module.exports.mostrar = (req, res) => {
    const sql = 'SELECT * FROM Medicos';
    db.query(sql, (err, medicos) => {
        if (err) {
            return res.status(500).send('Error al obtener médicos');
        }
        res.status(200).render('medicos', { medicos });
    });
};

// Crear un nuevo médico
module.exports.crear = (req, res) => {
    const { nombre, apellido_paterno, apellido_materno, correo_electronico, perfil, educacion, horarios_disponibles, especialidad_id } = req.body;
    const sql = 'INSERT INTO Medicos (NOMBRE, APELLIDO_PATERNO, APELLIDO_MATERNO, CORREO_ELECTRONICO, PERFIL, EDUCACION, HORARIOS_DISPONIBLES, Especialidades_id_Especialidades) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [nombre, apellido_paterno, apellido_materno, correo_electronico, perfil, educacion, horarios_disponibles, especialidad_id], (err) => {
        if (err) {
            return res.status(500).send('Error al crear el médico');
        }
        res.redirect('/medicos');
    });
};

// Editar un médico
module.exports.editar = (req, res) => {
    const { id_editar, nombre_editar, apellido_paterno_editar, apellido_materno_editar, correo_editar, perfil_editar, educacion_editar, horarios_editar, especialidad_id_editar } = req.body;
    const sql = 'UPDATE Medicos SET NOMBRE = ?, APELLIDO_PATERNO = ?, APELLIDO_MATERNO = ?, CORREO_ELECTRONICO = ?, PERFIL = ?, EDUCACION = ?, HORARIOS_DISPONIBLES = ?, Especialidades_id_Especialidades = ? WHERE id_medicos = ?';
    db.query(sql, [nombre_editar, apellido_paterno_editar, apellido_materno_editar, correo_editar, perfil_editar, educacion_editar, horarios_editar, especialidad_id_editar, id_editar], (err) => {
        if (err) {
            return res.status(500).send('Error al actualizar el médico');
        }
        res.redirect('/medicos');
    });
};

// Borrar un médico
module.exports.borrar = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM Medicos WHERE id_medicos = ?';
    db.query(sql, [id], (err) => {
        if (err) {
            return res.status(500).send('Error al eliminar el médico');
        }
        res.redirect('/medicos');
    });
};
