
import Tarjeta from './components/Tarjeta/Tarjeta.jsx';

export default function App() {
  const parametros = [
  {
    type:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png",
    number:8845,
    expirationMonth:33,
    expirationYear:21,
    bank:"BNP",
    owner:"Maxence Bouret",
    cssClass:"card cartaVerde",
  },
  {
    type:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/MasterCard_early_1990s_logo.png/1200px-MasterCard_early_1990s_logo.png",
    number:9995,
    expirationMonth:33,
    expirationYear:21,
    bank:"card N26",
    owner:"Maxence Bouret",
    cssClass:"card cartaBlanca",
    
  },
  {
    type:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png",
    number:6984,
    expirationMonth:12,
    expirationYear:19,
    bank:"NB7",
    owner:"DAVI DA SILVA",
    cssClass:"card cartaDorada",

  }
 
]
  return (
   <div className='mainCard'>
      <Tarjeta parametros={parametros}/>
   </div>
  );
}


