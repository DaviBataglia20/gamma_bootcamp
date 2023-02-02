export default function Button({nombre}){
    const consolear = () =>{
        console.log(nombre)
    }
    return(
    <button onClick ={consolear}>consolear Pokemon</button>)
}