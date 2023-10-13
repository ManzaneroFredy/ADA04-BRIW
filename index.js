    // Manejar la selección de archivos
    document.getElementById('archivos').addEventListener('change', function() {
        var archivos = this.files;
        for (var i = 0; i < archivos.length; i++) {
            console.log(archivos[i].name);
        }
    });