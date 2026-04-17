"use client"

import type {
    ReportCategory,
    ReportCategoryItem,
} from "@/components/report/report-types"

type ReportCategoryCardProps = {
    categories: ReportCategoryItem[]
    selectedCategory: ReportCategory | null
    onSelectCategory: (category: ReportCategory) => void
}

export function ReportCategoryCard({
    categories,
    selectedCategory,
    onSelectCategory,
}: ReportCategoryCardProps) {
    return (
        <section className="rounded-3xl border bg-card p-5 shadow-sm">
            <div className="mb-4">
                <h2 className="text-base font-semibold">Categoria</h2>
                <p className="text-sm text-muted-foreground">
                    Scegli l’ambito della segnalazione.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {categories.map((item) => {
                    const isActive = selectedCategory === item.value

                    return (
                        <button
                            key={item.value}
                            type="button"
                            onClick={() => onSelectCategory(item.value)}
                            className={`rounded-3xl border p-4 text-left transition cursor-pointer ${isActive
                                ? "border-foreground bg-foreground text-background"
                                : "bg-background hover:bg-muted/40"
                                }`}
                        >
                            <span className="text-sm font-medium">{item.label}</span>
                        </button>
                    )
                })}
            </div>
        </section>
    )
}