function expandirContraer(){
let educacion =document.getElementById("educacion");
educacion.style.display === "block"?
educacion.style.display = "none":
educacion.style.display = "block";
}
// expande y contrae la seccion "Formacion Académica"//

class Trabajo {
    lugar;
    puesto;
    añoInicio;
    añoFinal;

    constructor (lugar,puesto,añoInicio,añoFinal){
    this.lugar = lugar;
    this.puesto = puesto;
    this.añoInicio = añoInicio;
    this.añoFinal = añoFinal;   }

    mostrarTrabajo(){
        let Trabajos = document.getElementById("trabajos");
        let laburo = document.createElement("div");
        let lugar = document.createElement ("p");
        let puesto = document.createElement("p");
        let añoInicio = document.createElement("p");
        let añoFinal = document.createElement("p");
        lugar.innerHTML = "Lugar: " + this.lugar;
        puesto.innerHTML = "Puesto: " + this.puesto;
        añoInicio.innerHTML = "Año de comienzo: " + this.añoInicio;
        añoFinal.innerHTML = "Año de Finalizacion: " + this.añoFinal;
        laburo.appendChild(lugar);
        laburo.appendChild(puesto);
        laburo.appendChild(añoInicio);
        laburo.appendChild(añoFinal);
        laburo.style.padding = "0.5em";
        laburo.style.border = "2px solid blue";
        laburo.style.margin = "2em";
        Trabajos.appendChild(laburo);
    }
}

let trabajos = []; 
trabajos[0] = new Trabajo (
    "NORLIT SRL - Fabrica de Tanques y Premoldeados",
    "Encargado de Compras",
    "Octubre 2019",
    "A la fecha",
);
trabajos [1] = new Trabajo(
    "NORLIT SRL - Fabrica de Tanques y Premoldeados",
    "Encargado de Producción",
    "Marzo 2020",
    "A la fecha",
);
trabajos [2] = new Trabajo(
    "NORLIT SRL - Fabrica de Tanques y Premoldeados",
    "Encargado de Logistica",
    "Marzo 2020",
    "A la fecha",
);
trabajos [3] = new Trabajo(
    "NORLIT SRL - Fabrica de Tanques y Premoldeados",
    "Tesorero",
    "Abril 2019",
    "Abril 2021",
);
trabajos [4] = new Trabajo(
    "APICULTOR",
    "Emprendimiento Propio",
    "Abril 2013",
    "Abril 2019",
);
trabajos [5] = new Trabajo(
    "GIOIA VIAJES - Agencia de Turismo",
    "Vendedor",
    "Abril 2016",
    "Abril 2017",
);

function dinamico(){
    trabajos.forEach(Trabajo=> {
        Trabajo.mostrarTrabajo();
    })
}
// Muestra los trabajos en el momento de la carga//

function aumentarTelefono(id) {
    var elemento = document.getElementById(id);
    elemento.style.fontSize = '28px';
  }
// expande el numero Telefonico //

  function contraerTelefono(id) {
    var elemento = document.getElementById(id);
    elemento.style.fontSize = '14px';
  }
// contrae  el numero Telefonico //