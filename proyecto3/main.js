function costeHotel(noches) {
    return noches * 140;
  }
  
  function costeAvion(ciudad, noches) {
    let coste = 0;
    switch (ciudad) {
      case 'Barcelona':
        coste = 90;
        break;
      case 'Madrid':
        coste = 90;
        break;
      case 'Sevilla':
        coste = 50;
        break;
      case 'Valencia':
        coste = 40;
        break;
    }
    if (noches > 3) {
      coste *= 0.9;
    }
    return coste;
  }
  
  function costeCoche(dias) {
    let coste = dias * 40;
    if (dias >= 3 && dias < 7) {
      coste -= 20;
    } else if (dias >= 7) {
      coste -= 50;
    }
    return coste;
  }
  
  function calcularCoste() {
    const ciudad = document.getElementById('ciudad').value;
    const noches = document.getElementById('noches').value;
    const dias = document.getElementById('dias').value;
    const costeTotal = costeHotel(noches) + costeAvion(ciudad, noches) + costeCoche(dias);
    document.getElementById('resultado').innerText = `El coste total del viaje es: ${costeTotal}€`;
  }
  document.getElementById('calcular').onclick = calcularCoste;


  



