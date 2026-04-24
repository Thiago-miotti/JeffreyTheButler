'use client'

import { useState, useEffect, useCallback } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
}

interface CountdownProps {
  targetDate: Date
  onExpire?: () => void
}

function calcTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
  }
}

export function Countdown({ targetDate, onExpire }: CountdownProps) {
  const [time, setTime] = useState<TimeLeft>(() => calcTimeLeft(targetDate))

  const isExpired = useCallback(
    (t: TimeLeft) => t.days === 0 && t.hours === 0 && t.minutes === 0,
    [],
  )

  useEffect(() => {
    const id = setInterval(() => {
      const next = calcTimeLeft(targetDate)
      setTime(next)
      if (isExpired(next)) {
        clearInterval(id)
        onExpire?.()
      }
    }, 60_000) // atualiza a cada minuto
    return () => clearInterval(id)
  }, [targetDate, onExpire, isExpired])

  const units: { value: number; label: string }[] = [
    { value: time.days, label: 'dias' },
    { value: time.hours, label: 'horas' },
    { value: time.minutes, label: 'min' },
  ]

  return (
    <div className="flex items-end gap-2">
      {units.map(({ value, label }, i) => (
        <div key={label} className="flex items-end gap-2">
          <div className="flex items-end gap-1">
            <span className="countdown font-mono text-5xl text-primary font-bold">
              <span style={{ '--value': value } as React.CSSProperties} />
            </span>
            <span className="text-black/50 font-semibold">{label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
