"use client"

import { Search, SlidersHorizontal } from "lucide-react"

type SearchBarProps = {
    placeholder?: string
    value: string
    onChange: (value: string) => void
}

export function SearchBar({
    placeholder = "Cerca segnalazione",
    value,
    onChange,
}: SearchBarProps) {
    return (
        <div className="sticky top-0 z-30 bg-background/96 px-4 pb-4 pt-3 backdrop-blur md:px-6">
            <div className="mx-auto max-w-5xl">
                <div className="flex items-center gap-3 rounded-[2rem] border border-border bg-card px-5 py-4 shadow-sm">
                    <Search className="h-5 w-5 text-muted-foreground" />

                    <input
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
                        placeholder={placeholder}
                    />

                    <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
                    >
                        <SlidersHorizontal className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}