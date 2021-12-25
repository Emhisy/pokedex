import {createContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {
    createBrowserHistory
} from 'history';

import axios from "axios";


const MainContext = createContext({});

const Provider = ({ children }) => {
    const search = useLocation().search;
    const name = new URLSearchParams(search).get('name');
    const [filter, setFilter] = useState("");
    const [pokemons, setPokemons] = useState([]);
    const [allPokemons, setAllPokemons] = useState([]);
    const [pokemonId, setPokemonId] = useState('0')
    const [favorite, setFavorite] = useState([])
    const history = createBrowserHistory();


    useEffect(() => {
        getFavorite();

        const fetchData = async () => {
            const res = await getPokemons(0, 898);
            setAllPokemons(res);
        }
        fetchData()
    }, [])

    const getFavorite = () => {
        let storedFavorite = window.localStorage.getItem("favorite")
        if (!storedFavorite || storedFavorite === ""){
            window.localStorage.setItem("favorite", "[]")
            storedFavorite = "[]"
        }
        setFavorite(JSON.parse(storedFavorite))
        return JSON.parse(storedFavorite);
    }

    const handleSubmit = (event) => {
        setFilter("");
        history.push(`/pokemon/${event.target.name.value}`)
    };

    const FavoriteChange = (event, id) => {
        console.log(id)
        let storedFavorite = getFavorite()

        const changeStatus = (pokemon, index) => {
            console.log()
            if(pokemon.id.toString() === id.toString() ){
                pokemon.favorite = !pokemon.favorite
                    if(pokemon.favorite) {
                        if(!storedFavorite.includes(id)) storedFavorite.push(id)
                    } else {
                        if(storedFavorite.includes(id)){
                        const indexInStored = storedFavorite.indexOf(index)
                        storedFavorite.splice(indexInStored, 1)
                    }
                }
                storedFavorite.sort((a, b) => a - b)

                window.localStorage.setItem("favorite", JSON.stringify(storedFavorite))
                setFavorite(storedFavorite)
            }
            return pokemon
        }

        allPokemons.map((pokemon, index) => {
            return changeStatus(pokemon, index+1)
        })
        pokemons.map((pokemon, index) => {
            return changeStatus(pokemon, index+1)
        })

        setFavorite(storedFavorite)
    }

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setFilter(inputValue);

        inputValue === "" ? history.push(`/pokemons`) : history.push(`/pokemons?name=${inputValue}`)

        inputValue === '' ?
        setPokemons(allPokemons.filter(({id}) => id <= 20)) :
        setPokemons(allPokemons.filter(({name}) => name.toLowerCase().includes(inputValue.toLowerCase())));
    }

    const getPokemons = async (offset, limit) => {
        const storedFavorite = getFavorite()
        const res = await axios({
            method: "get",
            url: `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        });
        res.data.results.forEach((pokemon, index) => {
            pokemon["id"] = offset + index + 1
            pokemon["favorite"] = storedFavorite.includes(offset + index + 1)
            return pokemon
        })
        return res.data.results;
    }

    const getPokemon = async (name) => {
        const res = await axios({
            method: "get",
            url: `https://pokeapi.co/api/v2/pokemon/${name}`
        })
        return res.data;
    }

    const getTypes = async () => {
        const res = await axios({
            method: "get",
            url: `https://pokeapi.co/api/v2/type`
        })
        return res.data.results;
    }

    const getType = async (type) => {
        const res = await axios({
            method: "get",
            url: `https://pokeapi.co/api/v2/type/${type}`
        });
        return res.data;
    }

    const onSubmitContactForm = (event) => {
        const body = {
            email: event.target.email.value,
            message: event.target.message.value
        };
        const res = axios({
            url: "",
            method: "post",
            body: JSON.stringify(body)
        })
    }


    return (
        <MainContext.Provider value={{
            pokemons,
            setPokemons,
            pokemonId,
            setPokemonId,
            filter,
            setFilter,
            allPokemons,
            favorite,
            handleSubmit,
            handleChange,
            getPokemon,
            getPokemons,
            FavoriteChange,
            getFavorite,
            getTypes,
            getType,
            onSubmitContactForm
        }}>
            {children}
        </MainContext.Provider>
    );
};

export { Provider };
export default MainContext;