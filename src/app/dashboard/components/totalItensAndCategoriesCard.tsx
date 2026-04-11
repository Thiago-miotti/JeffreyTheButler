
interface TotalItensAndCategoriesCardProps {
    totalItens: number
    totalCategories: number
}

export default function TotalItensAndCategoriesCard({ totalItens, totalCategories }: TotalItensAndCategoriesCardProps) {
    return (
        <div className="card bg-base-100 w-auto shadow-sm border border-base-300">
            <div className="flex justify-between w-full p-2 3xl:p-4 gap-4">
                <div>
                    <p className="text-xs 3xl:text-sm font-semibold font-default text-neutral/70 uppercase">Total de itens</p>
                    <h2 className="text-2xl 3xl:text-3xl font-bold font-default text-primary text-right">{totalItens}</h2>
                </div>
                <div className="divider divider-horizontal mx-0 px-0"></div>
                <div>
                    <p className="text-xs 3xl:text-sm font-semibold font-default text-neutral/70 uppercase">Categorias</p>
                    <h2 className="text-2xl 3xl:text-3xl font-bold font-default text-primary text-right">{totalCategories}</h2>
                </div>
            </div>
        </div>
    )
}