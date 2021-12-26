const Stats = ({stats}) => {
    return <div>
        <h2>Base Stats</h2>
        <div className={"grid grid-cols-2"}>
            {stats.map((stat, index) => <div key={index}>{stat.stat.name}</div>)}
        </div>
    </div>
}
export default Stats;