import React from 'react';
import { TriangleAlert, TrendingDown, CircleCheck } from 'lucide-react';

type IconType = 'warning' | 'trend' | 'check';

interface StockStatusCardProps {
    iconName: IconType
    count: string | number
    title: string
    description: string
    colorVariant: 'error' | 'warning' | 'success' | 'default'
}

const ICONS: Record<IconType, React.ReactNode> = {
    warning: <TriangleAlert size={24} />,
    trend: <TrendingDown size={24} />,
    check: <CircleCheck size={24} />,
};

export default function StockStatusCard({ iconName, count, title, description, colorVariant }: StockStatusCardProps) {
    const variants = {
        error: {
            border: 'border-l-red-500',
            bg: 'bg-red-400/20',
            text: 'text-red-500',
        },
        warning: {
            border: 'border-l-yellow-500',
            bg: 'bg-yellow-400/20',
            text: 'text-yellow-500',
        },
        success: {
            border: 'border-l-primary',
            bg: 'bg-primary/20',
            text: 'text-primary',
        },
        default: {
            border: 'border-l-base-content/20',
            bg: 'bg-base-200',
            text: 'text-base-content',
        },
    };

    const style = variants[colorVariant as keyof typeof variants] || variants.default;

    return (
        <div className={`card w-full bg-base-100 shadow-lg border-l-4 ${style.border} transition-all duration-300`}>
            <div className="card-body p-4 3xl:p-6">

                <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${style.bg} ${style.text}`}>
                        {ICONS[iconName]}
                    </div>
                    <div className={`text-6xl font-bold ${style.text}`}>
                        {count}
                    </div>
                </div>

                <div className="space-y-1">
                    <h2 className="card-title text-xl font-extrabold font-default text-base-content">
                        {title}
                    </h2>
                    <p className="text-md text-base-content/70 font-default">
                        {description}
                    </p>
                </div>

            </div>
        </div>
    );
};