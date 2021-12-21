import './Item.css';
import {useHover} from '../../utils/index';
import MainContext from "../../contexts/MainContext";
import {useContext, useEffect} from "react";
import './Item.css';

const Item = ({name, index}) => {
    const {setPokemonId, pokemonId} = useContext(MainContext)
    const [hoverRef, isHovered] = useHover();

    useEffect(() => {
        if (isHovered === true && pokemonId !== hoverRef.current.getAttribute('pokemon-id')){
            setPokemonId(hoverRef.current.getAttribute('pokemon-id'))
        }
    }, [isHovered])

    return (
    <div className={'hover:bg-red-600 rounded-l-lg border border-b-4 hover:border-[#76465D] border-[#ffffff] hover:drop-shadow-md py-2 pr-4 pl-10'} pokemon-id={`${index}`} ref={hoverRef}>
        <div className='flex flex-row hover:bg-orange-300 bg-amber-100 border-4 border-amber-50 rounded-l-full' id={'hover-item'}>
            <div className='w-1/5'/>
            <div className='w-1/5'>
                <img className="" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}/>
            </div>
            <div className="w-1/5">
                <div className="">
                    <span className=""/>
                    <span className="">N°{index.toString().padStart(4, "0")}</span>
                </div>
            </div>
            <div className="w-2/5">
                <div className="">
                    <span className=""/>
                    <span className="">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                </div>
            </div>
        </div>
    </div>
)}

export default Item;