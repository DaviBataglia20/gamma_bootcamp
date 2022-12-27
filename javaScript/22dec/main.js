const header = document.getElementById("header");
const header1 = document.getElementsByClassName("header")
const header2 = document.querySelector(".header");
const header3 = document.querySelectorAll(".header");
console.log(header);
console.log(header1)
console.log(header2);
console.log(header3)
console.log(header.innerText);
header.innerText ="cabecera";
console.log(header.innerText);
header.style =`background-color:red`
console.log(header.classList);
header.classList.remove("header");
header.classList.add("header");
header.classList.add("back")
console.log(header.classList);
header.innerHTML ="<h3>Esta es la Cabecera</h3>";
