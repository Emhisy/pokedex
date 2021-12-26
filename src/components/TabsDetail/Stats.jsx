const Stats = ({stats}) => {
    return <div>
        <h2>Base Stats</h2>
        <div className={"grid grid-cols-2"}>
            {stats.map(stat => <div>{stat.stat.name}</div>)}
        </div>
    </div>
}
export default Stats;