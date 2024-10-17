const db = require('../db');

// Mostrar todas las especialidades
module.exports.mostrar = (req, res) => {
    const sql = 'SELECT * FROM Especialidades';
    db.query(sql, (err, especialidades) => {
        if (err) {
            return res.status(500).send('Error al obtener especialidades');
        }
        res.render('especialidades', { especialidades });
    });
};

// Crear una nueva especialidad
module.exports.crear = (req, res) => {
    const { nombre_especialidad } = req.body;
    const sql = 'INSERT INTO Especialidades (nombre_especialidad) VALUES (?)';
    db.query(sql, [nombre_especialidad], (err) => {
        if (err) {
            return res.status(500).send('Error al crear la especialidad');
        }
        res.redirect('/especialidades');
    });
};

// Editar una especialidad
module.exports.editar = (req, res) => {
    const { id_editar, nombre_editar } = req.body;
    const sql = 'UPDATE Especialidades SET nombre_especialidad = ? WHERE id_Especialidades = ?';
    db.query(sql, [nombre_editar, id_editar], (err) => {
        if (err) {
            return res.status(500).send('Error al actualizar la especialidad');
        }
        res.redirect('/especialidades');
    });
};

// Borrar una especialidad
module.exports.borrar = (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM Especialidades WHERE id_Especialidades = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error al borrar la especialidad:', err); // Para ver detalles del error
            return res.status(500).send('Error al borrar la especialidad');
        }

        if (result.affectedRows === 0) {
            return res.status(404).send('Especialidad no encontrada');
        }

        res.redirect('/especialidades');
    });
};

