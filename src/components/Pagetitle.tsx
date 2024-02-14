import { cn } from '@/lib/utils';
import React from 'react'

type Props = {
    title: string;
    className?: string;
}

export default function Pagetitle({ title, className }: Props) {
    return (
        <h1 className={cn("text-2xln font-semibold", className)}>{title}</h1>
    )
}
