import {useContext, useEffect, useState} from "react";
import MainContext from "../contexts/MainContext";
import {getPokemons} from "./Service";
import {List} from '../components/List/index';
import {usePageBottom} from '../utils/index';
import {Item2} from '../components/Item2/index'
import './Pokemons.css'

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
        return <div>
            <div  className={""}/>
            <div id={"pokemons"}/>
        </div>;
    }
    return (
        <div className={"grid lg:grid-cols-2"}>
            <div>
                    <Item2 pokemonId={pokemonId}/>
            </div>
            <div  className={"lg:mt-0 mt-7 overflow-y-scroll overscroll-auto max-h-[38rem]"} id={"pokemons"}>
                <List pokemons={pokemons}/>
            </div>
        </div>
    )
}

export default Pokemons;