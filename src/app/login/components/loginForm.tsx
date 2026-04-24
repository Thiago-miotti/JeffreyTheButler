import { KeyRound, Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import type { UserLoginFormData } from '@/types/user'

interface LoginProps {
  onDataSubmit: (data: UserLoginFormData) => void
}

export default function LoginForm({ onDataSubmit }: LoginProps) {
  const { register, handleSubmit } = useForm<UserLoginFormData>()

  const onSubmit = handleSubmit((data) => {
    onDataSubmit(data)
  })

  return (
    <form className="flex flex-col gap-4 w-full px-0 sm:px-6" onSubmit={onSubmit}>
      <div className="flex flex-col gap-4 sm:gap-6 w-full">
        <label className="input input-neutral bg-transparent border-black/50 rounded-2xl w-full flex items-center gap-2">
          <Mail className="opacity-50 min-w-5" />
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full"
            {...register('email')}
          />
        </label>
        <label className="input input-neutral bg-transparent border-black/50 rounded-2xl w-full flex items-center gap-2">
          <KeyRound className="opacity-50 min-w-5" />
          <input
            type="password"
            required
            placeholder="Senha"
            className="w-full"
            {...register('password')}
          />
        </label>
      </div>
      <div className="flex justify-end w-full">
        <button
          type="button"
          className="btn btn-link text-xs sm:text-sm p-0 min-h-0 h-auto"
        >
          Esqueci minha senha?
        </button>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full text-white font-default font-bold text-lg mt-2"
      >
        Entrar
      </button>
    </form>
  )
}
