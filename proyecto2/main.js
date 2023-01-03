/* Obtener los objetos que vamos utilizar */
const añadirButon = document.querySelector("#añadirLista");
const resetarButon = document.querySelector("#resetearLista");


/* Hacer funciones */
const añadirALaLista = () =>{
 /* obtener valor de la lista */
let textoInput = document.getElementById("textoTarea");
   if(textoInput.value === ""){
    console.log("davi paso pora maqui¡")

   }else{
    /* obtener la lista */
    const listaEtiqueta = document.getElementById("listaCompleta")

    /* crear y añadir la tarea a la lista */
        const tarea = document.createElement("li");
        tarea.innerHTML = `<div>
                                <p>${textoInput.value}</p>
                                <button onclick="borrarEstaTarea(this)">Borrar</button>
                            </div>`
        listaEtiqueta.appendChild(tarea)
   }
   textoInput.value = "";
}

const  resetearTodo = () =>{
     /* obtener items de la lista */
        const items = document.querySelectorAll("ul>li");

     /* eliminar todos los nodos añadidos */
        items.forEach(li => li.remove());
}  

const borrarEstaTarea = (btn) =>{
    /* selecionar la lista que va a eliminar */
   let div = btn.parentElement;
   let li = div.parentElement;
   let ul = li.parentNode;
   ul.removeChild(li)
}


/* añadir eventos a los butones y al input */
añadirButon.addEventListener("click", () =>{
    añadirALaLista();
});
resetarButon.addEventListener("click",() =>{
    resetearTodo();

})
const enter = document.querySelector('#textoTarea').addEventListener('keypress',(e) =>{
    if (e.key === 'Enter') {
        añadirALaLista();
    }
});