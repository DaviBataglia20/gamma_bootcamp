import Button from "../Button/Button";
export default  function Pokemon ({pokemon}) {
   const {id, nombre, img} = pokemon;
    return (
        <div className="pokemon">
            <div>{id}</div>
            <div><img src={img} alt="" /></div>
            <div><p>{nombre}</p></div>
            <div><Button nombre = {nombre} /></div>
        </div>
    )


};

