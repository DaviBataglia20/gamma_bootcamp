const section = document.querySelector("section");

section.style = `box-sizing:content-box;
                 width: 100%;
                 display: flex;
                 flex-wrap: wrap;
                 justify-content: flex-start;
                 gap:10px;`

const estiloDiv = `display: flex;
                   justify-content: center;
                   align-items: center;
                   font-family: sans-serif;
                   font-size: 25px;
                   color:black;
                   border:solid gray 3px;
                   border-bottom-color: black ;
                   border-right-color: black;
                   width: 5.4%;
                   min-height: 8vh;
                   background-color:red;` 
for(i = 0 ; i <= 100 ; i++){
    if(i %2 === 0){
        const div = document.createElement("div");
        div.style = `display: flex;
        justify-content: center;
        align-items: center;
        font-family: sans-serif;
        font-size: 25px;
        color:white;
        border:solid gray 3px;
        border-bottom-color: black ;
        border-right-color: black;
        width: 5.4%;
        min-height: 8vh;
        background-color:red;` 
        div.innerText = `${i}`;
        section.appendChild(div);
    }else if(i %2 !== 0){
        const div = document.createElement("div");
        div.style = `display: flex;
        justify-content: center;
        align-items: center;
        font-family: sans-serif;
        font-size: 25px;
        color:white;
        border:solid gray 3px;
        border-bottom-color: black ;
        border-right-color: black;
        width: 5.4%;
        min-height: 8vh;
        background-color:blue;` 
        div.innerText = `${i}`;
        section.appendChild(div);
    }
}
