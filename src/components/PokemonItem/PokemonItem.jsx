import MainContext from "../../contexts/MainContext";
import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useColor} from 'color-thief-react';
import {CheckBoutton, DisplayName, Loading} from '../'

const PokemonItem = ({name, id, favorite}) => {
    const {FavoriteChange, getFontColor} = useContext(MainContext)
    const [loaded, setLoaded] = useState();
    const { data } = useColor(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        "hex",
        {crossOrigin: "anonymous"})

    useEffect(() => {}, [favorite])

    if(!data && !loaded){
        return <Loading/>;
    }

    const fontColor = getFontColor(data);

    return (
    <div className={'rounded-xl py-4 pl-8 min-h-[250px]'} style={{ backgroundColor: data }} pokemon-id={`${id}`}>
        <div className='' id={'hover-item grid justify-items-stretch mr-2'}>
            <div className="flex items-center justify-center w-full mb-4">
                <CheckBoutton {...{id, favorite, FavoriteChange}}/>
            </div>

            <Link to={`/pokemon/${name}`} className={"grid grid-rows-1 grid-flow-col gap-4"}>
                <DisplayName {...{id, name, fontColor}}/>
                <div className='grid justify-items-stretch'>
                    {/*<img className={""} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>*/}
                    <img className="justify-self-end"
                         src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id.toString().padStart(3, "0")}.png`}
                         height={"144px"}
                         width={"144px"}
                         onLoad={() => setLoaded(true)}
                    />
                </div>
            </Link>
        </div>
    </div>
)}

export default PokemonItem;