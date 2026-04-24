'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import GraphImage from '../../../../public/visualData.svg'
import { Countdown } from './countdown'
import Table from '@/components/ui/table'
import { initialProducts } from '@/mocks/products'

const launch = new Date('2026-05-01T00:00:00')

export default function TabsDashboard() {
  return (
    <div className="tabs tabs-box col-span-1 lg:col-span-3">
      <input
        type="radio"
        name="my_tabs_6"
        className="tab [--tab-bg:#f5fce5] text-primary font-default tracking-widest font-semibold rounded-full"
        aria-label="Inteligência Artificial"
        defaultChecked
      />
      <div className="tab-content">
        <div className="flex flex-col md:flex-row">
          <div className="h-full p-2 3xl:p-6 flex flex-col gap-8 3xl:gap-12  justify-between">
            <div className="space-y-3">
              <h1 className="text-2xl md:text-4xl font-default font-bold tracking-wide">
                Sua Próxima Lista de Compras
              </h1>
              <p className="text-wrap max-w-150 text-base md:text-lg text-neutral/60">
                Jeffrey está analisando seu consumo para gerar uma lista personalizada
                baseada nas quantidades estimadas da sua despensa.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-black/50 font-semibold">
                Previsão Da Próxima Compra
              </h3>
              <Countdown
                targetDate={launch}
                onExpire={() => console.log('Dia de compras!')}
              />
            </div>
            <button type='button' className="btn btn-primary btn-lg text-white w-full md:max-w-75">
              Ver Lista de Compras
              <ArrowRight className="size-6" />
            </button>
          </div>
          <div className="hidden md:block">
            <Image
              src={GraphImage}
              alt="Graph"
              width={450}
              height={450}
              className="opacity-70"
            />
          </div>
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_6"
        className="tab [--tab-bg:#f5fce5] text-primary font-default tracking-widest font-semibold rounded-full"
        aria-label="Despensa"
      />
      <div className="tab-content pt-2">
        <Table containerClassName="h-90 3xl:h-120" data={initialProducts} />
      </div>
    </div>
  )
}
