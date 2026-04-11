import MainWrapper from "@/components/mainWrapper";
import { supermarketShoping } from "@/mocks/shoppingHistory";
import HeaderDashboard from "./components/headerDashboard";
import ShoppingHistory from "./components/shoppingHistory";
import StockStatusCard from "./components/statsCards";
import TabsDashboard from "./components/tabsDashboard";
import TotalItensAndCategoriesCard from "./components/totalItensAndCategoriesCard";

export default function Dashboard() {
    return (
        <MainWrapper>
            <div className="3xl:mt-4 w-full flex flex-col justify-center h-full py-2 3xl:py-6 gap-4 3xl:gap-20">

                {/* Header e cards de totais */}
                <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
                    <HeaderDashboard />
                    <div className="w-full md:w-auto">
                        <TotalItensAndCategoriesCard totalCategories={8} totalItens={50} />
                    </div>
                </div>

                {/* Cards de status de estoque */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 md:gap-8">
                    <StockStatusCard
                        iconName="warning"
                        colorVariant="error"
                        count="2"
                        title="Crítico"
                        description="Reponha imediatamente para evitar falta."
                    />
                    <StockStatusCard
                        iconName="trend"
                        colorVariant="warning"
                        count="25"
                        title="Acabando"
                        description="Adicione à sua próxima lista de compras."
                    />
                    <StockStatusCard
                        iconName="check"
                        colorVariant="success"
                        count="35"
                        title="Em Dia(OK)"
                        description="Estoque saudável e controlado."
                    />
                </div>

                {/* Tabs */}
                <div className="flex gap-8">
                    <TabsDashboard />
                    {/* Add items + Shopping History */}
                    <ShoppingHistory data={supermarketShoping} />
                </div>

            </div>
        </MainWrapper>
    );
}