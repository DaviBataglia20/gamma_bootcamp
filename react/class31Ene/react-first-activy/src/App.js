
import Tarjeta from './components/Tarjeta/Tarjeta.jsx';

export default function App() {
  const parametros = [
   /*  {
      tarjeta1:"../assets/kisspng-credit-card-visa-logo-payment-visa-5abe34c67ed7c4.6933703015224147905196.png",
      tarjeta2:"../assets/kisspng-mastercard-logo-credit-card-maestro-payment-card-mastercard-mastercard-logo-design-vector-free-down-5b7bd9c81e1212.2106100615348433361232.png",
    }, */
    {
    tarjeta1 :"8845",
    tarjeta2:"0995",
    tarjeta3:"6984",
  },
  {
    tarjeta1 :3,
    tarjeta2:3,
    tarjeta3:12,
  },
  {
    tarjeta1 :21,
    tarjeta2:21,
    tarjeta3:19,
  },
  {
    tarjeta1 :"BNP",
    tarjeta2:"N26",
    tarjeta3:"BBVA",
  },
 
]
  return (
   <div className='card'>
    <Tarjeta parametros={parametros}/>
    <Tarjeta parametros={parametros}/>
    <Tarjeta parametros={parametros}/>
   </div>
  );
}


