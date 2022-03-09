var Ruta1 = {
    origen: "",
    destino: "",
    hora: "",
    costobase: 500 + " $",
    reservas: []
};

        var Capturar = function () {
            let datos = document.getElementsByClassName("datos"),
                arrayGuardar = [];
            for (var i = 0; i < datos.length; i++) {
                arrayGuardar[i] = datos[i].value;
                console.log(datos[i].value);
                console.log(arrayGuardar)
            }
        }