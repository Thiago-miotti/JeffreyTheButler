import { Search } from 'lucide-react'
import MainWrapper from '@/components/mainWrapper'
import Table from '@/components/ui/table'
import { initialProducts } from '@/mocks/products'
import { Categories } from '@/types/categories'
import { getStatusLabel, STATUS } from '@/types/status'
import HeaderInventory from './components/headerInventory'

export default function Inventory() {
  return (
    <MainWrapper>
      <div className="flex flex-col gap-4 3xl:gap-12 py-2 3xl:py-10 h-full">
        {/* header */}
        <HeaderInventory />
        <div className="flex flex-col gap-3 h-full justify-end 3xl:justify-start">
          <div className="flex gap-4">
            <label className="input">
              <Search className="size-5 text-gray-500" />
              <input type="search" required placeholder="Search" />
            </label>
            <select defaultValue="Pick a color" className="select">
              <option disabled={true}>Status</option>
              {STATUS.map((status) => (
                <option key={status}>{getStatusLabel(status)}</option>
              ))}
            </select>
            <select defaultValue="Pick a color" className="select">
              <option disabled={true}>Categoria</option>
              {Categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <Table containerClassName="h-[500px]" data={initialProducts} />
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}
