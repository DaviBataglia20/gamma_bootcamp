/* EJERCICIO FUNCIONES ESCRITURA ACTUALIZADA */
    /* EJERCICIO 1 */
/* let hola = nombre => console.log(nombre);
hola("Hola Mundo") */
    /* EJERCICIO 1 */

    /* EJERCICIO 2 */
/* let alcuadrado = num => num * num;
console.log(alcuadrado(2)) */
    /* EJERCICIO 2 */

    /* EJERCICIO 3 */
/* let saludo = nombre => console.log(`hi, ${nombre}`);
saludo("Davi"); */
    /* EJERCICIO 3 */

    /* EJERCICIO 4 */
/* let area = (altura,anchura) => altura * anchura ;
console.log(area(10,20)); */
    /* EJERCICIO 4 */
/* EJERCICIO FUNCIONES ESCRITURA ACTUALIZADA */

/* EJERCICIO ARRAYS METHODS */
    /* EJERCICIO 1 */
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland', 'España'];
countries.forEach(country => console.log(country))
    /* EJERCICIO 1 */

    /* EJERCICIO 2 */
const names = ['Carlos', 'María', 'Isidro', 'Cristina'];
names.forEach( nombre => console.log(nombre));
    /* EJERCICIO 2 */

    /* EJERCICIO 3 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(numeros => console.log(numeros));
    /* EJERCICIO 3 */

    /* EJERCICIO 4 */
const up = countries.map(country => country.toUpperCase());
console.log(up);
    /* EJERCICIO 4 */

    /* EJERCICIO 5 */
const  howLong = countries.map(country => country.length);
console.log(howLong);
    /* EJERCICIO 5 */

    /* EJERCICIO 6 */
const alcuadrado = numbers.map( num => num * num);
console.log(alcuadrado);
    /* EJERCICIO 6 */

    /* EJERCICIO 7 */
const upNombres = names.map( nombre => nombre.toUpperCase());
console.log(upNombres);
    /* EJERCICIO 7 */

    /* EJERCICIO 8 */
    const products = [
        { product: 'banana', price: 3 },
        { product: 'mango', price: 6 },
        { product: 'potato', price: ' ' },
        { product: 'avocado', price: 8 },
        { product: 'coffee', price: 10 },
        { product: 'tea', price: '' },
      ];
const precios = products.forEach(precio => console.log(precio.price))
     /* EJERCICIO 8 */

     /* EJERCICIO 9 */
const tieneLand = countries.filter(country => country.includes("land"));
console.log(tieneLand)
     /* EJERCICIO 9 */

     /* EJERCICIO 10 */
const countryLong = countries.filter( country => country.length > 6 );
console.log(countryLong);
     /* EJERCICIO 10 */
    
     /* EJERCICIO 11 */
const letraE = countries.filter(pais => pais[0] === "E")
console.log(letraE);
     /* EJERCICIO 11 */

     /* EJERCICIO 12 */
const precioMayor = products.filter(precio => precio.price > 6);
console.log(precioMayor)
/* console.log(precioMayor) */
     /* EJERCICIO 12 */

     /* EJERCICIO 13 */
arr = [1 , 2 ,4 ,"davi",5 ,6 ,"carlos"]
const getStringList = (arr) =>{ return arr.filter( str => typeof str ==="string")}
console.log(getStringList(arr))
     /* EJERCICIO 13 */
     
     /* EJERCICIO 14 */
let suma1 = numbers.reduce((acc,num) => acc + num)
console.log(suma1)
     /* EJERCICIO 14 */

     /* EJERCICIO 15 */
let suma = numbers.reduce((acc,num) => acc - num)
console.log(suma)
     /* EJERCICIO 15 */
     





