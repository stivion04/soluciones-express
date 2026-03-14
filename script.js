document.getElementById("serviceForm").addEventListener("submit", function(e){

e.preventDefault();

let nombre = document.getElementById("nombre").value;
let telefono = document.getElementById("telefono").value;
let servicio = document.getElementById("servicio").value;
let direccion = document.getElementById("direccion").value;
let problema = document.getElementById("problema").value;

let mensaje = `Hola quiero solicitar servicio

Nombre: ${nombre}
Teléfono: ${telefono}
Servicio: ${servicio}
Dirección: ${direccion}
Problema: ${problema}`;

let url = "https://wa.me/573229148470?text=" + encodeURIComponent(mensaje);

window.open(url,"_blank");

});