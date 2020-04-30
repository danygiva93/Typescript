type Heroe = {
  nombre:string,
  edad:number,
  poderes:any[],
  getNombre:()=>string
}

let flash: Heroe = {
  nombre: "Barry Allen",
  edad: 24,
  poderes:["Corres rapido","Viajar en tiempo"],
  getNombre(){
    return this.nombre;
  }
};


let superman: Heroe = {
  nombre: "Clark kent",
  edad: 500,
  poderes:["volar","super velocidad",223],
  getNombre(){
    return this.nombre;
  }
};
