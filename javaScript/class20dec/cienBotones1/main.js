const section = document.querySelector("section");

section.style = `box-sizing:content-box;
                 width: 100%;
                 display: flex;
                 flex-wrap: wrap;
                 justify-content: flex-start;
                 gap:10px;`


for(i = 0 ; i <= 100 ; i++){
    const div = document.createElement("div");
    div.classList.add('hola')
    div.innerText = `${i}`;

    if(i %2 === 0){
        div.style.background = 'green'
    }else if(i %2 !== 0){
        div.style.background = 'blue' 
    }
    
    section.appendChild(div);
}
