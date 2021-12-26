import {useParams} from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import {PokemonMainImage, Tabs, Loading} from '../components';
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
        return <Loading/>;
    }

    return (
        <div className={""} style={{backgroundColor: color}}>
            <div>
                <PokemonMainImage {...pokemon}/>
            </div>
            <div  className={"-mt-24"}>
                <Tabs {...{pokemon, color}}/>
            </div>
        </div>
    )
};

export default Pokemon;