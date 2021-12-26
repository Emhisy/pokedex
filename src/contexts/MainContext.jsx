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
    const [allPokemons, setAllPokemons] = useState([]);
    const [favorite, setFavorite] = useState([])
    const history = createBrowserHistory();
    const Type = {
        bug: '#91C12F',
        dark: '#5A5465',
        dragon: '#0B6DC3',
        electric: '#F4D23C',
        fairy: '#EC8FE6',
        fighting: '#CE416B',
        fire: '#FF9D55',
        flying: '#8FA9DE',
        ghost: '#5269AD',
        grass: '#63BC5A',
        ground: '#DE794A',
        ice: '#73CEC0',
        normal: '#919AA2',
        poison: '#AA6BC8',
        psychic: '#FA7179',
        rock: '#C5B78C',
        steel: '#5A8EA2',
        water: '#5090D6'
    }


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
        return JSON.parse(storedFavorite);
    }

    const handleSubmit = (event) => {
        setFilter("");
        history.push(`/pokemon/${event.target.name.value}`)
    };

    const FavoriteChange = (event, id) => {
        let storedFavorite = getFavorite()

        const changeStatus = (pokemon, index) => {
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
                setFavorite(storedFavorite)

                window.localStorage.setItem("favorite", JSON.stringify(storedFavorite))
            }
            return pokemon
        }

        allPokemons.map((pokemon, index) => {
            return changeStatus(pokemon, index+1)
        })
    }

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setFilter(inputValue);

        inputValue === "" ? history.push(`/pokemons`) : history.push(`/pokemons?name=${inputValue}`)
    }

    const getPokemons = async (offset, limit) => {
        const storedFavorite = getFavorite()
        const res = await axios({
            method: "get",
            url: `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        });
        res.data.results = res.data.results.map((pokemon, index) => {
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
        return res.data
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

    const getFontColor = (color) => {
        const red = parseInt(color.slice(1,3), 16)
        const blue = parseInt(color.slice(3,5), 16)
        const green = parseInt(color.slice(5,7), 16)
        return ((red*0.299 + green*0.587 + blue*0.114) < 70) ? "#ffffff80" : "#00000080";
    }


    return (
        <MainContext.Provider value={{
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
            onSubmitContactForm,
            getFontColor,
            Type
        }}>
            {children}
        </MainContext.Provider>
    );
};

export { Provider };
export default MainContext;