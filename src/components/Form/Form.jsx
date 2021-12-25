const Form = ({ filter, handleChange, handleSubmit }) =>
    (
        <div  className={"grid justify-items-stretch"}>
            <form onSubmit={handleSubmit} className="w-11/12 justify-self-center grid grid-cols-1 gap-4" >
                <label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Pokemon à rechercher"
                        onChange={handleChange}
                        value={filter}
                    />
                </label>

                <button
                    className="!bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline max-w-[150px]"
                    type="submit">
                    Rechercher
                </button>
            </form>
        </div>
);

export default Form;