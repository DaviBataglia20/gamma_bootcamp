/* EJERCICIO 1.1 */
/* let arr = [];
console.log(arr); */
/* EJERCICIO 1.1 */

/* EJERCICIO 1.2 */
/* let arr = ["string" , 3 , true];
console.log(arr); */
/* EJERCICIO 1.2 */

/* EJERCICIO 1.3 */
/* let arr = [];
arr.push("string" ,  "string2");
arr.unshift("str-2" , "str-1");
arr.pop();
arr.shift();
console.log(arr);
 */
/* EJERCICIO 1.3 */

/* EJERCICIO 1.4 */
/* let names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"]; */
/* console.log(names.slice(1,3));
names.splice(3,1,"Parma");
console.log(names); */
/* EJERCICIO 1.4 */

/* EJERCICIO 1.5 */
/* nombres = names.join(" ");
console.log(nombres); */
/* EJERCICIO 1.5 */

/* EJERCICIO 1.6 */
/* const sentence = "El perro de San Roque no tiene rabo";
console.log(sentence.split(" "));
console.log(sentence.split("")); */
/* EJERCICIO 1.6 */

/* EJERCICIO 2.1 */
/* const arr = ["January", "February", "Marj", "April", "Mei"] */
/* console.log(arr); */
/* console.log("CORREGIDO") */
/* arr.splice(2,1,"March");
arr.splice(4,1 ,"May") */
/* console.log(arr); */

/* EJERCICIO 2.1 */

/* EJERCICIO 2.2 */
/* let newMonths = ["June", "July", "August", "September"]; */
/* console.log(newMonths); */
/* let totalMonths = arr.concat(newMonths); */
/* console.log(arr.concat(newMonths)); */
/* EJERCICIO 2.2 */

/* EJERCICIO 2.3 */
/* totalMonths.push("October", "November", "December"); */
/* console.log(totalMonths); */
/* EJERCICIO 2.3 */

/* EJERCICIO 3 */
/*  let num1 = parseInt(prompt("escribe un numero")) ;
let num2 = parseInt(prompt("escribe un numero")) ;
let num3 = parseInt(prompt("escribe un numero")) ;
if(num1 > num2){
    totalMonths.pop();
    console.log(totalMonths);
}else if(num2 > num3 && num2 < 10){
    totalMonths.shift();
    console.log(totalMonths);
}else if(num2 > num3 || num2 > num1){
    totalMonths.push("October");
    console.log(totalMonths);
}else{
    console.log("Bad luck!");
} */

/* EJERCICIO 3 */

/* EJERCICIO 4.1 */
/* let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(arr.indexOf('Wednesday')); */
/* if(arr[2].length > arr.indexOf('Wednesday')){
    arr.reverse();
    console.log(arr);
} */
/* EJERCICIO 4.1 */

/* EJERCICIO 4.2 */
/* if(arr[0].length < arr[1].length){
    console.log(arr.slice(0, 3))
} */
/* EJERCICIO 4.2 */

/* EJERCICIO 4.3 */
/* if(arr.includes("Sunday")){
    console.log("That's nice!")
}else{
    console.log("Oh no!");
    arr.push("Sunday");
    console.log(arr);
} */
/* EJERCICIO 4.3 */

/* EJERCICIO 5 */
/* let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let newArr =[];
for(i= arr.length-1;i >= 0; i--){
     newArr.push(arr[i]);

}
console.log(newArr) */
/* let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
for(i = 1 ;i < arr.length ; i++){
    arr.unshift(arr[i]);
    arr.splice(i+1,1);

}
console.log(arr) */
/* EJERCICIO 5 */

/* EJERCICIO 6.1 */
/* let numbers = [];
for(i = 0 ; i <= 10 ; i++){
    numbers.splice(i,0,i);
    // numbers.push(i)
}
console.log(numbers); */
/* EJERCICIO 6.1 */

/* EJERCICIO 6.2 */
/* let result = 0;
for(i = 0 ; i < numbers.length ; i++){
    result += numbers[i];
    console.log(result);
} */

/* EJERCICIO 6.2 */

/* EJERCICIO 6.3 */
/* let evens = [];
let odds = [];
for(i = 0 ; i < numbers.length ; i++){
    if(numbers[i] % 2 === 0){
        evens.push(numbers[i]);
    }else{
        odds.push(numbers[i]);
    }

}
console.log(evens);
console.log(odds); */
/* EJERCICIO 6.3 */

/* EJERCICIO 7 */
const fruits = ["pera", "banana", "mandarina", "frambuesa"];
const colors = ["verde", "amarilla", "naranja", "roja"];
    for(i = 0 ; i < fruits.length ; i++){
        console.log(`La ${fruits[i]} es ${colors[i]}`);
    }
/* EJERCICIO 7 */

/* EJERCICIO 8 */
/* const array = [["David", "Fernández"], ["Ana", "García"], ["Manuel", "Herrera"]];
let newArray =[];
    for(i = 0 ; i < array.length ; i++){
        newArray.push(array[i].join(" "));
    
    }
    console.log(newArray); */
/* EJERCICIO 8 */

/* EJERCICIO 9 */
/* const grades = [5, 7, 7, 4, 8, 5, 3, 9];
    let result = 0;
for(i = 0 ; i < grades.length ; i++){
    result += grades[i];
}
console.log(result)
let final = result / grades.length;
console.log(final) */
/* EJERCICIO 9 */


