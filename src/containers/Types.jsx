import {useContext, useEffect, useState} from "react";
import MainContext from "../contexts/MainContext";

const Types = () => {
    const {getTypes} = useContext(MainContext)
    const [types, setTypes] = useState([])

    useEffect(() => {
        console.log('yo')
        const fetchData = async () => {
            const res = await getTypes();
            console.log(res)
            setTypes(res)
        }
        fetchData()
    }, [])

    if(types.length === 0) {
        return 'loading'
    }

    return <div>{
        types.map((type) => <img src={`/assets/types/${type.name}.png`}/>)
    }</div>;
}
export default Types;