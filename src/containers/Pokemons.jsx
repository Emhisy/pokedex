import {useContext, useEffect, useState} from "react";
import MainContext from "../contexts/MainContext";
import {getPokemons} from "./Service";
import {List} from '../components/List/index';
import {usePageBottom} from '../utils/index';
import {Item2} from '../components/Item2/index'

const Pokemons = () => {
    const { pokemons, setPokemons, pokemonId } = useContext(MainContext);
    const [offset, setOffset] = useState();
    const [id, setId] = useState(0);
    const isPageBottom = usePageBottom();

    useEffect(() => {
        const fetchData = async () => {
            const res = await getPokemons(offset, 20)
            setPokemons(pokemons.concat(res))
            setOffset(offset+20)
        }
        fetchData()
    }, [isPageBottom])

    const handleHover = () => {

    }

    if(pokemons.length === 0){
        return <div>loading</div>;
    }
    return (
        <div className={"flex flex-row"}>
            <div  className={"basis-3/5"}>
                <Item2 pokemonId={pokemonId}/>
            </div>
            <div  className={"basis-2/5"}>
                <List pokemons={pokemons}/>
            </div>
        </div>
    )
}

export default Pokemons;