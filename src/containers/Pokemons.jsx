import {useContext, useEffect, useState} from "react";
import MainContext from "../contexts/MainContext";
import {List, Item2, Form} from '../components';
import {usePageBottom} from '../utils/index';
import {useLocation} from "react-router-dom";

const Pokemons = () => {
    const search = useLocation().search;
    const name = new URLSearchParams(search).get('name');
    const { pokemons,
        setPokemons,
        handleSubmit,
        handleChange,
        filter,
        getPokemons,
        allPokemons,
    } = useContext(MainContext);
    const [offset, setOffset] = useState(0);
    const isPageBottom = usePageBottom();

    useEffect(() => {
        const fetchData = async () => {
            const res = await getPokemons(offset, 30)
            setPokemons(pokemons.concat(res))
            setOffset(offset+20)
        }

        if(name === '' || name === null) {
            fetchData()
        }

        if(pokemons.length === 0 && allPokemons.length === 0){
            return "loading";
        }
    }, [isPageBottom])

    if(allPokemons.length === 0){
        return 'loading';
    }

    return (
        <div  className={"grid grid-cols-1 gap-4"} id={"pokemons"}>
            <Form handleChange={handleChange} handleSubmit={handleSubmit} filter={filter}/>
            <List pokemons={pokemons}/>
        </div>
    )
}

export default Pokemons;