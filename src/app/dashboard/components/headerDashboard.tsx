export default function HeaderDashboard() {
    return (
        <div className="flex flex-col gap-2">
            <p className="font-default text-neutral/50 text-md 3xl:text-lg font-semibold">STATUS DA RESIDÊNCIA</p>
            <h1 className="font-default text-4xl 3xl:text-6xl font-bold text-neutral text-shadow-sm">
                Seu Lar, <span className="text-rotate text-primary">
                    <span>
                        <span>REFINADO</span>
                        <span>ORGANIZADO</span>
                        <span>AUTOMATIZADO</span>
                        <span>INTELIGENTE</span>
                    </span>
                </span>
            </h1>
        </div>
    )
}