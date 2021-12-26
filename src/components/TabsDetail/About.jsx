const About = ({id, height, weight, moves, species}) => {
    return <div>
        <label>Base</label>
        <div className=" grid grid-cols-2">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} width="96" height="96" alt=""/>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`} width="96" height="96" alt=""/>
        </div>
        <label>Shiny</label>
        <div className=" grid grid-cols-2">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`} width="96" height="96" alt=""/>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png`} width="96" height="96" alt=""/>
        </div>
        <div className="">
                Height { height / 10 } m
        </div>
        <div className="">
                Weight { weight / 10 } kg
        </div>

        <h2>3 first Moves</h2>
        <div className={"grid grid-cols-1"}>
            {moves.map((move, index) => {
                if(index < 3){
                    return <div key={index}>{move.move.name}</div>
                }
            })}
        </div>
    </div>
};

export default About;