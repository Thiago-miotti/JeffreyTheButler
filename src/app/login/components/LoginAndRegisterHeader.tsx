import Image from 'next/image'
import JeffreyLogo from '../../../../public/JeffreyLogo.png'

type LoginAndRegisterHeaderProps = {
  isRegistered: boolean
}

export default function LoginAndRegisterHeader({
  isRegistered,
}: LoginAndRegisterHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-6 lg:gap-8">
      <Image src={JeffreyLogo} alt="Jeffrey Logo" width={150} height={150} />

      <div className="flex flex-col items-center gap-4 lg:gap-6">
        <h1 className="font-default text-3xl lg:text-4xl font-bold text-center text-neutral">
          <span className="font-extrabold text-primary">Jeffrey </span>
          está a suas ordens!
        </h1>

        {isRegistered ? (
          <p className="font-default text-sm lg:text-md max-w-sm text-center text-neutral/60">
            Bem vindo de volta à sua residência organizada.
          </p>
        ) : (
          <p className="font-default text-sm lg:text-md max-w-sm text-center text-neutral/60">
            Torne sua casa eficiente, economizando em suas compras.
          </p>
        )}
      </div>
    </div>
  )
}
