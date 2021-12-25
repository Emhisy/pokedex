import './Item.css';
import {useHover} from '../../utils/index';
import MainContext from "../../contexts/MainContext";
import {useContext, useEffect} from "react";
import './Item.css';
import {Link} from "react-router-dom";

const Item = ({name, id, favorite}) => {
    const {setPokemonId, pokemonId, FavoriteChange} = useContext(MainContext)
    const [hoverRef, isHovered] = useHover();

    useEffect(() => {
        if (isHovered === true && pokemonId !== hoverRef.current.getAttribute('pokemon-id')){
            setPokemonId(hoverRef.current.getAttribute('pokemon-id'))
        }
    }, [isHovered])

    return (
    <div className={''} pokemon-id={`${id}`} ref={hoverRef}>
        <div className='' id={'hover-item'}>
            <div className='w-1/5'>
                <input type="checkbox" onChange={(event) => {FavoriteChange(event, id)}} checked={favorite}/>
            </div>
            <Link to={`/pokemon/${name}`}>
                <div className='w-1/5'>
                    <img className={""} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
                    {/*<img className="" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id.toString().padStart(3, "0")}.png`}/>*/}
                </div>
                <div className="w-1/5">
                    <div className="">
                        <span className=""/>
                        <span className="">N°{id.toString().padStart(3, "0")}</span>
                    </div>
                </div>
                <div className="w-2/5">
                    <div className="">
                        <span className=""/>
                        <span className="">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                    </div>
                </div>
            </Link>
        </div>
    </div>
)}

export default Item;