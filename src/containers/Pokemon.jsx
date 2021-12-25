import {useParams} from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import {PokemonDetail, PokemonMainImage} from '../components';
import MainContext from "../contexts/MainContext";

const Pokemon = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState({});
    const {getPokemon} = useContext(MainContext);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getPokemon(name)
            setPokemon(res)
        }
        fetchData();
    }, [])

    if(Object.keys(pokemon).length === 0){
        return 'loading';
    }
    return (
        <div className={""}>
            <div>
                <PokemonMainImage pokemonId={pokemon.id}/>
            </div>
            <div  className={""} id={"pokemons"}>
                <PokemonDetail pokemon={pokemon}/>
            </div>
        </div>
    )
};

export default Pokemon;