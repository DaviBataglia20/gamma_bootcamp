const arrEnla =[
    "https://es.wikipedia.org/wiki/Generaci%C3%B3n_del_27",
    "https://es.wikipedia.org/wiki/Albert_Einstein",
    "https://es.wikipedia.org/wiki/John_Maynard_Keynes",
    "https://es.wikipedia.org/wiki/Marie_Curie",
    "https://es.wikipedia.org/wiki/Luis_Bu%C3%B1uel",
    "https://es.wikipedia.org/wiki/Rafael_Alberti",
    "https://es.wikipedia.org/wiki/Salvador_Dal%C3%AD"
    ]
/* instruccion 1 */

const deleteH2 = document.getElementById("subtitle");
deleteH2.remove()

/* instruccion 1 */

/* instruccion 2 */

const boldSpan = document.querySelectorAll(".bold");
console.log(boldSpan);
boldSpan.forEach(element => element.style.fontWeight="bold");

/* instruccion 2 */

/* instruccion 3 */

const italicSpan = document.querySelectorAll(".italics");
console.log(italicSpan);
italicSpan.forEach(element => element.style.fontStyle="italic");

/* instruccion 3 */

/* instruccion 4 */
const arrLi = ["Introducción", "Biografía", "Obras"]
const ul = document.querySelector("#index>ul");
arrLi.forEach((element) =>{
    const li = document.createElement("li");
    li.innerText = `${element}`
    ul.appendChild(li)
})
/* instruccion 4 */

/* instruccion 5*/

const secLi = document.querySelectorAll(".works-article>ul>li");
console.log(secLi);
secLi.forEach((element =>{
    element.classList.add("work-item");
}))

/* instruccion 5*/

/* instruccion 6*/

const enlaces = document.querySelectorAll("a")
console.log(enlaces)
enlaces.forEach((element,currentValue) =>{
    for(i = 0 ; i < currentValue ; i++){
    }
    element.src=`${arrEnla[i]}`;
})

/* instruccion 6*/