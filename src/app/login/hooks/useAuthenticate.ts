// biome-ignore assist/source/organizeImports: <explanation>
import { toast } from 'sonner'
import { useState } from 'react'
import { signIn, signUp } from '@/utils/auth-client'
import type { UserLoginFormData, UserRegisterFormData } from '@/types/user'
import { redirect } from 'next/navigation'

export default function useAuthenticate() {
  const [isRegistered, setIsRegistered] = useState<boolean>(true)

  const handleLogin = async (data: UserLoginFormData) => {
    const { error } = await signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: '/dashboard',
    })

    if (error) {
      toast.error('Algo deu problema!', {
        style: {
          background: '#efc6c2',
          borderColor: '#efc6c2',
        },
        closeButton: true,
      })
    }
  }

  const handleRegister = async (data: UserRegisterFormData) => {
    const { data: betterAuthData, error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      callbackURL: '/dashboard',
    })

    if (betterAuthData) {
      toast.error('Cadastro feito com sucesso!', {
        style: {
          background: '#5ca300',
          borderColor: '#5ca300',
          color: 'white',
        },
        closeButton: true,
      })
      redirect('/dashboard')
    }

    if (error) {
      toast.error('Algo deu errado!', {
        style: {
          background: '#efc6c2',
          borderColor: '#efc6c2',
        },
        closeButton: true,
      })
    }
  }

  return {
    handleLogin,
    handleRegister,
    isRegistered,
    setIsRegistered,
  }
}
