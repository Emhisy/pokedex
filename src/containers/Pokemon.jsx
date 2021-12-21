import {useParams} from 'react-router-dom';
import {Detail} from '../components/Detail/index'
import {useEffect, useState} from "react";
import {getPokemon} from "./Service";
import {Item2} from "../components/Item2";
import {List} from "../components/List";

const Pokemon = () => {
    const { name } = useParams()
    const [pokemon, setPokemon] = useState({})

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
        <div className={"grid lg:grid-cols-2"}>
            <div>
                <Item2 pokemonId={pokemon.id}/>
            </div>
            <div  className={"lg:mt-0 mt-7 overflow-y-scroll overscroll-auto max-h-[38rem]"} id={"pokemons"}>
                <Detail pokemon={pokemon}/>
            </div>
        </div>
    )
};

export default Pokemon;