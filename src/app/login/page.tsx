'use client'
import LinkRegister from './components/LinkRegister'
import LoginAndRegisterForms from './components/LoginAndRegisterForms'
import LoginAndRegisterHeader from './components/LoginAndRegisterHeader'
import LoginBanner from './components/LoginBanner'
import useAuthenticate from './hooks/useAuthenticate'

export default function Login() {
  const { handleLogin, handleRegister, isRegistered, setIsRegistered } =
    useAuthenticate()

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 sm:p-10 bg-base-200">
      <section className="w-full max-w-6xl flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 p-6 sm:p-8 bg-base-100 rounded-2xl">
        <div className="flex flex-col justify-between w-full lg:w-1/2 gap-8 lg:gap-0">
          <LoginAndRegisterHeader isRegistered={isRegistered} />
          <LoginAndRegisterForms
            isRegistered={isRegistered}
            handleLogin={handleLogin}
            handleRegister={handleRegister}
          />
          <LinkRegister
            isRegistered={isRegistered}
            onClickRegisterNow={() => setIsRegistered(false)}
            onClickBackToLogin={() => setIsRegistered(true)}
          />
        </div>
        <LoginBanner />
      </section>
    </div>
  )
}
