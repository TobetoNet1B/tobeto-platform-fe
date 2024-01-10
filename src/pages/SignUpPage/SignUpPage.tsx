import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
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
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96 text-center relative overflow-hidden border-4 border-solid border-purple-500 rounded-md mr-5">
                <img
                    src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                    alt="tobeto-banner"
                    className="mb-5 mt-5 rounded-md mx-auto"
                    style={{ width: "100%", height: "auto" }}
                />
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
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <a className="text-sm text-black-500">
                                    Zaten bir  hesabın var mı?&nbsp;
                                </a>
                                <a href="#" className="text-sm text-purple-500 hover:underline">
                                    Giriş Yap
                                </a>
                            </div>
                          
                        </div>
                        <button
                            type="submit"
                            className="bg-purple-600 text-white p-2 rounded-md w-full hover:bg-purple-700"
                        >
                            Kayıt Ol
                        </button>
                    </Form>
                </Formik>

            </div>


            <div className="bg-white p-8 rounded shadow-md w-96 text-center relative overflow-hidden border-4 border-solid border-indigo-500 rounded-md">
                <img
                    src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                    alt="ik-banner"
                    className="mb-14 mt-20 rounded-md mx-auto"
                    style={{ width: "100%", height: "auto" }}
                />


                <button
                    type="submit"
                    className="bg-indigo-950 text-white p-2 rounded-md w-full mb-20 mt-14"
                >
                    Başvur
                </button>
            </div>

        </div>
    );
}

export default SignUpPage