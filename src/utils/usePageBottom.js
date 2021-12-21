import {useEffect, useState} from "react";

const usePageBottom = () => {
    const [bottom, setBottom] = useState(false);

    useEffect(() => {
        const pokemonsDiv = document.getElementById("pokemons");
        function handleScroll() {
            const isScrolledToBottom = pokemonsDiv.scrollHeight - pokemonsDiv.scrollTop === pokemonsDiv.clientHeight;
            setBottom(isScrolledToBottom);
            // const isBottom = window.innerHeight + document.documentElement.scrollTop
            //     === document.documentElement.offsetHeight;
            // setBottom(isBottom);
        };
        pokemonsDiv.addEventListener("scroll", handleScroll);
        return () => {
            pokemonsDiv.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return bottom;
}

export default usePageBottom