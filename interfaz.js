"use strict";
function enviarMision(xmen) {
    console.log("enviar a:" + xmen.nombre);
}
;
function enviarCuartel(xmen) {
    console.log("enviar al cuartel:" + xmen.nombre);
}
;
var wolverine = {
    nombre: "wolverine",
    poder: "Regeneracion"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
