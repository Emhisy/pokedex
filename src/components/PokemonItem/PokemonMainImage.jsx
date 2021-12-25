import './PokemonItem.css'

const PokemonMainImage = ({pokemonId}) => {
    if(pokemonId === '0' || pokemonId === undefined) {
        return <></>;
    }
    return (
        <div className={""}>
            <div className={""}>
                <img className={""}
                     id="main-image" alt="big"
                     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`}
                />
            </div>
        </div>);
}

export default PokemonMainImage;