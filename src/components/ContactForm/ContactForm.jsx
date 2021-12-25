import {useContext} from "react";
import MainContext from "../../contexts/MainContext";

const ContactForm = () => {
    const {onSubmitContactForm} = useContext(MainContext)
    return <form onSubmit={onSubmitContactForm}>
        <input type={"email"} name={"email"}/>
        <textarea name={"message"}/>
        <button type={"submit"}>Envoyer</button>
    </form>;
}

export default ContactForm;