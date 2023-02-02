
export default function Tarjeta ({parametros}){
    return(parametros.map(parametro =>(
        <>
         <div className={parametro.cssClass}>
            <div>
                <img src={parametro.type} alt="ola" width="50px"height="50px"/>
            </div>
            <div>
                <p>......... {parametro.number}</p>
            </div>
            <div>
                <p>Expires : {parametro.expirationMonth}/{parametro.expirationYear}</p>
            </div>
            <div>
                <p>{parametro.bank}</p>
            </div>
            <div>
                <p>{parametro.owner}</p>
            </div>
         </div>
        </>
    
    ))
      
)
};