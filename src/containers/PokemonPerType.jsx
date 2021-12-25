import mainContext from "../contexts/MainContext";
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {PokemonList} from "../components"

const PokemonPerType = () => {
    const {getType, getFavorite} = useContext(mainContext)
    const {type_name} = useParams()
    const [type, setType] = useState({})
    const [pokemons, setPokemons] = useState([])

    useEffect(()=> {
        const storedFiltered = getFavorite()

        const fetchData = async () => {
            const res = await getType(type_name)
            setType(res)
            let traitedPokmons = res.pokemon.map((pokemon) => {
                let array = pokemon.pokemon.url.split("/")
                pokemon.pokemon.id = array.find((value) => Number.isInteger(parseInt(value, 10)))
                pokemon.pokemon.id = parseInt(pokemon.pokemon.id, 10)
                pokemon.pokemon.favorite = storedFiltered.includes(pokemon.pokemon.id)
                return pokemon.pokemon
            })
            setPokemons(traitedPokmons)
        }
        fetchData()
    }, [])

    return <div>
        <PokemonList pokemons={pokemons}/>
    </div>;
}

export default PokemonPerType;