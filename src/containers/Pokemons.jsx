import {useContext, useEffect, useState} from "react";
import MainContext from "../contexts/MainContext";
import {Loading, PokemonList, SearchForm} from '../components';
import {usePageBottom} from '../utils/index';
import {useLocation} from "react-router-dom";

const Pokemons = () => {
    const search = useLocation().search;
    const name = new URLSearchParams(search).get('name');
    const { handleSubmit,
        handleChange,
        filter,
        getPokemons,
        allPokemons,
        getFavorite,
        favorite
    } = useContext(MainContext);
    const [offset, setOffset] = useState(0);
    const isPageBottom = usePageBottom();
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const storedFavorite = getFavorite()
        setPokemons(pokemons.map((pokemon, index) => {
            pokemon["id"] = index + 1
            pokemon["favorite"] = storedFavorite.includes(index + 1)
            return pokemon
        }))
    }, [favorite])

    useEffect(() => {
        const fetchData = async () => {
            const res = await getPokemons(offset, 30)
            setPokemons(pokemons.concat(res))
            setOffset(offset+30)
        }

        if(name === '' || name === null) {
            fetchData()
        }

        if(pokemons.length === 0 && allPokemons.length === 0){
            return <Loading/>;
        }
    }, [isPageBottom])

    if(allPokemons.length === 0){
        return <Loading/>;
    }

    return (
        <div className={"grid grid-cols-1 gap-4 mt-4"} id={"pokemons"}>
            <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} filter={filter}/>
            <PokemonList {...{pokemons}}/>
        </div>
    )
}

export default Pokemons;