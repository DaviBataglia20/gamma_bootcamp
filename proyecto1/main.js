/* TODOS ELEMENTOS QUE VAN A SER UTILIZADOS */
const puntuacionJugador1 = document.querySelector(".contador>div:first-child>p:last-child")
const puntuacionJugador2 = document.querySelector(".contador>div:last-child>p:last-child");
const butonJugador1 = document.getElementById("jugador1Buton")
const butonJugador2 = document.getElementById("jugador2Buton")
const resetear = document.querySelector(".botones>button:last-child")
const selectPuntosMaximos = document.getElementById("maximaPuntuacion")
/* TODOS ELEMENTOS QUE VAN A SER UTILIZADOS */

/* Puntuacion Maxima Minima */
let maximaPuntuacion = 3;
/* Puntuacion Maxima Minima */

/* Funcion de Sumar Puntos */

const sumarPuntos = (JugadorPuntuacion) =>{
    let puntoJugador = parseInt(JugadorPuntuacion.textContent)
    puntoJugador++;
    JugadorPuntuacion.textContent = puntoJugador;
}

/* Funcion de Sumar Puntos */

/* Desactivar botones */
const desactivarBotones = () =>{
    let puntoJugador1 = parseInt(puntuacionJugador1.textContent)
    let puntoJugador2 = parseInt(puntuacionJugador2.textContent)
    if (puntoJugador1 >= maximaPuntuacion || puntoJugador2 >= maximaPuntuacion) {
        butonJugador1.disabled = true;
        butonJugador2.disabled = true;
      }
}
/* Desactivar botones */

/* Eventos */

butonJugador1.addEventListener("click", () => {
    sumarPuntos(puntuacionJugador1);
    desactivarBotones();
})
butonJugador2.addEventListener("click", () => {
    sumarPuntos(puntuacionJugador2);
    desactivarBotones();
})

resetear.addEventListener("click",() =>{
    puntuacionJugador1.textContent = 0;
    puntuacionJugador2.textContent = 0;
    butonJugador1.disabled = false;
    butonJugador2.disabled = false;
})

selectPuntosMaximos.addEventListener("change", () => {
    maximaPuntuacion = parseInt(selectPuntosMaximos.value);
    desactivarBotones();
})