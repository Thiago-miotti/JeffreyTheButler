import { SupermarketShopping } from "@/types/supermarketShopping";
import FormatToBRL from "@/utils/formatCurrency";
import { formatISOToBRL } from "@/utils/formatDate";
import { groupByMonth } from "@/utils/groupByMonth";
import { ReceiptText, ShoppingCart } from "lucide-react";

interface ShoppingHistoryProps {
    data: SupermarketShopping[];
}

export default function ShoppingHistory({ data }: ShoppingHistoryProps) {
    const grouped = groupByMonth(data);

    function calculateTotal() {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        const total = data
            .filter((buy) => {
                const date = new Date(buy.purchaseDate);
                return (
                    date.getMonth() === currentMonth &&
                    date.getFullYear() === currentYear
                );
            })
            .reduce((acc, buy) => acc + buy.puchaseTotal, 0);

        return FormatToBRL(total);
    }

    return (
        <div className="w-full bg-base-100 p-6 rounded-lg flex flex-col gap-4 3xl:h-full max-w-100">
            <div className="flex gap-2">
                <ShoppingCart className="size-6 text-primary" />
                <h1 className="text-xl font-semibold text-neutral">Últimas Compras</h1>
            </div>
            <div className="stats bg-base-100 border-base-300 border w-full">
                <div className="stat">
                    <div className="stat-title text-sm font-semibold">Gasto Total Do Mês</div>
                    <div className="stat-value text-primary">{calculateTotal()}</div>
                </div>
            </div>
            <div className="overflow-auto flex flex-col gap-4 max-h-62">
                {Object.entries(grouped).map(([month, buys]) => (
                    <div key={month} className="flex flex-col gap-2">

                        <p className="text-neutral/50 font-semibold capitalize">
                            {month}
                        </p>

                        {buys.map((buy) => (
                            <div key={buy.id} className="w-full bg-transparent border border-base-300 px-4 py-1 rounded-lg flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-xl text-neutral font-semibold">{buy.supermarketName}</h1>
                                    <div className="flex gap-4">
                                        <p className="text-black/60 font-semibold">{formatISOToBRL(buy.purchaseDate.toString())}</p>
                                        <p className="text-black/60 font-semibold">{FormatToBRL(buy.puchaseTotal)}</p>
                                    </div>
                                </div>
                                <ReceiptText className="size-6 text-black/50 cursor-pointer" />
                            </div>
                        ))}

                    </div>
                ))}
            </div>
        </div>
    )
}