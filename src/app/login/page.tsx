"use client"
import LoginForm from "./components/loginForm"
import LoginWith from "./components/loginWith"
import TooManyOptions from "../../../public/LoginImage.png"
import JeffreyLogo from "../../../public/JeffreyLogo.png"
import Image from 'next/image'
import { useState } from "react"
import RegisterForm from "./components/registerForm"
import { redirect } from "next/navigation"

export default function Login() {
    const [isRegistered, setIsRegistered] = useState<boolean>(true)

    const handleRegister = () => {
        setIsRegistered(!isRegistered)
    }

    return (
        <div className="w-full min-h-screen flex items-center justify-center p-4 sm:p-10 bg-base-200">

            <section className="w-full max-w-6xl flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 p-6 sm:p-8 bg-base-100 rounded-2xl">

                <div className="flex flex-col justify-between w-full lg:w-1/2 gap-8 lg:gap-0">
                    <div className="flex flex-col items-center gap-6 lg:gap-8">
                        <Image src={JeffreyLogo} alt="Jeffrey Logo" width={150} height={150} />

                        <div className="flex flex-col items-center gap-4 lg:gap-6">
                            <h1 className="font-default text-3xl lg:text-4xl font-bold text-center text-neutral">
                                <span className="font-extrabold text-primary">Jeffrey </span>
                                está a suas ordens!
                            </h1>

                            {isRegistered ? (
                                <p className="font-default text-sm lg:text-md max-w-sm text-center text-neutral/60">
                                    Bem vindo de volta à sua residência organizada.
                                </p>
                            ) : (
                                <p className="font-default text-sm lg:text-md max-w-sm text-center text-neutral/60">
                                    Torne sua casa eficiente, economizando em suas compras.
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 mt-6 ">
                        {isRegistered ? (
                            <>
                                <LoginForm onClick={() => redirect('/dashboard')} />
                                <div>
                                    <div className="divider my-4 lg:my-6 text-sm text-neutral/50">Ou continue com</div>
                                    <LoginWith />
                                </div>
                            </>
                        ) : (
                            <RegisterForm />
                        )}
                    </div>

                    <div className="w-full flex justify-center mt-8 lg:mb-4">
                        {isRegistered ? (
                            <p className="font-default text-sm lg:text-base font-semibold text-neutral">
                                Não é um membro? <span className="text-primary font-bold cursor-pointer hover:underline" onClick={handleRegister}>Cadastre-se agora</span>
                            </p>
                        ) : (
                            <p className="font-default text-sm lg:text-base font-semibold text-neutral">
                                Já tem cadastro? <span className="text-primary font-bold cursor-pointer hover:underline" onClick={handleRegister}>Voltar para login</span>
                            </p>
                        )}
                    </div>
                </div>

                <div className="hidden lg:flex w-full lg:w-1/2">
                    <div className="bg-primary/5 w-full h-full rounded-2xl flex flex-col items-center justify-center gap-12 p-10">
                        <Image src={TooManyOptions} alt="Drawing of savings account" width={500} height={300} className="w-auto h-auto object-contain max-w-full" />
                        <p className="max-w-md text-center text-xl lg:text-2xl font-default font-regular text-neutral">
                            Deixe sua vida mais facil e organizada com <span className="text-primary font-extrabold">Jeffrey The Butler</span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}