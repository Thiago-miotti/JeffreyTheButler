export function formatISOToBRL(isoDate: string): string {
    return new Date(isoDate).toLocaleDateString("pt-BR", {
        day:      "2-digit",
        month:    "2-digit",
        year:     "numeric",
        timeZone: "America/Sao_Paulo",
    });
}