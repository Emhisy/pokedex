import {useParams} from 'react-router-dom';
import {Detail} from '../components/Detail/index'
import {useEffect, useState} from "react";
import {getPokemon} from "./Service";

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
    return <div><Detail pokemon={pokemon}/></div>
};

export default Pokemon;