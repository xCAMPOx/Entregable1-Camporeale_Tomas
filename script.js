// Declaración de variables y arrays
const preguntas = [
    {
      pregunta: "¿Cuál es la capital de Francia?",
      opciones: { A: "Madrid", B: "París", C: "Roma" },
      respuestaCorrecta: "B"
    },
    {
      pregunta: "¿Qué lenguaje se usa para la web?",
      opciones: { A: "JavaScript", B: "Python", C: "C++" },
      respuestaCorrecta: "A"
    },
    {
      pregunta: "¿Cuántos días tiene una semana?",
      opciones: { A: "5", B: "7", C: "10" },
      respuestaCorrecta: "B"
    },
    {
      pregunta: "¿Cuál es el planeta más grande del sistema solar?",
      opciones: { A: "Júpiter", B: "Tierra", C: "Saturno" },
      respuestaCorrecta: "A"
    },
    {
      pregunta: "¿Qué instrumento tiene cuerdas?",
      opciones: { A: "Piano", B: "Batería", C: "Guitarra" },
      respuestaCorrecta: "C"
    },
    {
      pregunta: "¿En qué continente está Egipto?",
      opciones: { A: "Asia", B: "África", C: "Europa" },
      respuestaCorrecta: "B"
    },
    {
      pregunta: "¿Cuántos colores tiene el arcoíris?",
      opciones: { A: "6", B: "7", C: "8" },
      respuestaCorrecta: "B"
    },
    {
      pregunta: "¿Cuál es el metal más liviano?",
      opciones: { A: "Oro", B: "Hierro", C: "Litio" },
      respuestaCorrecta: "C"
    },
    {
      pregunta: "¿Cuál es la fórmula del agua?",
      opciones: { A: "CO2", B: "H2O", C: "O2" },
      respuestaCorrecta: "B"
    },
    {
      pregunta: "¿Qué animal es conocido como el rey de la selva?",
      opciones: { A: "León", B: "Elefante", C: "Tigre" },
      respuestaCorrecta: "A"
    }
  ];
  
  let puntaje = 0;
  
  // Función principal del juego
  function iniciarJuego() {
    console.clear();
    alert("Bienvenido al juego de preguntas de opción múltiple");
  
    const quiereJugar = confirm("¿Querés comenzar el juego?");
    if (!quiereJugar) {
      alert("¡Hasta la próxima!");
      return;
    }
  
    for (let i = 0; i < preguntas.length; i++) {
      const p = preguntas[i];
      const mensaje = `${p.pregunta}\nA: ${p.opciones.A}\nB: ${p.opciones.B}\nC: ${p.opciones.C}`;
      const respuesta = prompt(mensaje + "\n\nEscribí A, B o C:");
  
      if (!respuesta) {
        alert("No respondiste. Seguimos con la próxima pregunta.");
        continue;
      }
  
      const respuestaUsuario = respuesta.trim().toUpperCase();
  
      if (respuestaUsuario === p.respuestaCorrecta) {
        alert("¡Correcto!");
        puntaje++;
      } else {
        alert(`Incorrecto. La respuesta correcta era ${p.respuestaCorrecta}.`);
      }
  
      console.log(`Pregunta ${i + 1}: ${p.pregunta}`);
      console.log(`Respuesta dada: ${respuestaUsuario}`);
      console.log(`Correcta: ${p.respuestaCorrecta}`);
      console.log("--------------");
    }
  
    alert(`Juego terminado. Obtuviste ${puntaje} de ${preguntas.length} puntos.`);
    console.log(`Puntaje final: ${puntaje}/${preguntas.length}`);
  }
  
  iniciarJuego();
// Llamada a la función para iniciar el juego  