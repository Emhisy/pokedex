import './CheckBox.css'

const CheckBoutton = ({id, favorite, FavoriteChange}) =>(
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
    </label>);

export default CheckBoutton;