// Variables generales
const inicio2023 = new Date("2023-01-01 00:00:00");
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const fechaPruebaInicial = new Date("2023-01-01 00:00:00.500");
const fechaPruebaFinal =   new Date("2023-02-01 02:30:50.000");

// Funciones
function mostrarFecha() {
   let fecha = new Date();
   alert("Hoy es "+
         dias[fecha.getDay()]+" "+
         fecha.getDate()+" de "+
         meses[fecha.getMonth()]+" de "+
         fecha.getFullYear()+" y son las "+
         fecha.getHours()+" horas con "+
         fecha.getMinutes()+" minutos y "+
         fecha.getSeconds()+" segundos.");
}

function deltaTiempo() {
   let fechaActual = new Date();
   let deltaMilisegundos = inicio2023.getTime() - fechaActual.getTime();
   let deltaSegundos = Math.trunc(deltaMilisegundos/1000);
   let dias = Math.trunc(deltaSegundos/(60*60*24));
   let restoSegundos = deltaSegundos%(60*60*24);
   let minutos = Math.trunc(restoSegundos/60);
   let segundos = restoSegundos%60;

   document.getElementById("dias").textContent = dias;
   document.getElementById("minutos").textContent = minutos;
   document.getElementById("segundos").textContent = segundos;
}