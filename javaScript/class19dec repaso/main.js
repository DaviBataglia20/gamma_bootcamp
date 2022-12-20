/*EJERCICIO 1*/

/* const imSum = (arr) =>{
    result = 0;
    for(i of arr){
        if(arr[i] %2 !==0){
            result += arr[i]
        }  
    }
    console.log(`la suma de los numeros impares es igual a ${result}`)
}

max = parseInt(prompt("hasta que numero quieres que le sumemos  los impares"))
const arr = Array.from(Array(max).keys());
imSum(arr);
 */

/* EJERCICIO 1 */

/* EJERCICIO 2 */

/* const detraspalante = (arr) =>{
    reversed = arr.reverse();
    console.log(reversed)
    for(i of reversed ){
        console.log(i);
    }
}
max = parseInt(prompt("hasta que numero quieres que le sumemos  los impares"))
const arr = Array.from(Array(max).keys());
detraspalante(arr); */

/* EJERCICIO 2 */

/* EJERCICIO 3 */

/* const saltos = (arr,num) =>{
    for(i = 0 ; i < arr.length ; i += num){
        console.log(arr[i]);
    }
}
const arr = ["apple", "orange", "banana", "mango", "watermelon", "grape", "peach"];
const num = 1;
saltos(arr,num) */

/* EJERCICIO 3 */

/* EJERCICIO DEMO */

/* Crea una función que reciba un array de strings y que devuelva un nuevo array con las palabras que estén en plural. 
Nota: todas las palabras en plural terminarán en "s". */

/* const onlyPlural = (arr) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].lastIndexOf('s') === arr[i].length- 1 || arr[i].lastIndexOf('S') === arr[i].length-1) {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  }
 */

/* const onlyPlural = (arr) => {
    let newArray = [];
    for (i of arr) {
      if (i.endsWith("s")|| i.endsWith("S")) {
        newArray.push(i);
      }
    }
    return newArray;
  } */




const onlyPlural = (arr) => {
    return arr.filter(word => word.toLowerCase().endsWith("s"));
  }
  


arr = ["mesa","mesas","coche","coches","laptop","laptops","estudiante","estudiantes","ordenador","ordenadores"];
console.log(onlyPlural(arr)); 

/* EJERCICIO DEMO */



