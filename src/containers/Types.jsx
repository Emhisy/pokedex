import {useContext, useEffect, useState} from "react";
import MainContext from "../contexts/MainContext";
import {TypeItem} from "../components";

const Types = () => {
    const {getTypes} = useContext(MainContext)
    const [types, setTypes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await getTypes();
            setTypes(res)
        }
        fetchData()
    }, [])

    if(types.length === 0) {
        return 'loading'
    }

    return (
        <div className={"grid justify-items-stretch"}>
            <div className={"w-11/12 justify-self-center grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"}>{
                types.map((type) => {
                    if(!type.name.includes("shadow") && !type.name.includes("unknown")) {
                        return (<TypeItem {...type} />
                        )
                    }
                })
            }</div>
        </div>);
}
export default Types;