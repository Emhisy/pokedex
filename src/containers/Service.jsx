import axios from "axios";

export const getPokemons = async (offset, limit) => {
    const res = await axios({
            method: "get",
            url: `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        }
    );
    return res.data.results;
}

export const getPokemon = async (name) => {
    const res = await axios({
        method: "get",
        url: `https://pokeapi.co/api/v2/pokemon/${name}`
    })
    return res.data;
}