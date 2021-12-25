const Form = ({ filter, handleChange, handleSubmit }) =>
            // <input type="text" defaultValue={filter} onChange={handleChange} name="name" />
    (
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" defaultValue={filter} onChange={handleChange} name="name" />
        </label>
        <input type="submit" value="Submit" />
    </form>
);

export default Form;