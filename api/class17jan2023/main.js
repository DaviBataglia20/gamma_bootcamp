const peticion = fetch("https://swapi.dev/api/people/1/")

peticion
    .then(respuesta => {    
        return respuesta.json()
    })
    .then(otraRespuesta => {
        pelis = otraRespuesta.films
        nombre = otraRespuesta.name;
        console.log(`${nombre} participo en 4 peliculas ${pelis}`)
    })
