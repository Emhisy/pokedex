const TypeItem = ({name}) => (
    <div className={'rounded-xl'} key={name}>
        <div className='grid justify-items-stretch' id={'hover-itemgrid'}>
            <img className={"justify-self-center"} src={`/assets/types/${name}.png`}/>
        </div>
    </div>
);

export default TypeItem;