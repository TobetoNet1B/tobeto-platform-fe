import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';
import { passwordValidator } from 'utils/customValidations';
import { number, object, string } from 'yup';

type Props = {}

const SignUpPage = (props: Props) => {
    const initialValues = {
        username: '',
        password: '',
        name: '',
        lastname: ''
    }

    const validationSchema = object({
        username: string().required("E-posta girmek zorunludur.").min(0),
        password: string()
            .required("Şifre girmek zorunludur.")
            .min(3, "Şifre en az 3 karakter olmalıdır.")
            .max(50)
            .test(
                "my-custom-rule",
                "En az 1 büyük, 1 küçük harf ve 1 rakam içermelidir.",
                passwordValidator,
            )
    });

    return (
        <div className="flex items-center grid lg:grid-flow-col lg:gap-5 justify-center min-h-screen bg-gray-100">
            <div className="bg-white px-12 py-12 btn-rainbow-card shadow-md w-96 text-center relative overflow-hidden rounded-2xl">
                <img
                    src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                    alt="tobeto-banner"
                    className="mb-5 mt-5 rounded-md mx-auto p-4"
                    style={{ width: "100%", height: "auto" }}
                />
                <span className="text-blue font-bold text-3xl mb-3 block">
                    Hemen Kayıt Ol
                </span>
                <Formik
                    initialValues={initialValues}
                    onSubmit={values => { console.log(values); }}
                    validationSchema={validationSchema}
                >
                    <Form>
                        <div className="mb-4">
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="Ad"
                            />
                        </div>
                        <div className="mb-4">
                            <Field
                                type="text"
                                id="lastname"
                                name="lastname"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="Soyad"
                            />
                        </div>
                        <div className="mb-4">
                            <Field
                                type="text"
                                id="username"
                                name="username"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="E-Posta"
                            />
                            <ErrorMessage name="username"></ErrorMessage>
                        </div>
                        <div className="mb-4">
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="Şifre"
                            />
                            <ErrorMessage name="password"></ErrorMessage>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#9933FF] text-white p-2 rounded-3xl w-full hover:bg-[#822BD9]"
                        >
                            Kayıt Ol
                        </button>
                        <div className="flex items-center justify-center mt-4">
                            <div>
                                <a className="text-sm text-black-500">
                                    Zaten bir  hesabın var mı?&nbsp;
                                </a>
                                <Link className="nav-link text-sm text-[#555351] font-bold hover:underline" to={"/giris"}>
                                    Giriş Yap
                                </Link>

                            </div>

                        </div>
                        
                    </Form>
                </Formik>

            </div>


            <div className="btn-rainbow-card-ik bg-white px-12 py-16 shadow-md w-96 text-center relative overflow-hidden  rounded-2xl">
                <img
                    src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                    alt="ik-banner"
                    className="mb-20 mt-20 rounded-md mx-auto p-5"
                    style={{ width: "100%", height: "auto" }}
                />


                <button
                    type="submit"
                    className="bg-[#1E0F41] text-[#0FCDFA] p-2 rounded-3xl w-full mb-20 mt-14"
                >
                    Başvur
                </button>
            </div>

        </div>
    );
}

export default SignUpPage