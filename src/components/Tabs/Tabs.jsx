import {useState} from "react";
import {TabsHeaders} from './';
import {About, Stats, Moves} from '../TabsDetail'

const Tabs = ({pokemon, color}) => {
    const [openTab, setOpenTab] = useState(1);
    return(
        <>
            <div className="flex flex-wrap grid justify-items-stretch bg-white md:pt-24 md:rounded-t-[100px]">
                <div className="w-11/12 justify-self-center">
                    <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" >
                        <TabsHeaders {...{openTab, tabsNumber: 1, setOpenTab, NameTabs: 'About', color}}/>
                        <TabsHeaders {...{openTab, tabsNumber: 2, setOpenTab, NameTabs: 'Stats', color}}/>
                        <TabsHeaders {...{openTab, tabsNumber: 3, setOpenTab, NameTabs: 'Moves', color}}/>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <About/>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <Stats {...pokemon} />
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <Moves/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tabs;