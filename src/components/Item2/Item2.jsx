import './Item2.css'

const Item2 = ({pokemonId}) => {
    if(pokemonId === '0' || pokemonId === undefined) {
        return <></>;
    }
    return (
        <div className={"grid justify-items-stretch mt-9"}>
            <div className={"rounded-3xl border border-8 border-yellow-300 h-[518px] w-[518px] justify-self-center"}>
                <img className={"rounded-2xl border-sky-300"}
                     id="main-image" alt="big"
                     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`}
                />
            </div>
        </div>);
}

export default Item2;