const Detail = ({pokemon}) => {
    console.log(pokemon)
    return (
        <div className={""}>
        <div className="">
            <div className="">
                <div className="">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} width="96" height="96" alt=""/>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`} width="96" height="96" alt=""/>
                </div>
                <div className="">
                    N°{pokemon.id.toString().padStart(4, "0")}
                </div>
                <div className="">
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </div>
            </div>
        </div>
        <div className="">
            <div className="">
                Type
            </div>
            <div className="">
                {pokemon.types.map((type, index) => (
                    <div key={index} className="">
                        <img src={`/assets/types/${type.type.name}.png`}/>
                    </div>))}
            </div>
        </div>
        <div className="">
            <div className="">
                Height
            </div>
            <div className="">
                { pokemon.height / 10 } m
            </div>
        </div>
        <div className="">
            <div className="">
                Weight
            </div>
            <div className="">
                { pokemon.weight / 10 } kg
            </div>
        </div>
        <div className="">
            <div className="">
                Weight
            </div>
            <div className="">
                {pokemon.stats.map((stat, index)=><div key={index}>
                    <td colSpan="2" className="">
                        <div className="">{ stat.stat.name }</div>
                    </td>
                    <td className="">
                        <div className="" id="info"> { stat.base_stat } </div>
                    </td>
                </div> )}
            </div>
        </div>
            {pokemon.stats.map((stat, index)=><div key={index}>
                <td colSpan="2" className="">
                    <div className="">{ stat.stat.name }</div>
                </td>
                <td className="">
                    <div className="" id="info"> { stat.base_stat } </div>
                </td>
            </div> )}
    </div>);

    return (
        <div className="">
            <div className="">
                <div  className="">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="2"><h2>No.{ pokemon.id }</h2></th>
                                <th colSpan="2"><h2>{ pokemon.name }</h2></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="4" className="">
                                    <div  className="">
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} width="96" height="96" alt=""/>
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`} width="96" height="96" alt=""/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                        <tr>
                            <td className="" colSpan="2">Type</td>
                            <td colSpan="2">
                                {pokemon.types.map((type, index) => {
                                        return <div key={index} className="type"><img src={`/assets/types/${type.type.name}.png`}/>{type.type.name}</div>;
                                    }
                                )
                                }

                            </td>
                        </tr>

                        <tr>
                            <td className="" colSpan="2">Height</td>
                            <td className="" colSpan="2"><div className="left" id="info">{ pokemon.height / 10 } m</div></td>
                        </tr>

                        <tr>
                            <td className="" colSpan="2">Weight</td>
                            <td className="" colSpan="2"><div className="left" id="info">{ pokemon.weight / 10 } kg</div></td>
                        </tr>

                        <tr>
                            <th colSpan="4">
                                <h3>Stat</h3>
                            </th>
                        </tr>

                        <tr>
                            {pokemon.stats.map((stat, index)=><div key={index}>
                                <td colSpan="2" className="">
                                    <div className="">{ stat.stat.name }</div>
                                </td>
                                <td className="">
                                    <div className="" id="info"> { stat.base_stat } </div>
                                </td>
                            </div> )}
                        </tr>

                        <tr>
                            <th colSpan="4">
                                <h3>Ability</h3>
                            </th>
                        </tr>

                        <tr>
                            <td colSpan="4">
                                {pokemon.abilities.map((ability, index) =>
                                    <div className="">{ ability.ability.name }</div>
                                )}
                            </td>
                        </tr>
                </table>
            </div>
        </div>
        {/*// <i v-else className="fas fa-spinner fa-spin"></i>*/}
    </div>
    )
}

export default Detail;