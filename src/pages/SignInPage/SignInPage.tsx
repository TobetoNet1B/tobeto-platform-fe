import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormikProvider, useFormik } from 'formik'
import FormInput from 'utils/FormInput/FormInput';
import React, { useEffect, useState } from 'react'
import { passwordValidator } from 'utils/customValidations';
import { number, object, string } from 'yup';
import './SignInPage.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { jwtDecode } from 'jwt-decode';
import authService from 'services/authService';
import { ToastContainer } from 'react-toastify';

interface CustomJwtPayload {
    [key: string]: any;
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"?: string;
}


type Props = {}

const SignInPage = (props: Props) => {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = object({
        email: string().required("E-posta girmek zorunludur.").min(0),
        password: string()/*
            .required("Şifre girmek zorunludur.")
            .min(3, "Şifre en az 3 karakter olmalıdır.")
            .max(50)
            .test(
                "my-custom-rule",
                "En az 1 büyük, 1 küçük harf ve 1 rakam içermelidir.",
                passwordValidator,
            )*/
    });


    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (values: { email: string; password: string }) => {
        console.log(values);
        authService.login(values)
            .then(async response => {
                const data = response.data;
                const { token } = data.accessToken;
                localStorage.setItem('token', token);

                const decodedToken: CustomJwtPayload = jwtDecode(token);
                console.log(decodedToken);

                const userId = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
                if (userId) {
                    localStorage.setItem('userId', userId);
                    console.log("User ID found: " + userId);
                }


                navigate('/platform');
                window.location.reload();
            })
            .catch(error => {
                console.error('Error during authentication', error);
                setError('Error during authentication');
            });
    };


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        //enableReinitialize: true,
        validationSchema: object({
            email: string().required("E-posta girmek zorunludur.").min(0),
            password: string()
                .required("Şifre girmek zorunludur.")/*
                .min(3, "Şifre en az 3 karakter olmalıdır.")
                .max(50)
                .test(
                    "my-custom-rule",
                    "En az 1 büyük, 1 küçük harf ve 1 rakam içermelidir.",
                    passwordValidator,
                )*/
        }),
        onSubmit: async (values) => { handleSubmit(values) }
    });


    return (

        <div className="flex flex-col sm:flex-row items-stretch justify-center min-h-full py-16 bg-gray-100">
            <div className="btn-rainbow-card bg-white px-12 py-12 shadow-md w-full sm:w-96 text-center relative overflow-hidden rounded-2xl mb-4 sm:mb-0  mr-5">

                <img
                    src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                    alt="tobeto-banner"
                    className="mb-5 mt-5 rounded-md mx-auto p-6"
                    style={{ width: "100%", height: "auto" }}
                />

                <FormikProvider value={formik}>
                    <form onSubmit={formik.handleSubmit} className=''>
                        <FormInput placeHolder='E-Posta' name="email" inputStyle='input'
                            value={formik.values.email} className='lg:col-span-6 col-span-12 my-5' />
                        <FormInput placeHolder='Şifre' name="password" inputStyle='input' type='password'
                            value={formik.values.password} className='lg:col-span-6 col-span-12 my-5' />
                        <button
                            type="submit"
                            className="bg-[#9933FF] text-white p-2 rounded-3xl w-full hover:bg-[#822BD9]"
                        >
                            Giriş Yap
                        </button>
                        {error && <div className="text-red-500 mt-2">{error}</div>}

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

                    </form>
                </FormikProvider>

            </div>

            <div className="btn-rainbow-card-ik bg-white px-12 py-16 shadow-md w-full sm:w-96 text-center relative overflow-hidden rounded-2xl ">
                <img
                    src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                    alt="ik-banner"
                    className=" rounded-md mx-auto p-5"
                    style={{ width: "90%", height: "auto" }}
                />
                <span className="text-[#110A3A] font-bold text-2xl mb-10 mt-10 block">
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

            <ToastContainer />
        </div>
    );
}

export default SignInPage