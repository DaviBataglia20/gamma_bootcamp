const data = [
    { id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    { id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
    { id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    { id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
    { id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
    { id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
    { id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
    { id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
    { id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
    { id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
    { id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
    { id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
    { id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
    { id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
    { id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
    { id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
];
const button1 = document.querySelector("#ejercicio-1>button");
const body = document.querySelector("body")
button1.addEventListener("click",() =>{
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  body.style.background = bgColor;
});

const button2 = document.querySelector("#counter-btns>button");
const button3 = document.querySelector("#counter-btns>button:nth-of-type(2n)");
const count = document.querySelector("#counter");
button2.addEventListener("click",()=>{
    conv = Number(count.innerHTML);
    conv +=1;
    counts = String(conv)
    count.innerText = `${counts}`
});
button3.addEventListener("click",()=>{
    conv = Number(count.innerHTML);
    conv -=1;
    counts = String(conv)
    count.innerText = `${counts}`
});

const button4 = document.querySelector("#ejercicio-3>button");
button4.addEventListener("click", () => {
    pHide = document.querySelector("#ejercicio-3>p")
    if (pHide.style.display === "none"){
        pHide.style.display = "block";
    }
    else{
        pHide.style.display = "none";
    }
  });
const button5 = document.querySelector("#ejercicio-4>button");
const list = document.querySelector('#ejercicio-4>ul');
button5.addEventListener('click', () => {
    if (list.firstChild) {
        list.removeChild(list.firstChild);
      }
});

const art5 = document.querySelectorAll("#ejercicio-5>div");
const ul5 = document.querySelector("#ejercicio-5>ul");
const buttonLi1 = art5[0].children[1];
let flag = true;
let flag2 = true;
let flag3 = true;
let flag4 = true;
let flag5 = true;
buttonLi1.addEventListener("click",() =>{
    if (flag) {
        ul5.append(art5[0].children[0])
        flag = false;
      }
   
   
})
const buttonLi2 = art5[1].children[1];
buttonLi2.addEventListener("click",() =>{
    if (flag2) {
        ul5.append(art5[1].children[0])
        flag2 = false;
      }
   
   
})
const buttonLi3 = art5[2].children[1];
buttonLi3.addEventListener("click",() =>{
    if (flag3) {
        ul5.append(art5[2].children[0])
        flag3 = false;
      }
   
   
})
const buttonLi4 = art5[3].children[1];
buttonLi4.addEventListener("click",() =>{
    if (flag4) {
        ul5.append(art5[3].children[0])
        flag4= false;
      }
   
   
})
const buttonLi5 = art5[4].children[1];
buttonLi5.addEventListener("click",() =>{
    if (flag5) {
        ul5.append(art5[4].children[0])
        flag5= false;
      }
   
   
})
const divs = document.querySelectorAll('#square-container>div');
divs.forEach(div => {
  div.addEventListener('click', event => {
    event.target.remove();
  });
});
const addButton = document.querySelector('#ejercicio-6>button');
const cajacuadrados = document.querySelector("#square-container")
addButton.addEventListener('click', event => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('square');
  cajacuadrados.appendChild(newDiv);
});
const colorsContainer = document.querySelector(".color-div");
const containerButtons = document.querySelector("#color_btns")
const bBlue = containerButtons.children[0];
const bRed = containerButtons.children[1];
const bGreen = containerButtons.children[2];
const bBlack = containerButtons.children[3];
const bPurple = containerButtons.children[4];

bBlue.addEventListener("click",()=>{
    colorsContainer.style.background = "blue";
})
bRed.addEventListener("click",()=>{
    colorsContainer.style.background = "red";
})
bBlack.addEventListener("click",()=>{
    colorsContainer.style.background = "black";
})
bGreen.addEventListener("click",()=>{
    colorsContainer.style.background = "green";
})
bPurple.addEventListener("click",()=>{
    colorsContainer.style.background = "purple";
})
const abreCierraTexto = document.querySelector("#faq-card>p");
const abreCierraBoton = document.querySelector("#faq-title>button")
abreCierraBoton.addEventListener("click",()=>{
    if (abreCierraTexto.style.display === "none"){
        abreCierraTexto.style.display = "block";
        abreCierraBoton.innerHTML="Close"
    
    }
    else{
        abreCierraBoton.innerHTML="Open"
        abreCierraTexto.style.display = "none";
    }
})
