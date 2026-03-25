import { KeyRound, Mail } from "lucide-react";

interface LoginProps {
    onClick?: () => void
}

export default function LoginForm({ onClick }: LoginProps) {
    return (
        <form className="flex flex-col gap-2 w-full px-6">
            <div className="flex flex-col gap-8 w-full px-6">
                <label className="input input-neutral bg-transparent border-black/50 rounded-2xl w-full">
                    <Mail className="opacity-50" />
                    <input
                        type="text"
                        required
                        placeholder="Email"
                        pattern="[A-Za-z][A-Za-z0-9\-]*"
                        minLength={3}
                        maxLength={30}
                        title="Only letters, numbers or dash"
                    />
                </label>
                <label className="input input-neutral bg-transparent border-black/50 rounded-2xl w-full">
                    <KeyRound className="opacity-50" />
                    <input
                        type="text"
                        required
                        placeholder="Senha"
                        pattern="[A-Za-z][A-Za-z0-9\-]*"
                        minLength={3}
                        maxLength={30}
                        title="Only letters, numbers or dash"
                    />
                </label>
            </div>
            <div className="flex justify-end w-full">
                <button className="btn btn-link">Esqueci minha senha?</button>
            </div>
            <button className="btn btn-primary w-full text-white font-default font-bold text-lg" onClick={onClick}>Entrar</button>
        </form>
    )
}