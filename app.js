// -------------------------------------
// Gestión de pestañas (NO MODIFICAR)
// -------------------------------------

const tabButtons = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".panel");

for (const button of tabButtons) {
  button.addEventListener("click", function () {
    const targetId = button.dataset.tab;

    for (const tabButton of tabButtons) {
      tabButton.classList.remove("active");
    }

    for (const panel of panels) {
      panel.classList.remove("active");
    }

    button.classList.add("active");
    document.getElementById(targetId).classList.add("active");
  });
}

// -------------------------------------
// 1. Adivina el número
// -------------------------------------

// TODO: Variables del juego
const inputNumero = document.querySelector("#inputNumero");
const btnComprobarNumero = document.querySelector("#btnComprobarNumero");
const btnReiniciarNumero = document.querySelector("#btnReiniciarNumero");
const mensajeNumero = document.querySelector("#mensajeNumero");
const intentosNumero = document.querySelector("#intentosNumero");
let numAdivinar;
let intentos = 0;
const almacenNumeros = [];
generarNumero();

// TODO: Funciones del juego
function reiniciarIntentos() {
  intentos = 0;
}
function generarNumero() {
  numAdivinar = Math.ceil(Math.random() * 100);
  while (almacenNumeros.includes(numAdivinar)) {
    generarNumero();
  }
  almacenNumeros.push(numAdivinar);
}
// TODO: Eventos del juego
btnReiniciarNumero.addEventListener("click", () => {
  generarNumero();
  reiniciarIntentos();
  intentosNumero.textContent = intentos;
  mensajeNumero.textContent = "";
  intentosNumero.textContent = "";
});
btnComprobarNumero.addEventListener("click", () => {
  intentos++;
  if (inputNumero.value < 0 || inputNumero.value > 100) {
    mensajeNumero.textContent = "Numero no válido";
  } else {
    if (inputNumero.value == numAdivinar) {
      mensajeNumero.textContent = "Felicidades, has adivinado";
    } else if (inputNumero.value < numAdivinar) {
      mensajeNumero.textContent = "El número a adivinar es mayor ";
      if (numAdivinar - inputNumero.value > 20) {
        mensajeNumero.textContent += "Frío, frío";
      } else if (numAdivinar - inputNumero.value >= 10) {
        mensajeNumero.textContent += "Caliente! Caliente";
      }
    } else if (inputNumero.value > numAdivinar) {
      mensajeNumero.textContent = "El número a adivinar es menor ";
      if (inputNumero.value - numAdivinar > 20) {
        mensajeNumero.textContent = "Frío, frío";
      } else if (inputNumero.value - numAdivinar >= 10) {
        mensajeNumero.textContent = "Caliente! Caliente";
      }
    } else {
      mensajeNumero.textContent = "Lo tienes!";
    }
    intentosNumero.textContent = intentos;
  }
});

// -------------------------------------
// 2. Siete y medio
// -------------------------------------

// TODO: Variables del juego
const puntuacionJugador = document.querySelector("#puntuacionJugador");
const puntuacionMaquina = document.querySelector("#puntuacionMaquina");

const btnPedirCarta = document.querySelector("#btnPedirCarta");
const btnPlantarse = document.querySelector("#btnPlantarse");
const btnNuevaPartidaSiete = document.querySelector("#btnNuevaPartidaSiete");

const mensajeSiete = document.querySelector("#mensajeSiete");

const ultimaCartaJugador = document.querySelector("#ultimaCartaJugador");
const ultimaCartaMaquina = document.querySelector("#ultimaCartaMaquina");

const carts = [
  {
    valor: 1,
    nombre: "Uno",
  },
  {
    valor: 2,
    nombre: "Dos",
  },
  {
    valor: 3,
    nombre: "Tres",
  },
  {
    valor: 4,
    nombre: "Cuatro",
  },
  {
    valor: 5,
    nombre: "Cinco",
  },
  ,
  {
    valor: 6,
    nombre: "Seis",
  },
  {
    valor: 7,
    nombre: "Siete",
  },
  {
    valor: 0.5,
    nombre: "Sota",
  },
  {
    valor: 0.5,
    nombre: "Caballo",
  },
  {
    valor: 0.5,
    nombre: "Rey",
  },
];

// TODO: Funciones del juego

function finPartida() {
  return Number(puntuacionJugador.textContent) > 7.5;
}

function actualizarCartas(jugador) {
  ultimaCartaJugador.textContent = carts[jugador].nombre;
}
// TODO: Eventos del juego
btnPedirCarta.addEventListener("click", () => {
  //JUGADOR
  let numeroAleatorio = Math.floor(Math.random() * 9);
  puntuacionJugador.textContent =
    Number(puntuacionJugador.textContent) + carts[numeroAleatorio].valor;

  actualizarCartas(numeroAleatorio);
  if (finPartida()) {
    mensajeSiete.textContent = "La máquina ha ganado";
  }
});
btnPlantarse.addEventListener("click", () => {
  console.log(Number(puntuacionMaquina.textContent));
  while (Number(puntuacionMaquina.textContent) < 6) {
    let numeroAleatorio = Math.floor(Math.random() * 9);
    puntuacionMaquina.textContent =
      Number(puntuacionMaquina.textContent) + carts[numeroAleatorio].valor;
    ultimaCartaMaquina.textContent = carts[maquina].nombre;
  }

  if (
    Math.abs(Number(puntuacionJugador.textContent) - 7.5) ===
    Math.abs(Number(puntuacionMaquina.textContent) - 7.5)
  ) {
    mensajeSiete.textContent = "Empate";
  } else if (
    Math.abs(Number(puntuacionJugador.textContent) - 7.5) <
    Math.abs(Number(puntuacionMaquina.textContent) - 7.5)
  ) {
    mensajeSiete.textContent = "Ha ganado el jugador";
  } else {
    mensajeSiete.textContent = "Ha ganado la maquina";
  }
});

btnNuevaPartidaSiete.addEventListener("click", () => {
  puntuacionJugador.textContent = "0";
  puntuacionMaquina.textContent = "0";
  ultimaCartaJugador.textContent = "";
  ultimaCartaMaquina.textContent = "";
});

// -------------------------------------
// 3. Piedra, papel o tijera
// -------------------------------------

// TODO: Variables del juego

// TODO: Funciones del juego

// TODO: Eventos del juego
