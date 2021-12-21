import {createContext, useEffect, useState} from "react";
import {getPokemons} from "../containers/Service";

const MainContext = createContext({});

const Provider = ({ children }) => {
    const [text, setText] = useState("");
    const [pokemons, setPokemons] = useState([]);
    const [pokemonId, setPokemonId] = useState('0')


    const fetchData = async () => {
        const res = await getPokemons(0, 20)
        setPokemons(pokemons.concat(res))
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleChange = (event) => {
        const inputValue = event.target.value;

        // setText(inputValue);
        // setFiltered(
        //     data.filter((appart) =>
        //         appart.title.toLowerCase().includes(inputValue.toLowerCase())
        //     )
        // );
    };


    return (
        <MainContext.Provider value={{ pokemons, setPokemons, handleChange, pokemonId, setPokemonId, text}}>
            {children}
        </MainContext.Provider>
    );
};

export { Provider };
export default MainContext;