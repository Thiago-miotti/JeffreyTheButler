import { Product } from "@/types/product";

export const initialProducts: Product[] = [
    { id: 1, name: "Arroz Branco", category: "Grãos", quantity: 2, unit: "kg", minQuantity: 3, lastUpdate: "05/04/2026", status: "Ok" },
    { id: 2, name: "Feijão Carioca", category: "Grãos", quantity: 1, unit: "kg", minQuantity: 2, lastUpdate: "03/04/2026", status: "AlmostDone" },
    { id: 3, name: "Leite Integral", category: "Laticínios", quantity: 6, unit: "L", minQuantity: 4, lastUpdate: "07/04/2026", status: "Critical" },
    { id: 4, name: "Queijo Mussarela", category: "Laticínios", quantity: 0.3, unit: "kg", minQuantity: 0.5, lastUpdate: "06/04/2026", status: "Ok" },
    { id: 5, name: "Sabão em Pó", category: "Limpeza", quantity: 1, unit: "kg", minQuantity: 1, lastUpdate: "01/04/2026", status: "Ok" },
    { id: 6, name: "Detergente", category: "Limpeza", quantity: 3, unit: "un", minQuantity: 2, lastUpdate: "02/04/2026", status: "Ok" },
    { id: 7, name: "Shampoo", category: "Higiene", quantity: 1, unit: "un", minQuantity: 1, lastUpdate: "04/04/2026", status: "Ok" },
    { id: 8, name: "Pasta de Dente", category: "Higiene", quantity: 2, unit: "un", minQuantity: 1, lastUpdate: "04/04/2026", status: "Ok" },
    { id: 9, name: "Água Mineral", category: "Bebidas", quantity: 12, unit: "un", minQuantity: 6, lastUpdate: "07/04/2026", status: "Ok" },
    { id: 10, name: "Azeite Extra Virgem", category: "Temperos", quantity: 0.5, unit: "L", minQuantity: 0.5, lastUpdate: "02/04/2026", status: "Ok" },
    { id: 11, name: "Sal Refinado", category: "Temperos", quantity: 1, unit: "kg", minQuantity: 0.5, lastUpdate: "01/04/2026", status: "Ok" },
    { id: 12, name: "Atum em Lata", category: "Enlatados", quantity: 0, unit: "un", minQuantity: 3, lastUpdate: "28/03/2026", status: "Ok" },
];