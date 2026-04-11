import { KeyRound, Mail } from "lucide-react";

interface LoginProps {
    onClick?: () => void
}

export default function LoginForm({ onClick }: LoginProps) {
    return (
        <form className="flex flex-col gap-4 w-full px-0 sm:px-6">
            <div className="flex flex-col gap-4 sm:gap-6 w-full">
                <label className="input input-neutral bg-transparent border-black/50 rounded-2xl w-full flex items-center gap-2">
                    <Mail className="opacity-50 min-w-5" />
                    <input
                        type="email"
                        required
                        placeholder="Email"
                        className="w-full"
                    />
                </label>
                <label className="input input-neutral bg-transparent border-black/50 rounded-2xl w-full flex items-center gap-2">
                    <KeyRound className="opacity-50 min-w-5" />
                    <input
                        type="password"
                        required
                        placeholder="Senha"
                        pattern="[A-Za-z][A-Za-z0-9\-]*"
                        minLength={3}
                        maxLength={30}
                        title="Only letters, numbers or dash"
                        className="w-full"
                    />
                </label>
            </div>
            <div className="flex justify-end w-full">
                <button type="button" className="btn btn-link text-xs sm:text-sm p-0 min-h-0 h-auto">Esqueci minha senha?</button>
            </div>
            <button type="button" className="btn btn-primary w-full text-white font-default font-bold text-lg mt-2" onClick={onClick}>Entrar</button>
        </form>
    )
}