import {useContext} from "react";
import MainContext from "../../contexts/MainContext";
import {
    Formik,
    Form,
    Field,
} from 'formik';
import * as yup from 'yup';

let schema = yup.object().shape({
    firstName: yup.string().required('Required !'),
    lastName: yup.string().required('Required !'),
    email: yup.string().email('Invalid Email').required('Required !'),
    message: yup.string()
        .min(5, "too short")
        .required('Required !'),
    createdOn: yup.date().default(function () {
        return new Date();
    }),
});


const ContactForm = () => {
    const {onSubmitContactForm} = useContext(MainContext)

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    };

    return (
        <div className={"grid justify-items-stretch mt-8"}>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={onSubmitContactForm}
            >
                {({ errors, touched }) => (
                    <Form className="w-11/12 justify-self-center w-full max-w-lg" >
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="firstName">
                                    First Name
                                </label>
                                {errors.firstName && touched.firstName ? (
                                    <>
                                        <Field
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="firstName"
                                            name="firstName"
                                            placeholder="First Name"
                                        />
                                        <p className="text-red-500 text-xs italic">{errors.firstName}</p>
                                    </>
                                ) :
                                    <Field
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                    />
                                }
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="lastName">
                                    Last Name
                                </label>
                                {errors.lastName && touched.lastName ? (
                                    <>
                                        <Field
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Last Name"
                                        />
                                        <p className="text-red-500 text-xs italic">{errors.lastName}</p>
                                    </>
                                ) :
                                    <Field
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                    />
                                }
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="email">
                                    E-mail
                                </label>
                                {errors.email && touched.email ? (
                                    <>
                                        <Field
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="email"
                                            name="email"
                                            placeholder="Email" />
                                        <p className="text-red-500 text-xs italic">{errors.email}</p>
                                    </>
                                ) :
                                    <Field
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="email"
                                        name="email"
                                        placeholder="Email" />
                                }
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" form="message">
                                    Message
                                </label>
                                {errors.message && touched.message ? (
                                        <>
                                            <Field
                                                as={"textarea"}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="message"
                                                name="message"
                                                placeholder="Message" />
                                            <p className="text-red-500 text-xs italic">{errors.message}</p>
                                        </>
                                    ) :
                                    <Field
                                        as={"textarea"}
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="message"
                                        name="message"
                                        placeholder="Message" />
                                }
                            </div>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3">
                                <button className="shadow !bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                    Send
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ContactForm;