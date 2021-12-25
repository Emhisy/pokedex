import {Item} from '../Item/index'

const List = ({pokemons}) => (
    <div className="">
        {pokemons.map((pokemon) =><div key={pokemon.id} > <Item {...pokemon}/></div>
        )}
    </div>
);

export default List;