/* function vocales(nombre){
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
console.log(vocales(nombre)); */

/* const vocales = nombre => {
    num = 0 ;
    for(i= 0 ; i < nombre.length ; i++){
        nombre[i] === "a"?num +=1:
        nombre[i] === "A"?num +=1:
        nombre[i] === "e"?num +=1:
        nombre[i] === "E"?num +=1:
        nombre[i] === "i"?num +=1:
        nombre[i] === "I"?num +=1:
        nombre[i] === "o"?num +=1:
        nombre[i] === "O"?num +=1:
        nombre[i] === "u"?num +=1:
        nombre[i] === "U"?num +=1:null;
        }
    return console.log(`la cantidad de vocales en esta palabra es ${num}`) 
}
nombre = prompt("escribe algo")
vocales(nombre); */

const vocales = nombre => {
    num = 0 ;
    for(let i of nombre){
        if(i.toLowerCase() === "a" ||
           i.toLowerCase() === "e" ||
           i.toLowerCase() === "i" ||
           i.toLowerCase() === "o" ||
           i.toLowerCase() === "u" ){
            num +=1
        }
      /*   i.toLowerCase() === "a"?num +=1:
        i.toLowerCase() === "e"?num +=1:
        i.toLowerCase() === "i"?num +=1:
        i.toLowerCase() === "o"?num +=1:
        i.toLowerCase() === "u"?num +=1:null */
        }
    return console.log(`la cantidad de vocales en esta palabra es ${num}`) 
}
nombre = prompt("escribe algo")
vocales(nombre);

/* Crea una función que acepte un string y devuelva el número de vocales que tiene el string. */

/*EL MEJOR SUMADOR DE VOCALES DEL MUNDO*/
/* UN PROYECTO CREADO POR DAVI BATAGLIA */
       
/* const vocales = nombre => {
    soloVocales = nombre.match(/[aeiou]/ig).join("");
    num = 0 ;
    for(let i of soloVocales){
       num +=1
        }
    return console.log(`la cantidad de vocales en esta palabra es ${num}`) 
}
nombre = prompt("escribe algo")
vocales(nombre); */



