import React from 'react'

type Props = {}

const SignInPage = (props: Props) => {
    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        // Giriş işlemleri burada gerçekleştirilebilir
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96 text-center relative overflow-hidden border-4 border-solid border-purple-500 rounded-md mr-5">
                <img
                    src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                    alt="tobeto-banner"
                    className="mb-5 mt-5 rounded-md mx-auto"
                    style={{ width: "100%", height: "auto" }}
                />
                <form onSubmit={handleSignIn}>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="E-Posta"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Şifre"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <a href="#" className="text-sm text-purple-500 hover:underline">
                                Şifremi Unuttum
                            </a>
                        </div>
                        <div>
                            <a href="#" className="text-sm text-purple-500 hover:underline">
                                Kayıt Ol
                            </a>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-purple-600 text-white p-2 rounded-md w-full hover:bg-purple-700"
                    >
                        Giriş Yap
                    </button>
                </form>
            </div>


            <div className="bg-white p-8 rounded shadow-md w-96 text-center relative overflow-hidden border-4 border-solid border-indigo-500 rounded-md">
                <img
                    src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                    alt="ik-banner"
                    className="mb-6 mt-6 rounded-md mx-auto"
                    style={{ width: "100%", height: "auto" }}
                />
                <span className="text-blue font-bold text-3xl mb-8 mt-8 block">
                    Aradığın <span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"&nbsp;</span>İş<span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"&nbsp;</span> Burada!
                </span>

                <hr className="border-t-2 border-green-500 my-5" />

                <button
                    type="submit"
                    className="bg-indigo-950 text-white p-2 rounded-md w-full"
                >
                    Başvur
                </button>
            </div>

        </div>
    );
}

export default SignInPage