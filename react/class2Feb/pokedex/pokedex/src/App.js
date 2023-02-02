import { pokemons } from "./components/pokemons/pokemons";
import Pokemon from "./components/PokeCard/Pokemon";
export default function App() {
  return (
    <div className="lista-pokemons">
      {pokemons.map((pokemon,i)=>{
        return <Pokemon key={i} pokemon = {pokemon}/>
      })}
    </div>
  );
}

