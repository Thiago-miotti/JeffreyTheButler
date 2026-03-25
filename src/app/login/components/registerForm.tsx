import { KeyRound, Mail } from "lucide-react";

export default function RegisterForm() {
    return (
        <form className="flex flex-col gap-12 w-full px-6 -mt-16">
            <div className="flex flex-col gap-8 w-full px-6">
                <label className="input input-neutral bg-transparent border-black/50 rounded-2xl w-full">
                    <Mail className="opacity-50" />
                    <input
                        type="email"
                        required
                        placeholder="Email"
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
                <label className="input input-neutral bg-transparent border-black/50 rounded-2xl w-full">
                    <KeyRound className="opacity-50" />
                    <input
                        type="text"
                        required
                        placeholder="Confirmar senha"
                        pattern="[A-Za-z][A-Za-z0-9\-]*"
                        minLength={3}
                        maxLength={30}
                        title="Only letters, numbers or dash"
                    />
                </label>
            </div>
            <button className="btn btn-primary w-full text-white font-default font-bold text-lg">Cadastrar</button>
        </form>
    )
}