import { Category } from '@/types/categories'
import { Status } from './status'

export interface Product {
  id: number
  name: string
  category: Category
  quantity: number
  unit: string
  minQuantity: number
  lastUpdate: string
  status: Status
}
