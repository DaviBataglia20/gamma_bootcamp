let sentence = "JavaScript no es tan dificíl como me había dicho Dani ..."
console.log(sentence);
console.log(sentence.length);

let May = sentence.toUpperCase() ;
let Min = sentence.toLowerCase() ;

console.log(May);
console.log(Min) ;
let js = sentence.slice("0","10");

console.log(js);

let profe = sentence.slice("49","53")

console.log(profe);
console.log(sentence.includes("script"))

let rep = sentence.replace("JavaScript","Phyton");
let rep1 = rep.replace("Dani", "Alfredo");

console.log(rep1);

console.log(sentence.charAt(4));
console.log(sentence.indexOf("a"));
console.log(sentence.lastIndexOf("a"));
console.log(sentence.indexOf("z"));

let doubts = sentence + "pero todavía es pronto para saberlo" ;
let longitud = sentence.length ;
console.log(sentence.charAt(longitud-1));

let name1 = "John" ;
let name2 = "Anna" ;
let long1 = name1.length ;
let long2 = name2.length ;

console.log(long1 === long2);

let bothNames = name1.concat(name2);
let finalLong = bothNames.length ;

console.log(finalLong === (long1 + long2));
console.log(long1 > long2 || long2 > long1) ;







