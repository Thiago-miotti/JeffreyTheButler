import Image from 'next/image'
import TooManyOptions from '../../../../public/LoginImage.png'

export default function LoginBanner() {
  return (
    <div className="hidden lg:flex w-full lg:w-1/2">
      <div className="bg-primary/5 w-full h-full rounded-2xl flex flex-col items-center justify-center gap-12 p-10">
        <Image
          src={TooManyOptions}
          alt="Drawing of savings account"
          width={500}
          height={300}
          className="w-auto h-auto object-contain max-w-full"
        />
        <p className="max-w-md text-center text-xl lg:text-2xl font-default font-regular text-neutral">
          Deixe sua vida mais facil e organizada com{' '}
          <span className="text-primary font-extrabold">Jeffrey The Butler</span>
        </p>
      </div>
    </div>
  )
}
