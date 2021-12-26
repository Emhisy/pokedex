import './DisplayName.css'

const DisplayName = ({id, name, fontColor}) => (

    <div className="">
        <span className="" id={"pokemon-id"} style={{ color: fontColor}}>#{id.toString().padStart(3, "0")}</span><br/>
        <span className="" id={"pokemon-name"}>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
    </div>
)

export default DisplayName;