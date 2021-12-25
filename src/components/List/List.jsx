import {Item} from '../Item/index'

const List = ({pokemons}) => (
    <div className="grid justify-items-stretch">
        <div className="w-11/12 justify-self-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pokemons.map((pokemon) =><div key={pokemon.id} > <Item {...pokemon}/></div>
            )}
        </div>
    </div>
);

export default List;