// components/StatusBadge.tsx
import { Status, getStatusBadgeClass, getStatusLabel } from "@/types/status";

interface StatusBadgeProps {
    status: Status;
}

export function StatusBadge({ status }: StatusBadgeProps) {
    return (
        <span className={getStatusBadgeClass(status)}>
            {getStatusLabel(status)}
        </span>
    );
}

// Uso:
// <StatusBadge status="active" />
// <StatusBadge status="pending" />