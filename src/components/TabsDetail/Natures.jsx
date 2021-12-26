const Natures = ({abilities}) => {
    return <div>
        <div className={"grid grid-cols-1"}>
            {abilities.map(({ability: {name}}, index) => {
                if(index < 3){
                    return <div key={index}>{name}</div>
                }
            })}
        </div>
    </div>
}
export default Natures;