import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { passwordValidator } from 'utils/customValidations';
import { number, object, string } from 'yup';
import './SignInPage.css';
import { Link } from 'react-router-dom';

type Props = {}

const SignInPage = (props: Props) => {
    const initialValues = {
        username: '',
        password: ''
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
            <div className="bg-white card shadow-md w-96 text-center relative overflow-hidden">
                <img
                    src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                    alt="tobeto-banner"
                    className="mb-5 mt-5 rounded-md mx-auto p-4"
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
                                <Link className="nav-link text-sm text-purple-500 hover:underline" to={"/sifremi-unuttum"}>
                                    Şifremi Unuttum
                                </Link>
                            </div>
                            <div>
                                <Link className="nav-link text-sm text-purple-500 hover:underline" to={"/kayit-ol"}>
                                    Kayıt Ol
                                </Link>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-purple-600 text-white p-2 rounded-3xl w-full hover:bg-purple-700"
                        >
                            Giriş Yap
                        </button>
                    </Form>
                </Formik>

            </div>

            <div className="bg-white p-[34px] shadow-md w-96 text-center relative overflow-hidden border-4 border-solid border-indigo-500 rounded-3xl">
                <img
                    src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                    alt="ik-banner"
                    className="mb-6 mt-6 rounded-md mx-auto p-5"
                    style={{ width: "100%", height: "auto" }}
                />
                <span className="text-blue font-bold text-3xl mb-8 mt-8 block">
                    Aradığın <span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"&nbsp;</span>İş<span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"&nbsp;</span> Burada!
                </span>

                <hr className="border-t-2 border-green-500 my-5" />

                <button
                    type="submit"
                    className="bg-indigo-950 text-white p-2 rounded-3xl w-full"
                >
                    Başvur
                </button>
            </div>


        </div>
    );
}

export default SignInPage