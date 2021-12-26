import {useContext} from "react";
import MainContext from "../../contexts/MainContext";
import {DisplayName} from '../';

const PokemonMainImage = ({id, name, types}) => {
    const {getFontColor, Type} = useContext(MainContext);
    const fontColor = getFontColor(Type[types[0].type.name]);

    if(id === '0' || id === 0 || id === undefined) {
        return <></>;
    }

    return (
        <div className="flex flex-wrap grid justify-items-stretch ">
            <div className="w-11/12 justify-self-center grid grid-rows-1 grid-flow-col gap-4">
                <div className={" py-24"}>
                    <DisplayName {...{id, name, fontColor}}/>
                    <div className={"grid grid-rows-2 grid-flow-col gap-4 mt-8"}>
                        {types.map(({type: {name}}, index) => <img
                            key={index}
                            className={"rounded-md"}
                            src={`/assets/types/${name}.png`}/>)}
                    </div>
                </div>
                <div className={"grid justify-items-stretch "}>
                    <img className={"mt-64 justify-self-center"}
                         id="main-image" alt="big"
                         // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
                         src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id.toString().padStart(3, "0")}.png`}
                    />
                </div>
            </div>
        </div>
    );
}

export default PokemonMainImage;