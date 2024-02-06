import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ContractsModal from 'utils/ContractsModal';
import { passwordValidator } from 'utils/customValidations';
import { number, object, string } from 'yup';

type Props = {}

interface SignUpFormValues {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}


const SignUpPage = (props: Props) => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const initialValues = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    };

    const openModal = () => {
        const modalElement = document.getElementById('my_modal_2') as HTMLDialogElement | null;

        if (modalElement) {
            modalElement.showModal();
        }
    };

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
            )*/,
        firstName: string().required("Ad girmek zorunludur."),
        lastName: string().required("Soyad girmek zorunludur.")
    });

    const handleSubmit = async (values: { email: string; password: string; firstName: string; lastName: string; }) => {
        try {
            const response = await fetch('http://localhost:60805/api/Auth/Register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                navigate('/platform');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Kayıt işlemi başarısız.');
            }
        } catch (error) {
            console.error('Kayıt sırasında bir hata oluştu:', error);
            setError('Kayıt sırasında bir hata oluştu.');
        }
    };

    return (
        <div className="items-center grid lg:grid-flow-col lg:gap-5 justify-center min-h-ful py-16 bg-gray-100">
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
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <Form>
                        <div className="mb-4">
                            <Field
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="Ad"
                            />
                            <ErrorMessage name="firstName"></ErrorMessage>
                        </div>
                        <div className="mb-4">
                            <Field
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="Soyad"
                            />
                            <ErrorMessage name="lastName"></ErrorMessage>
                        </div>
                        <div className="mb-4">
                            <Field
                                type="text"
                                id="email"
                                name="email"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="E-Posta"
                            />
                            <ErrorMessage name="email"></ErrorMessage>
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
                            onClick={openModal}
                        >
                            Kayıt Ol
                            <ContractsModal/>
                        </button>
                        {error && <div className="error-message">{error}</div>}
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