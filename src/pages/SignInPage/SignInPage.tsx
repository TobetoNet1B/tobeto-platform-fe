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
        <div className="items-center grid lg:grid-flow-col lg:gap-5 justify-center min-h-full py-16 bg-gray-100">
            <div className="px-9 py-5 btn-rainbow-card bg-white shadow-md w-96 text-center relative overflow-hidden rounded-2xl">
                <img
                    src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                    alt="tobeto-banner"
                    className="mb-5 mt-5 rounded-md mx-auto p-6"
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
                        
                        <button
                            type="submit"
                            className="bg-[#9933FF] text-white p-2 rounded-3xl w-full hover:bg-[#822BD9]"
                        >
                            Giriş Yap
                        </button>

                        <div className=" items-center">
                        <div className='mt-3 '>
                                <Link className="nav-link text-sm text-[#555351] hover:underline" to={"/sifremi-unuttum"}>
                                    Şifremi Unuttum
                                </Link>
                            </div>
                            <div className='mt-6 '>
                            <a className="text-sm text-black-500">
                            Henüz üye değil misin?&nbsp;
                                </a>
                                <Link className="nav-link text-sm font-bold text-[#555351] hover:underline" to={"/kayit-ol"}>
                                    Kayıt Ol
                                </Link>
                            </div>
                        </div>
                    </Form>
                </Formik>

            </div>

            <div className="btn-rainbow-card-ik bg-white px-16 py-16 shadow-md w-96 text-center relative overflow-hidden rounded-2xl">
                <img
                    src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                    alt="ik-banner"
                    className=" rounded-md mx-auto p-5"
                    style={{ width: "90%", height: "auto" }}
                />
                <span className="text-[#110A3A] font-bold text-2xl mb-8 mt-8 block">
                    Aradığın <span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"&nbsp;</span>İş<span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"&nbsp;</span> Burada!
                </span>

                <hr className="border-t-2 border-green-500 my-5" />

                <button
                    type="submit"
                    className="bg-[#1E0F41] text-[#0FCDFA] p-2 rounded-3xl w-full"
                >
                    Başvur
                </button>
            </div>


        </div>
    );
}

export default SignInPage