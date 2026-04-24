type LinkRegisterProps = {
  isRegistered: boolean
  onClickRegisterNow: () => void
  onClickBackToLogin: () => void
}

export default function LinkRegister({
  isRegistered,
  onClickRegisterNow,
  onClickBackToLogin,
}: LinkRegisterProps) {
  return (
    <div className="w-full flex justify-center mt-8 lg:mb-4">
      {isRegistered ? (
        <p className="font-default text-sm lg:text-base font-semibold text-neutral">
          Não é um membro?{' '}
          <button
            type="button"
            className="text-primary font-bold cursor-pointer hover:underline"
            onClick={onClickRegisterNow}
          >
            Cadastre-se agora
          </button>
        </p>
      ) : (
        <p className="font-default text-sm lg:text-base font-semibold text-neutral">
          Já tem cadastro?{' '}
          <button
            type="button"
            className="text-primary font-bold cursor-pointer hover:underline"
            onClick={onClickBackToLogin}
          >
            Voltar para login
          </button>
        </p>
      )}
    </div>
  )
}
