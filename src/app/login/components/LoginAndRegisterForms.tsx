import type { UserLoginFormData, UserRegisterFormData } from '@/types/user'
import LoginForm from './loginForm'
import LoginWith from './loginWith'
import RegisterForm from './registerForm'

type LoginAndRegisterFormsProps = {
  isRegistered: boolean
  handleLogin: (data: UserLoginFormData) => void
  handleRegister: (data: UserRegisterFormData) => void
}

export default function LoginAndRegisterForms({
  isRegistered,
  handleLogin,
  handleRegister,
}: LoginAndRegisterFormsProps) {
  return (
    <div className="flex flex-col gap-8 ">
      {isRegistered ? (
        <>
          <LoginForm onDataSubmit={handleLogin} />
          <div>
            <div className="divider my-4 lg:my-6 text-sm text-neutral/50">
              Ou continue com
            </div>
            <LoginWith />
          </div>
        </>
      ) : (
        <RegisterForm onDataSubmit={handleRegister} />
      )}
    </div>
  )
}
