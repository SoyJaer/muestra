const days = document.getElementById("days"),
      hours = document.getElementById("hours"),
      min = document.getElementById("min"),
      sec = document.getElementById("sec");

const xv = new Date("June 13, 2025 00:00:00")

setInterval(() => {
    let hoy = new Date().getTime()

let tiempoRest = xv - hoy;
// conversion de ms a dias, horas, min, sec

let dias = Math.floor(tiempoRest/86400000),
    horas = Math.floor(tiempoRest/3600000) % 24,
    minutos = Math.floor(tiempoRest/60000) % 60,
    segundos = Math.floor(tiempoRest/1000) % 60;

//Mostrar en pantalla

days.innerHTML = dias;
hours.innerHTML = horas;
min.innerHTML = minutos;
sec.innerHTML = segundos;

// Acomodar digitos

if (dias < 10) days.innerHTML = "0" + dias;
if (horas < 10) hours.innerHTML = "0" + horas;
if (minutos < 10) min.innerHTML = "0" + minutos;
if (segundos < 10) sec.innerHTML = "0" + segundos;

}, 1000);

