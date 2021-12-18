import {Item} from '../Item/index'
import {Link} from "react-router-dom";

const List = ({pokemons}) => (
    <div className="">
        {pokemons.map((pokemon, index) => <Link key={index} to={`pokemon/${pokemon.name}`}><Item name={pokemon.name} index={index+1}/></Link>
        )}
    </div>
);

export default List;