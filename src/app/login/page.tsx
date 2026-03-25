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
        <div className="w-full h-screen flex justify-center overflow-clip p-10 bg-base-200">
            <section className="w-fit flex justify-between gap-12 p-6 bg-base-100 rounded-xl">
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col items-center gap-8">
                        <Image src={JeffreyLogo} alt="Jeffrey Logo" width={180} height={180} className="mt-8" />
                        <div className="flex flex-col items-center gap-6">
                            <h1 className="font-default text-4xl font-bold text-center max-w-115 text-neutral "> <span className="font-extrabold text-primary">
                                Jeffrey
                            </span> está a suas ordens!</h1>
                            {isRegistered ? (
                                <p className="font-default text-md max-w-125 text-center text-neutral/60">Bem vindo de volta à sua residência organizada.</p>
                            ) : (
                                <p className="font-default text-md max-w-125 text-center text-neutral/60">Torne sua casa eficiente, economizando em suas compras.</p>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        {isRegistered ? (
                            <>
                                <LoginForm onClick={() => redirect('/dashboard')} />
                                <div>
                                    <div className="divider my-6">Ou continue com</div>
                                    <LoginWith />
                                </div>
                            </>
                        ) : (
                            <RegisterForm />
                        )}
                    </div>
                    <div className="w-full flex  justify-center mb-12">
                        {isRegistered ? (
                            <p className="font-default font-semibold text-neutral">Não é um membro? <span className="text-primary font-bold cursor-pointer hover:underline" onClick={() => handleRegister()}>Cadastre-se agora</span></p>

                        ) : (
                            <p className="font-default font-semibold text-neutral">Já tem cadastro? <span className="text-primary font-bold cursor-pointer hover:underline" onClick={() => handleRegister()}>Voltar para login</span></p>

                        )}
                    </div>
                </div>
                <div className="h-full w-175">
                    <div className="bg-primary/5 w-full h-full rounded-xl flex flex-col items-center justify-center gap-12">
                        <Image src={TooManyOptions} alt="Drawing of savings account" width={500} height={300} />
                        <p className="max-w-120 text-center text-2xl font-default font-regular text-neutral">Deixe sua vida mais facil e organizada com <span className="text-primary font-extrabold">Jeffrey The Butler</span></p>
                    </div>
                </div>
            </section>

        </div>
    )
}