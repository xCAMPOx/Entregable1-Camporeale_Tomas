const preguntas = [
  { pregunta: "¿Cuál es la capital de Francia?", opciones: { A: "Madrid", B: "París", C: "Roma" }, respuestaCorrecta: "B" },
  { pregunta: "¿Qué lenguaje se usa para la web?", opciones: { A: "JavaScript", B: "Python", C: "C++" }, respuestaCorrecta: "A" },
  { pregunta: "¿Cuántos días tiene una semana?", opciones: { A: "5", B: "7", C: "10" }, respuestaCorrecta: "B" },
  { pregunta: "¿Cuál es el planeta más grande del sistema solar?", opciones: { A: "Júpiter", B: "Tierra", C: "Saturno" }, respuestaCorrecta: "A" },
  { pregunta: "¿Qué instrumento tiene cuerdas?", opciones: { A: "Piano", B: "Batería", C: "Guitarra" }, respuestaCorrecta: "C" },
  { pregunta: "¿En qué continente está Egipto?", opciones: { A: "Asia", B: "África", C: "Europa" }, respuestaCorrecta: "B" },
  { pregunta: "¿Cuántos colores tiene el arcoíris?", opciones: { A: "6", B: "7", C: "8" }, respuestaCorrecta: "B" },
  { pregunta: "¿Cuál es el metal más liviano?", opciones: { A: "Oro", B: "Hierro", C: "Litio" }, respuestaCorrecta: "C" },
  { pregunta: "¿Cuál es la fórmula del agua?", opciones: { A: "CO2", B: "H2O", C: "O2" }, respuestaCorrecta: "B" },
  { pregunta: "¿Qué animal es conocido como el rey de la selva?", opciones: { A: "León", B: "Elefante", C: "Tigre" }, respuestaCorrecta: "A" },
  { pregunta: "¿Cuál es el océano más grande del mundo?", opciones: { A: "Atlántico", B: "Pacífico", C: "Índico" }, respuestaCorrecta: "B" },
  { pregunta: "¿Qué gas respiramos los humanos?", opciones: { A: "Oxígeno", B: "Hidrógeno", C: "Nitrógeno" }, respuestaCorrecta: "A" },
  { pregunta: "¿Quién pintó la Mona Lisa?", opciones: { A: "Van Gogh", B: "Picasso", C: "Da Vinci" }, respuestaCorrecta: "C" },
  { pregunta: "¿Cuál es la moneda de Japón?", opciones: { A: "Yen", B: "Won", C: "Dólar" }, respuestaCorrecta: "A" },
  { pregunta: "¿Qué parte del cuerpo humano bombea sangre?", opciones: { A: "Pulmón", B: "Hígado", C: "Corazón" }, respuestaCorrecta: "C" }
];

let indiceActual = 0;
let puntaje = 0;

const btnIniciar = document.getElementById("btn-iniciar");
const contenedorInicio = document.getElementById("inicio-container");
const contenedorJuego = document.getElementById("juego-container");
const preguntaTexto = document.getElementById("pregunta-texto");
const opcionesContainer = document.getElementById("opciones-container");
const btnSiguiente = document.getElementById("btn-siguiente");
const btnVerPuntaje = document.getElementById("btn-ver-puntaje");
const btnReiniciar = document.getElementById("btn-reiniciar");
const puntajeFinal = document.getElementById("puntaje-final");

function mostrarPregunta() {
  const pregunta = preguntas[indiceActual];
  preguntaTexto.textContent = pregunta.pregunta;
  opcionesContainer.innerHTML = "";

  for (const letra in pregunta.opciones) {
    const btn = document.createElement("button");
    btn.className = "opcion-btn";
    btn.textContent = `${letra}: ${pregunta.opciones[letra]}`;
    btn.onclick = () => verificarRespuesta(letra);
    opcionesContainer.appendChild(btn);
  }
}

function verificarRespuesta(letraElegida) {
  const correcta = preguntas[indiceActual].respuestaCorrecta;
  if (letraElegida === correcta) {
    puntaje++;
  }
  deshabilitarBotones();
  btnSiguiente.style.display = "inline-block";
}

function deshabilitarBotones() {
  const botones = document.querySelectorAll(".opcion-btn");
  botones.forEach(btn => btn.disabled = true);
}

function siguientePregunta() {
  indiceActual++;
  if (indiceActual < preguntas.length) {
    btnSiguiente.style.display = "none";
    mostrarPregunta();
  } else {
    finalizarJuego();
  }
}

function finalizarJuego() {
  preguntaTexto.style.display = "none";
  opcionesContainer.style.display = "none";
  btnSiguiente.style.display = "none";
  puntajeFinal.textContent = `¡Juego terminado! Tu puntaje fue ${puntaje} de ${preguntas.length}`;
  puntajeFinal.style.display = "block";
  localStorage.setItem("puntajeFinal", puntaje);
}

btnIniciar.addEventListener("click", () => {
  contenedorInicio.style.display = "none";
  contenedorJuego.style.display = "block";
  mostrarPregunta();
});

btnSiguiente.addEventListener("click", siguientePregunta);

btnVerPuntaje.addEventListener("click", () => {
  const guardado = localStorage.getItem("puntajeFinal");
  if (guardado) {
    alert(`Tu puntaje anterior fue: ${guardado}`);
  } else {
    alert("No hay puntaje guardado.");
  }
});

btnReiniciar.addEventListener("click", () => {
  indiceActual = 0;
  puntaje = 0;
  puntajeFinal.style.display = "none";
  preguntaTexto.style.display = "block";
  opcionesContainer.style.display = "block";
  btnSiguiente.style.display = "none";
  mostrarPregunta();
});
