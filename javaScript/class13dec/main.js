/* EJERCICIO 1 */
function hola(){
    return "Hello World"
}
console.log(hola());
/* EJERCICIO 1 */

/* EJERCICIO 2 */
function cuadrado(num){
    return num * num ;
}
console.log(cuadrado(7))
/* EJERCICIO 2 */

/* EJERCICIO 3 */
function saludo(nombre){
    return "hi, " + nombre ;
}
nome = prompt("escribe un nombre");
console.log(saludo(nome));
/* EJERCICIO 3 */

/* EJERCICIO 4 */
    function area(area1 = 5, area2 = 3){
        return area1 * area2 ;
    }
    console.log(area(6,3));
/* EJERCICIO 4 */

/* EJERCICIO 5 */
    function convert(celsiun = 0){
        let Fahrenheit = celsiun * 1.8 + 32;
        return Fahrenheit ;
    }
celsiun = parseInt(prompt("nos di un grado"));
console.log(convert(celsiun));

/* EJERCICIO 5 */

/* EJERCICIO 6 */
    function vocales(nombre){
        num = 0 ;
        for(i= 0 ; i < nombre.length ; i++){
            switch (true) {
                case nombre[i] == "a" || nombre[i] == "A":
                    num += 1;
                    break;
                case nombre[i] == "e" || nombre[i] == "E":
                    num += 1;
                    break;
                case nombre[i] == "i" || nombre[i] == "I":
                    num += 1;
                    break;
                case nombre[i] == "o" || nombre[i] == "O":
                    num += 1;
                    break;
                case nombre[i] == "u" || nombre[i] == "U":
                    num += 1;
                    break;
                default:
                    num += 0;
                    break;
            }
        }
        return num
    }
nombre = prompt("escribe algo")
console.log(vocales(nombre));
/* EJERCICIO 6 */

/* EJERCICIO 7 */
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
let min = parseInt(prompt("escribe un numero minimo"));
let max = parseInt(prompt("escribe un numero maximo"));
console.log(getRandomArbitrary(min,max));  
/* EJERCICIO 7 */

/* EJERCICIO 8 */
function getRandomArbitrary(max) {
    return Math.floor(Math.random() * max) ;
  }
let max = parseInt(prompt("escribe un numero maximo"));
let fun = getRandomArbitrary(max);
let arr = [];
for (i = 0 ; i <= fun ; i++){
    arr.push(i);
}
console.log("ARRAY GENERADO ALEATORIAMENTE");
console.log(arr);
let arr1 = [];
for (i = 0 ; i < arr.length ; i++){
    if(arr[i] %2 === 0){
        arr1.push(arr[i]);
    }
}
console.log("NUMEROS PARES GENERADOS DEL ARRAY ALEATORIO")
console.log(arr1);
/* EJERCICIO 8 */

/* EJERCICIO 9.1 */
    function comprobar(str,arr){
        if (arr.includes(str)){
            return true
        }else{
            return false
        }
    }
let str="a";
let arr = [ 1 , 2 , 3 , "a"];
console.log(comprobar(str,arr));
/* EJERCICIO 9.1 */

/* EJERCICIO 9.2 */
function comprobar(str,arr){
    if (arr.includes(str)){
        return true
        
    }else{
        return false
    }
}
str = prompt("escribe una letra")
let arr = [ 1 , 2 , str ,4 , 5, str];
function eliminar(str,arr){
    if(comprobar(str,arr) === true){
        for(i = 0 ; i < arr.length ; i++){
            if(typeof arr[i] === "string" ){
                arr.splice(i,1,)
            }

        }
        console.log(arr)
    }
}
eliminar(str,arr);
/* EJERCICIO 9.2 */

/* EJERCICIO 10 */
data = ["a","b","c"];
const convert = data =>{
     typeof data === "string"?console.log(data.split("")):
     typeof data === "object"?console.log(data.join("")):
     typeof data === "number"?console.log(data.toString()):false
}
convert(data)

/* EJERCICIO 10 */

/* EJERCICIO 11 */
    




