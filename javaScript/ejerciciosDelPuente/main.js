/* EJERCICIO 1 */
/* let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;
if(angulo1 + angulo2 + angulo3 == 180){
    console.log("el triangulo es valido");
    if(angulo1 < 90 && angulo2 < 90 && angulo3 < 90){
        console.log("el triangulo es acutángulo")
    
    }else if(angulo1 > 90 && angulo2 < 90 && angulo3 < 90){
        console.log("el triangulo es uno obtusangulo");
    }else if(angulo2 > 90 && angulo1 < 90 && angulo3 < 90){
        console.log("el triangulo es uno obtusangulo");
    }
    else if(angulo3 > 90 && angulo1 < 90 && angulo2 < 90){
        console.log("el triangulo es uno obtusangulo");
    }else if(angulo1 == 90 && angulo2 + angulo3 == 90){
        console.log("el triangulo es uno rectangulo");
    }else if(angulo2 > 90 && angulo1 + angulo3 == 90){
        console.log("el triangulo es uno rectangulo");
    }else if(angulo3 > 90 && angulo1 + angulo2 == 90){
        console.log("el triangulo es uno rectangulo");
    }
    else{
        console.log("todo esta mal");
    }
}else{
    console.log("el triangulo no es valido");
} */
/* EJERCICIO 1 */

/* EJERCICIO 2 */
/* let nota = 94;
switch (true) {
    case 0 < nota && nota <= 59:
        console.log("Suspenso");
        break;
    case 60 <= nota && nota <= 79:
        console.log("Aprobado");
        break;
    case 80 <= nota && nota <= 89:
        console.log("Notable");
        break;
    case 90 <= nota && nota <= 100:
        console.log("Sobresaliente");
        break;
    default:
        console.log("Formato de nota incorrecto");
        break;
} */
/* EJERCICIO 2 */

/* EJERCICIO 3 */
/* let language = prompt("en que lengua quieres?");
let es = "Hola mundo!";
let fr = " Bonjour tout le monde!";
let en = "Hello World!";
let de = "Hallo Welt!"
switch (true) {
    case language == "español":
        alert(es);
        break;
    case language == "frances":
        alert(fr);
        break;
    case language == "ingles":
        alert(en);
        break;
    case language == "aleman":
        alert(de);
        break;
    default:
        alert("Sorry, language not available")
        break;
} */
/* EJERCICIO 3 */

/* EJERCICIO 4 */
/* let age = parseInt(prompt("di tu edad"));
let nat = prompt("di tu nacionalidad");
if(age >= 16 && nat == "brasileño"){
    alert("si puede votar en las elecciones")
}else if ( age >= 18 && nat == "español"){
    alert("si puede votar en las elecciones")
}else{
    alert("no se puede votar en las elecciones")
}
 */
/* EJERCICIO 4 */

/* EJERCICIO 5 */
/* let str = prompt("escribe una palabra");
let typ = typeof[str];
let vocal = "s";
let conso = "es";
switch (true) {
    case str.slice(-1) == "a" || str.slice(-1) == "e" || str.slice(-1) == "i" || str.slice(-1) == "o" || str.slice(-1) == "u":
        alert(str.concat(vocal));
        break;
    case typ !== typeof[str] : 
        alert("Input inválido: sólo se aceptan strings");
        break;
    case str == "crisis" || str == "tesis" || str == "bíceps" || str == "tórax" :
    alert("El plural coincide con el singular");
        break;
    case str.slice(-1) == "s":
        alert("Esta palabra ya está en plural");
        break;
    case str == "sed" || str == "salud" || str == "caos" :
        alert("Esta palabra no tiene forma plural");
        break;
    default:
        alert(str.concat(conso));
        break;
} */
/* EJERCICIO 5 */

/* EJERCICIO 6 */
/* let str = prompt("escribe dos palabras");
if (str.includes(" ")) {
   console.log(str.replaceAll(" ",""));
    
} */
/* EJERCICIO 6 */

/* EJERCICIO 7 */
/* let str = prompt("escribe algo")
console.log(str);
console.log(str.split(''));
let splitStr = str.split('');
let reversedArr = splitStr.reverse();
console.log(reversedArr);
let reversedStr = reversedArr.join('');
console.log(reversedStr); */
/* EJERCICIO 7 */

/* EJERCICIO 8 */
/* let str = prompt("escribe algo")
console.log(str);
console.log(str.split(''));
let splitStr = str.split('');
let reversedArr = splitStr.reverse();
console.log(reversedArr);
let reversedStr = reversedArr.join('');
console.log(reversedStr);
if(str == reversedStr){
    console.log("la palabra es un palíndromo");
}else{
    console.log("la palabra no es un palíndromo");
} */
/* EJERCICIO 8 */

