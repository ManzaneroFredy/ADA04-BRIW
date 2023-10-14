    // Manejar la selección de archivos
    document.getElementById('archivos').addEventListener('change', function() {
        var archivos = this.files;
        for (var i = 0; i < archivos.length; i++) {
            console.log(archivos[i].name);
        }
    });


    // Mostrar lista de archivos cargados
    document.getElementById('archivos').addEventListener('change', function() {
        var listaArchivos = document.getElementById('lista-archivos');
        listaArchivos.innerHTML = '';

        for(var i = 0; i < this.files.length; i++) {
            var archivo = this.files[i];
            var nuevoElemento = document.createElement('div');
            nuevoElemento.textContent = archivo.name;
            listaArchivos.appendChild(nuevoElemento);
        }
    });
    
    //Mostrar el boton cuando se cargan los archivos
document.getElementById('archivos').addEventListener('change', function() {
    var archivos = this.files;
    var subirButton = document.getElementById('subir');
    if (archivos.length > 0) {
        subirButton.style.display = 'block';
    } else {
        subirButton.style.display = 'none';
    }
});