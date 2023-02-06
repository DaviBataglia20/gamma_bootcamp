const bolita2 = document.querySelector(".bolita2")
const bolita3 = document.querySelector(".bolita3")
const bolita4 = document.querySelector(".bolita4")
const linea = document.querySelector(".linea")
console.log(linea)
const botonNext = document.querySelector(".boton2");
const botonPrev = document.querySelector(".boton1");
contador = 0;
console.log(contador)
const nextAdd = () =>{
    if(contador === 0){
        linea.classList.add('width30')
        bolita2.classList.add("bolitaAzul")
        contador++
    }else if(contador === 1){
        bolita3.classList.add("bolitaAzul")
        linea.classList.add('width70')
        contador++
    }else if(contador === 2){
        linea.classList.add('width100')
        bolita4.classList.add("bolitaAzul")
        contador++

    }
}
const prevRemove = () =>{
    if(contador === 3){
        linea.classList.remove('width100')
        bolita4.classList.remove("bolitaAzul")
        contador--
    }else if(contador === 2){
        bolita3.classList.remove("bolitaAzul")
        linea.classList.remove('width70')
        contador--
    }else if(contador === 1){
        linea.classList.remove('width30')
        bolita2.classList.remove("bolitaAzul")
        contador--

    }
}
botonNext.addEventListener("click",nextAdd)
botonPrev.addEventListener("click",prevRemove)