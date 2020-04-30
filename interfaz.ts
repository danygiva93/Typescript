
interface Xmen {
    nombre:string,
    poder:string
}



function enviarMision(xmen: Xmen) {

  console.log("enviar a:" + xmen.nombre);

};


function enviarCuartel(xmen: Xmen) {

  console.log("enviar al cuartel:" + xmen.nombre);

};


let wolverine: Xmen = {
  nombre: "wolverine",
  poder: "Regeneracion"
};

enviarMision(wolverine);
enviarCuartel(wolverine);
