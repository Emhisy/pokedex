import './PokemonItem.css'
import {useContext} from "react";
import MainContext from "../../contexts/MainContext";

const PokemonMainImage = ({id, name, types}) => {
    const {getFontColor, Type} = useContext(MainContext);
    const fontColor = getFontColor(Type[types[0].type.name]);

    if(id === '0' || id === 0 || id === undefined) {
        return <></>;
    }


    return (
        <div className={"grid grid-cols-2"}>
            <div>
                <span className="" id={"pokemon-id"} style={{ color: fontColor}}>#{id.toString().padStart(3, "0")}</span><br/>
                <span className="" id={"pokemon-name"}>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
            </div>
            <div className={""}>
                <img className={""}
                     id="main-image" alt="big"
                     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
                />
            </div>
        </div>);
}

export default PokemonMainImage;