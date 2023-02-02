const climaApi = fetch("https://api.openweathermap.org/data/2.5/weather?q={Madrid}&appid={80da8211f3a80619450c7ea3dffbf31f}");
climaApi
    .then(lista =>{
        return lista.json()
    })
    .then(listado => console.log(listado))