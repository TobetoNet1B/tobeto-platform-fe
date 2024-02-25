import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormikProvider, useFormik } from 'formik'
import FormInput from 'utils/FormInput/FormInput';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ContractsModal from 'components/ContractsModal/ContractsModal';
import { passwordValidator } from 'utils/customValidations';
import { number, object, string } from 'yup';
import authService from 'services/authService';
import * as Yup from 'yup';
type Props = {}

const SignUpPage = (props: Props) => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const openModal = () => {
        const modalElement = document.getElementById('my_modal_2') as HTMLDialogElement | null;

        if (modalElement) {
            modalElement.showModal();
        }
    };

    const handleSubmit = async (values: { email: string; password: string; firstName: string; lastName: string; }) => {
        console.log(values);
        authService.register(values)
            .then(async response => {
                console.log(response);
                //navigate('/giris');
            })
            .catch(error => {
                console.error('Kayıt sırasında bir hata oluştu:', error);
                setError('Kayıt sırasında bir hata oluştu.');
            });
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordRepeat: '',
            firstName: '',
            lastName: ''
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
                )*/,
            passwordRepeat: string()
                .oneOf([Yup.ref('password'), undefined], "Şifreler eşleşmiyor.")
                .required("Şifre tekrarını girmek zorunludur."),
            firstName: string().required("Ad girmek zorunludur."),
            lastName: string().required("Soyad girmek zorunludur.")
        }),
        onSubmit: async (values) => { handleSubmit(values) }
    });


    return (
        <div className="flex flex-col sm:flex-row items-stretch justify-center min-h-full py-16 bg-gray-100">
            <div className="btn-rainbow-card bg-white px-12 py-12 shadow-md w-full sm:w-96 text-center relative overflow-hidden rounded-2xl mb-4 sm:mb-0  mr-5">
                <img
                    src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                    alt="tobeto-banner"
                    className="mb-5 mt-5 rounded-md mx-auto p-4"
                    style={{ width: "100%", height: "auto" }}
                />
                <span className="text-blue font-bold text-3xl mb-3 block">
                    Hemen Kayıt Ol
                </span>
                <FormikProvider value={formik}>
                    <form onSubmit={formik.handleSubmit} className=''>
                        <FormInput placeHolder='Ad' name="firstName" inputStyle='input'
                            value={formik.values.firstName} className='lg:col-span-6 col-span-12 my-5' />
                        <FormInput placeHolder='Soyad' name="lastName" inputStyle='input'
                            value={formik.values.lastName} className='lg:col-span-6 col-span-12 my-5' />
                        <FormInput placeHolder='E-Posta' name="email" inputStyle='input'
                            value={formik.values.email} className='lg:col-span-6 col-span-12 my-5' />
                        <FormInput placeHolder='Şifre' name="password" inputStyle='input' type='password'
                            value={formik.values.password} className='lg:col-span-6 col-span-12 my-5' />
                        <FormInput placeHolder='Şifre Tekrar' name="passwordRepeat" inputStyle='input' type='password'
                            value={formik.values.passwordRepeat} className='lg:col-span-6 col-span-12 my-5' />

                        <button
                            type="submit"
                            className="bg-[#9933FF] text-white p-2 rounded-3xl w-full hover:bg-[#822BD9]"
                            onClick={openModal}
                        >
                            Kayıt Ol
                            <ContractsModal />
                        </button>
                        {error && <div className="text-red-500 mt-2">{error}</div>}

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
                    </form>
                </FormikProvider>
            </div>

            <div className="btn-rainbow-card-ik bg-white px-12 py-16 shadow-md w-full sm:w-96 text-center relative overflow-hidden rounded-2xl ">
                <img
                    src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                    alt="ik-banner"
                    className="mb-20 mt-28 rounded-md mx-auto p-5"
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