/* EJERCICIO 1 */
/* for(let i = 0 ; i < 10 ; i++) {
    console(i);
} 
 */
/* let i = 0;

while(i < 10 ){
    i++;
    alert(i);
} */
/* EJERCICIO 1 */

/* EJERCICIO 3 */
/* let number = prompt("introduce un numero");

for(i = 0 ; i <= 10 ; i++){
    console.log(number + "x" + i , "="  ,(number * i));

} */
/* EJERCICIO 3 */

/* EJERCICIO 4 */
/* let number = prompt("introduce un numero");

for(i = 0 ; i<=10 ; i++){
    console.log(number**i);
} */
/* EJERCICIO 4 */

/* EJERCICIO 5 */
/* let  number = 0;
for(i = 0 ; i <= 5 ; i++){
    number+= i ;
}
console.log(number); */

/* EJERCICIO 5 */

/* EJERCICIO 6 */
/* let  number = 1;

for(i = 1 ; i <= 10 ; i++){
    number*= i ;
}
console.log(number); */
/* EJERCICIO 6 */

/* EJERCICIO 7 */
/* let hastag = "#";
let result = "";
for(i = 0 ; i <= 10 ; i++){
    result += hastag ;
    console.log(result)    
} */
/* EJERCICIO 7 */

/* EJERCICIO 8 */
/* let number = prompt("introduce un numero")
for (i =  0; i <= number; i++) {
    if (i % 2 ===0) {
      console.log(i)
    }
  } */
/* EJERCICIO 8 */

/* EJERCICIO 9 */
/* let number = parseInt(prompt("introduce un numero"));
let pares = 0;
let impares = 0;
for(i = 0 ; i <= number ; i++){
    if (i % 2 === 0){
        pares += i
    }
    else{
        impares += i
    }
}
console.log(`pares : ${pares - 2000} --- impares : ${impares}`);


console.log(parseInt('3')) */
/* EJERCICIO 9 */

/* EJERCICIO 10 */
/* let number = parseInt(prompt("introduce un numero"));
    for(i=0 ;i <= number;i++){
        switch (true) {
            case i %7 === 0:
                console.log(i);
                break;
        }

    } */
 /* EJERCICIO 10 */
 
 /* EJERCICIO 11 */
/*  let str = "JavaScript"
 let num = parseInt(prompt("introduce un numero de 1 a 10"));
 let letter = prompt(("introduce una letra"));
 salida = "";
 for(i = 0 ; i <= num ; i++){
    salida+=letter;  
 }
 console.log(str.concat(salida)); */
 /* EJERCICIO 11 */

 /* EJERCICIO 12 */
/*  let str = "JavaScript"
 for (let i = 0; i < str.length; i++) {
	console.log(str[i]);
} */
 /* EJERCICIO 12 */

 /* EJERCICIO 13 */
/* let filter = "j";
let suma = 0;
let str = "jojojojojojook"
for (let i = 0; i < str.length; i++) {
    if(str.charAt(i) == filter){
        suma+= 1;
        
        
    }
}
console.log(`"la ${filter} aparece ${suma} veces en el string ${str}`); */
/* EJERCICIO 13 */

/* EJERCICIO 14 */
/* let filter = "a";
let suma = 0;
let str = "abracadabra"
for (let i = 0; i < str.length; i++) {
    if(str.charAt(i) == filter){
        result = str.replaceAll(`${filter}`,"");

        
    }
}
console.log(`"la nueva palabra es : ${result}`); */
/* EJERCICIO 14 */