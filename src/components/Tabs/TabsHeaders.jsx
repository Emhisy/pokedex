const TabsHeaders = ({setOpenTab, tabsNumber, openTab, NameTabs, color}) => (
    <li className="last:mr-0 flex-auto text-center">
        <a
            className={"text-md font-bold px-5 py-3 block leading-normal bg-white " +
                (openTab === tabsNumber
                    ? `text-state-900 border-b-4 border-b-[${color}]`
                    : "text-slate-300 border-b-4 border-b-slate-300")
            }
            onClick={e => {
                e.preventDefault();
                setOpenTab(tabsNumber);
            }}
            data-toggle="tab"
            role="tablist"
        >
            <i className="fas fa-space-shuttle text-base mr-1"/> {NameTabs}
        </a>
    </li>
);

export default TabsHeaders;