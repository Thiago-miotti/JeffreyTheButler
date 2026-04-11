import { ShelvingUnit } from "lucide-react";

export default function HeaderInventory() {
    return (
        <div className="flex items-center gap-4 pt-2">
            <div className="w-14 h-14 bg-base-100 rounded-lg flex items-center justify-center">
                <ShelvingUnit className="text-primary size-8" />
            </div>
            <h1 className="font-default text-3xl sm:text-4xl lg:text-6xl font-bold text-neutral text-shadow-sm">
                Despensa
            </h1>
        </div>
    )
}