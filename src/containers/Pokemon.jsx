import {useParams} from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import {PokemonDetail, PokemonMainImage} from '../components';
import MainContext from "../contexts/MainContext";

const Pokemon = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState({});
    const {getPokemon, Type} = useContext(MainContext);
    const [color, setColor] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const res = await getPokemon(name)
            setPokemon(res)
            setColor(Type[res.types[0].type.name])
        }
        fetchData();
    }, [])

    if(Object.keys(pokemon).length === 0){
        return 'loading';
    }
    return (
        <div className={""} style={{backgroundColor: color}}>
            <div>
                <PokemonMainImage pokemonId={pokemon.id}/>
            </div>
            <div  className={"md:-mt-24"} id={"pokemons"}>
                <PokemonDetail pokemon={pokemon} color={color}/>
            </div>
        </div>
    )
};

export default Pokemon;