
const btn = document.getElementById("formulario");
btn.addEventListener("submit", validarFormulario);

function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById("txtNombre").value;
    var longitude = document.getElementById("txtLongitude").value;
    var latitude = document.getElementById("txtLatitude").value;
    if(nombre === "" || latitude === "" || longitude === "") {
        alert("Debe ingresar todos los datos.");
        return;
    } else if (latitude >= 21.054610 && latitude <= 21.203842 && longitude >= -101.786046  && longitude <= -101.541600) {
        enviarDatos();
    } else {
        alert("La ubicación ingresada está fuera de nuestra área de entrega. Intente con otra ubicación.");
        return;
    }
}

function enviarDatos(){
    var nombre = document.getElementById("txtNombre").value;
    var longitude = document.getElementById("txtLongitude").value;
    var latitude = document.getElementById("txtLatitude").value;
    window.location.href = "mapa_pointer.html?nombre=" + nombre + "&latitud=" + latitude + "&longitud=" + longitude;
}
