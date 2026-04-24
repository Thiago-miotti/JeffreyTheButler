import { SupermarketShopping } from '@/types/supermarketShopping'

export function groupByMonth(data: SupermarketShopping[]) {
  return data.reduce<Record<string, SupermarketShopping[]>>((acc, buy) => {
    const label = new Date(buy.purchaseDate).toLocaleDateString('pt-BR', {
      month: 'long',
      timeZone: 'America/Sao_Paulo',
    })

    acc[label] ??= []
    acc[label].push(buy)
    return acc
  }, {})
}
