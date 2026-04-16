import type { ReactNode } from "react"

type CardRowProps = {
    children: ReactNode
}

export function CardRow({ children }: CardRowProps) {
    return (
        <div className="-mx-4 overflow-x-auto px-4 pb-2 md:mx-0 md:px-0">
            <div className="flex gap-4">{children}</div>
        </div>
    )
}