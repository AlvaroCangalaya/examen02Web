document.addEventListener('DOMContentLoaded', function() {
    console.log('Archivo medico.js cargado correctamente');  // Para verificar si el archivo está siendo cargado

    // Capturamos todos los botones de edición
    document.querySelectorAll('.btnEditar').forEach(button => {
        button.addEventListener('click', function() {
            // Obtenemos los datos del médico desde los atributos del botón
            const id = this.getAttribute('data-id');
            const nombre = this.getAttribute('data-nombre');
            const apellido_paterno = this.getAttribute('data-apellido_paterno');
            const apellido_materno = this.getAttribute('data-apellido_materno');
            const correo = this.getAttribute('data-correo');
            const perfil = this.getAttribute('data-perfil');
            const educacion = this.getAttribute('data-educacion');
            const horarios = this.getAttribute('data-horarios');
            const especialidad = this.getAttribute('data-especialidad');

            // Mostramos los datos en consola para depurar si es necesario
            console.log('Datos obtenidos para edición:', {
                id, nombre, apellido_paterno, apellido_materno, correo, perfil, educacion, horarios, especialidad
            });

            // Rellenamos los campos del modal con los datos obtenidos
            document.getElementById('id_editar').value = id;
            document.getElementById('nombre_editar').value = nombre;
            document.getElementById('apellido_paterno_editar').value = apellido_paterno;
            document.getElementById('apellido_materno_editar').value = apellido_materno;
            document.getElementById('correo_editar').value = correo;
            document.getElementById('perfil_editar').value = perfil;
            document.getElementById('educacion_editar').value = educacion;
            document.getElementById('horarios_editar').value = horarios;
            document.getElementById('especialidad_id_editar').value = especialidad;
        });
    });
});
