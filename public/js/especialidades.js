document.addEventListener('DOMContentLoaded', function() {
    // Capturamos el clic en el botón de editar especialidad
    document.querySelectorAll('.btnEditarEspecialidad').forEach(button => {
        button.addEventListener('click', function() {
            // Obtenemos los datos del botón de edición
            const id = this.getAttribute('data-id');
            const nombre = this.getAttribute('data-nombre');

            // Rellenamos el modal con los datos de la especialidad
            document.getElementById('id_editar_especialidad').value = id;
            document.getElementById('nombre_editar_especialidad').value = nombre;
        });
    });
});
