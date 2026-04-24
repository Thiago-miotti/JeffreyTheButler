export type Status = 'Ok' | 'AlmostDone' | 'Critical'

const statusConfig: Record<Status, { label: string; badge: string }> = {
  Ok: { label: 'Em dia', badge: 'badge badge-success' },
  AlmostDone: { label: 'Acabando', badge: 'badge badge-warning' },
  Critical: { label: 'Crítico', badge: 'badge badge-error' },
}

export function getStatusBadgeClass(status: Status): string {
  return statusConfig[status].badge
}

export function getStatusLabel(status: Status): string {
  return statusConfig[status].label
}

export const STATUS: Status[] = ['Ok', 'AlmostDone', 'Critical']
