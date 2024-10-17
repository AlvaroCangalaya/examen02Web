const mysql = require('mysql2');

// Configuración de la conexión con MySQL
const dbConfig = {
  host: '127.0.0.1',      // Dirección del servidor MySQL
  user: 'root',           // Usuario de MySQL
  password: '',           // Contraseña del usuario de MySQL
  database: 'examen02'    // Nombre de la nueva base de datos
};

let db;

function handleDisconnect() {
  db = mysql.createConnection(dbConfig); 

  // Intentar conectar
  db.connect((err) => {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
      setTimeout(handleDisconnect, 2000);  // Volver a intentar si hay error
    } else {
      console.log('Conectado a la base de datos MySQL "examen02"');
    }
  });

  db.on('error', (err) => {
    console.error('Error en la conexión a MySQL:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();  // Reconectar si se pierde la conexión
    } else {
      throw err;
    }
  });
}

handleDisconnect();  

module.exports = db;
