import mainContext from "../contexts/MainContext";
import {useContext, useEffect, useState} from "react";
import {PokemonList, PokemonItem, SearchForm} from '../components'

const Favorite = () => {
    const {getFavorite, favorite, getPokemons} = useContext(mainContext)
    const [pokemons, setPokemons] = useState([])
    const [allPokemons, setAllPokemons] = useState([])

    useEffect(() => {
        const storedFiltered = getFavorite()

        const fetchData = async () => {
            const res = await getPokemons(0, 898);
            setAllPokemons(res)
            setPokemons(res.filter(({id}) => storedFiltered.includes(id)))
        }
        fetchData()

    }, [])

    useEffect(() => {
        setPokemons(allPokemons.filter(({id}) => favorite.includes(id)))
    }, [favorite])

    if(allPokemons.length === 0){
        return 'loading';
    }

    return (
        <div className={""}>
            <div  className={""} id={"pokemons"}>
                <PokemonList pokemons={pokemons} />
            </div>
        </div>
    )
}

export default Favorite;