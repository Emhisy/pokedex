import './PokemonItem.css';
import {useHover} from '../../utils/index';
import MainContext from "../../contexts/MainContext";
import {useContext, useEffect} from "react";
import './PokemonItem.css';
import {Link} from "react-router-dom";
import Color from 'color-thief-react';
import {useColor} from 'color-thief-react';

const PokemonItem = ({name, id, favorite}) => {
    const {setPokemonId, pokemonId, FavoriteChange} = useContext(MainContext)
    const [hoverRef, isHovered] = useHover();
    const { data, loading, error } = useColor(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        "hex",
        {crossOrigin: "anonymous"})

    useEffect(() => {
        if (isHovered === true && pokemonId !== hoverRef.current.getAttribute('pokemon-id')){
            setPokemonId(hoverRef.current.getAttribute('pokemon-id'))
        }
    }, [isHovered])

    if(!data){
        return "loading";
    }
    const red = parseInt(data.slice(1,3), 16)
    const blue = parseInt(data.slice(3,5), 16)
    const green = parseInt(data.slice(5,7), 16)
    const fontColor = ((red*0.299 + green*0.587 + blue*0.114) < 70) ? "#ffffff80" : "#00000080";

    return (
    <div className={'rounded-xl py-4 pl-8 min-h-[250px]'} style={{ backgroundColor: data }} pokemon-id={`${id}`} ref={hoverRef}>
        <div className='' id={'hover-item grid justify-items-stretch'}>

            {/*<div className='justify-self-start'>*/}
            {/*    <input type="checkbox"*/}
            {/*       onChange={(event) => {FavoriteChange(event, id)}}*/}
            {/*       checked={favorite}*/}
            {/*    />*/}
            {/*</div>*/}
            <div className="flex items-center justify-center w-full mb-4">
                <label
                    htmlFor={`favorite-${id}`}
                    className="flex items-center cursor-pointer"
                >
                    <div className="relative">
                        <input id={`favorite-${id}`}
                           type="checkbox"
                           className="sr-only"
                           onChange={(event) => {FavoriteChange(event, id)}}
                           checked={favorite}
                        />
                        <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"/>
                        <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"/>
                    </div>
                </label>
            </div>

            <Link to={`/pokemon/${name}`} className={"grid grid-rows-1 grid-flow-col gap-4"}>
                <div className="">
                    <div className="">
                        <span className="" id={"pokemon-id"} style={{ color: fontColor}}>#{id.toString().padStart(3, "0")}</span><br/>
                        <span className="" id={"pokemon-name"}>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                    </div>
                </div>
                <div className='grid justify-items-stretch'>
                    {/*<img className={""} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>*/}
                    <img className="justify-self-end"
                         src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id.toString().padStart(3, "0")}.png`}
                         height={"144px"}
                         width={"144px"}
                    />
                </div>
            </Link>
        </div>
    </div>
)}

export default PokemonItem;