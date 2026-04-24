/* eslint-disable react-hooks/incompatible-library */
import { KeyRound, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import type { UserRegisterFormData } from '@/types/user'
import { cn } from '@/utils/cn'

interface RegisterProps {
  onDataSubmit: (data: UserRegisterFormData) => void
}

export default function RegisterForm({ onDataSubmit }: RegisterProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserRegisterFormData>()

  const onSubmit = handleSubmit((data) => {
    const { confirmPassword, ...dataToSend } = data
    onDataSubmit(dataToSend)
  })

  return (
    <form
      className="flex flex-col gap-6 sm:gap-8 w-full px-0 sm:px-6"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-4 sm:gap-6 w-full">
        <label
          className={cn(
            'input input-neutral bg-transparent border-black/50 rounded-2xl w-full flex items-center gap-2',
            errors.name && 'border-error',
          )}
        >
          <User className="opacity-50 min-w-5" />
          <input
            type="text"
            placeholder="Nome"
            className="w-full"
            {...register('name', {
              required: 'Nome é obrigatório!',
            })}
          />
        </label>
        {errors.name && <p className="text-red-500 -mt-4">{errors.name.message}</p>}
        <label
          className={cn(
            'input input-neutral bg-transparent border-black/50 rounded-2xl w-full flex items-center gap-2',
            errors.email && 'border-error',
          )}
        >
          <Mail className="opacity-50 min-w-5" />
          <input
            type="email"
            placeholder="Email"
            className="w-full"
            {...register('email', {
              required: 'Email é obrigatório!',
            })}
          />
        </label>
        {errors.email && <p className="text-red-500 -mt-4">{errors.email.message}</p>}
        <label
          className={cn(
            'input input-neutral bg-transparent border-black/50 rounded-2xl w-full flex items-center gap-2',
            errors.password && 'border-error',
          )}
        >
          <KeyRound className="opacity-50 min-w-5" />
          <input
            type="password"
            placeholder="Senha"
            minLength={3}
            maxLength={30}
            className="w-full"
            {...register('password', {
              required: 'Senha é obrigatória!',
            })}
          />
        </label>
        {errors.password && (
          <p className="text-red-500 -mt-4">{errors.password.message}</p>
        )}
        <label
          className={cn(
            'input input-neutral bg-transparent border-black/50 rounded-2xl w-full flex items-center gap-2',
            errors.confirmPassword && 'border-error',
          )}
        >
          <KeyRound className="opacity-50 min-w-5" />
          <input
            type="password"
            placeholder="Confirmar senha"
            minLength={3}
            maxLength={30}
            className="w-full"
            {...register('confirmPassword', {
              validate: (val) => {
                if (watch('password') !== val) {
                  return 'As senhas não são compativeis!'
                }
              },
              required: 'Confirmar a senha é obrigatório!',
            })}
          />
        </label>
        {errors.confirmPassword && (
          <p className="text-red-500 -mt-4">{errors.confirmPassword.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full text-white font-default font-bold text-lg mt-2"
      >
        Cadastrar
      </button>
    </form>
  )
}