/* EJERCICIO 9 */
/* let str = prompt("Escribe una palabra");
let firstElement = str[0];
let lastElement = str[str.length-1];
let upperF = firstElement.toUpperCase();
let upperL = lastElement.toUpperCase();
let sliceStr = str.slice(1,str.length-1);
let finalStr = upperF+sliceStr+upperL;
console.log(finalStr); */
/* EJERCICIO 9 */

/* EJERCICIO 10 */
/* let str = prompt("escribe tu direccion de email");
if(str.includes('@')){
    indexStr = str.indexOf('@')
    finalStr = str.slice(indexStr,str.length);
    console.log(finalStr);
}else{
    console.log("Dirección de correo incorrecta");
} */
/* EJERCICIO 10 */

/* EJERCICIO 11 */
/* let num = parseInt(prompt("escribe un numero"));
for (i = 0 ; i <= num ; i++){
    divisor2 = 2 ;
    divisor3 = 3 ;
    divisor5 = 5 ;
    divisor7 = 7 ;
    divisor11 = 11;
    div2 = i / 2 ;
    div3 = i / 3;
    div5 = i / 5;
    div7 = i / 7;
    div11 = i / 11;
    if (div2 === Math.floor(div2)){
        if(divisor2 === i){
        console.log(`el numero ${i} es primo`);
        }else{
            console.log(`el numero ${i} no es primo`);
        }
    }else if (divisor2 > div2){
        console.log(`el numero ${i} es primo`);
    }else if (div3 === Math.floor(div3)){
        if(divisor3 === i){
            console.log(`el numero ${i} es primo`);
        }else{
            console.log(`el numero ${i} no es primo`);
        }
    }else if (divisor3 > div3){
        console.log(`el numero ${i} es primo`);
    }else if (div5 === Math.floor(div5)){
        if(divisor5 === i){
            console.log(`el numero ${i} es primo`);
        }else{
            console.log(`el numero ${i} no es primo`);
        }
    }else if (divisor5 > div5){
        console.log(`el numero ${i} no es primo`);
    }
    else if (div7 === Math.floor(div7)){
        if(divisor7 === i){
            console.log(`el numero ${i} es primo`);
        }else{
            console.log(`el numero ${i} no es primo`);
        }
    }else if (divisor7 > div7){
        console.log(`el numero ${i} es primo`);
    }else if (div11 === Math.floor(div11)){
        if(divisor11 === i){
            console.log(`el numero ${i} es primo`);
        }else{
            console.log(`el numero ${i} no es primo`);
        }
    }else if (divisor11 > div11){
        console.log(`el numero ${i} es primo`);
    }else{
        console.log("Que locuraaaaa");
    }
} */
/* EJERCICIO 11 */

/* EJERCICIO 12 */
/* let num = 25;
for (i = 1; num >0; i++){
    if(i %2 === 0){
        num -=2;
    }else{
        num -=3;
    }
    console.log(num);
}
console.log(`Tardas ${i} dias en comerlas`) */
/* EJERCICIO 12 */

/* EJERCICIO 13 */
/* for(i = 1 ; i < 100; i++){
    i +=2;
    console.log(i)
} */
/* EJERCICIO 13 */

/* EJERCICIO 14 */
/* for(i= 0 ; i < 3;i++){
    console.log(`Índice del bucle externo : ${i}`);
      for(j = 0 ; j < 5; j++){
        console.log(`Bucle interno: ${j}`);
    }


} */
/* EJERCICIO 14 */

/* EJERCICIO 15 */
/* for(i= 0 ; i < 6;i++){
      for(j = 0 ; j < 10; j++){
        console.log(`${i} : ${j}`);
    }


} */
/* EJERCICIO 15 */

/* EJERCICIO 16 */
/* let str = prompt("escribe una palabra");
let letter = prompt("escribe una letra");
let letter1 = str.indexOf(letter);
if(str.includes(letter)){
    for(i = 0 ; i < letter1 ; i++ ){
        console.log(str[i])
    }
}else{
    console.log("La palabra no contiene dicha letra")
} */
/* EJERCICIO 16 */

/* EJERCICIO 17 */
let str = prompt("escriba una palabra");
let typ = typeof(str);
let num = 2;
let typnum = typeof(num);
if(typ === typnum){
    console.log("Input inválido")
}else{
    for(i = 0 ; i < str.length ; i++){
        console.log(str[i]);
        if(i %1 === 0){
            console.log("ciclo")
        }
    }
    }
