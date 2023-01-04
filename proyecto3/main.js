/* OBTENER CON LO QUE SE VA A JUGAR */
const ciudad = document.querySelector("#ciudades");
const numNigths = document.querySelector("#numeroNoches");
const numCar = document.querySelector("#numeroAlquiler");
const calButton = document.querySelector("#calcular");
const precioFinal = document.querySelector("#precioTotal");
numNigths.addEventListener("change", costeHotel = () => {
   let numeroDeNoches = parseInt(numNigths.value)
   precioTotalNoches = 140 * numeroDeNoches;
})


ciudad.addEventListener("change", costeAvion = () => {
    ciudadElegida = ciudad.value;
    if(ciudadElegida == "Barcelona"){
        precioDelVuelo = 90;
        if(numNigths.value >= 3){
            precioDelVuelo = precioDelVuelo - (precioDelVuelo * .10)

        }
    }else if(ciudadElegida == "Madrid"){
        precioDelVuelo = 90;
        if(numNigths.value >= 3){
            precioDelVuelo = precioDelVuelo - (precioDelVuelo * .10)

        }
    }else if(ciudadElegida == "Sevilla"){
        precioDelVuelo = 50;
        if(numNigths.value >= 3){
            precioDelVuelo = precioDelVuelo - (precioDelVuelo * .10)

        }
    }else if(ciudadElegida == "Valencia"){
        precioDelVuelo = 40;
        if(numNigths.value >= 3){
            precioDelVuelo = precioDelVuelo - (precioDelVuelo * .10)

        }
    }
    console.log(ciudadElegida,precioDelVuelo)
})
numCar.addEventListener("change", costeCoche = () =>{
    numeroDiasAlquilerCoche = parseInt(numCar.value);
    precioDelVuelo = 40 * numeroDiasAlquilerCoche;
    if(numeroDiasAlquilerCoche>= 7){
        precioDelVuelo = (40 * numeroDiasAlquilerCoche)  - 50;
    }else if(numeroDiasAlquilerCoche >= 3){
        precioDelVuelo = 40 * numeroDiasAlquilerCoche  - 20;

    }
})

const calcularCoste = () =>{
    let costeHotel = costeHotel();
    let costeAvion = costeAvion();
    let costeCoche = costeCoche();
    preciosSumados = costeHotel + costeAvion + costeCoche
    precioFinal.innerText = `Coste : ${preciosSumados}€`
}

/* llama a la funcion de calcular */
calButton.addEventListener("submit",() =>{
    calcularCoste();
})
