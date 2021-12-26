const Moves = ({moves}) => {
    return <div>
        <h2>Base Stats</h2>
        <div className={"grid grid-cols-2"}>
            {moves.map((move, index) => {
                if(index < 3){
                    return <div key={index}>{move.move.name}</div>
                }
            })}
        </div>
    </div>
}
export default Moves;