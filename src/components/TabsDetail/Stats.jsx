import {ProgressBar} from '../';

const Stats = ({stats, color}) => {
    console.log(color)
    return (
        <div>
            <h2>Base Stats</h2>
            <div className={"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3"}>
                <div>
                    {stats.map(({stat:{name}, base_stat}, index) => {
                        return (
                            <div key={index} className={"flex "}>
                                <div key={index} className={"w-40 pr-2 flex  items-center"}>{name.charAt(0).toUpperCase() + name.slice(1)}</div>
                                <div className={"pr-2 flex items-center"}>{base_stat}</div>
                                <div className={"flex items-center w-64 px-4"}><ProgressBar bgcolor={color} completed={100*base_stat/255}/></div>

                                {name === "hp"
                                    ? (
                                        <>
                                            <div className={" pr-2"}>{Math.round(((31 + 2 * base_stat + (0 / 4)) * 100 / 100) + 100 + 10)}</div>
                                            <div className={" pr-2"}>{Math.round(((31 + 2 * base_stat + (255 / 4)) * 100 / 100) + 100 + 10)}</div>
                                        </>
                                    )
                                    : (
                                        <>
                                            <div className={" pr-2"}>{Math.round(((31 + 2 * base_stat + (0 / 4)) * 100 / 100) + 5)}</div>
                                            <div className={" pr-2"}>{Math.round(((31 + 2 * base_stat + (255 / 4)) * 100 / 100) + 5)}</div>
                                        </>
                                    )
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Stats;