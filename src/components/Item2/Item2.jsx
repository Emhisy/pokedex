import './Item2.css'

const Item2 = ({pokemonId}) => {
    console.log(pokemonId)
    if(pokemonId === '0' || pokemonId === undefined) {
        return <></>;
    }
    return (
        <div className={"p-9 fixed"}>
            <img className={"rounded-2xl border-sky-300 outline outline-8 outline-yellow-300"}
                 id="main-image" alt="big"
                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`}
            />
        </div>);
}

export default Item2;