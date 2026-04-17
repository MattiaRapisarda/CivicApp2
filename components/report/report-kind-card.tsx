"use client"

import { AlertTriangle, Lightbulb } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ReportKind } from "@/components/report/report-types"

interface ReportKindCardProps {
    selectedKind: ReportKind | null
    onSelectKind: (kind: ReportKind) => void
}

const items: {
    value: ReportKind
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
}[] = [
        {
            value: "problem",
            title: "Problema",
            description: "Segnala un disservizio, un guasto o una criticità sul territorio.",
            icon: AlertTriangle,
        },
        {
            value: "opportunity",
            title: "Opportunità",
            description: "Proponi un’idea, una risorsa o qualcosa da valorizzare.",
            icon: Lightbulb,
        },
    ]

export function ReportKindCard({
    selectedKind,
    onSelectKind,
}: ReportKindCardProps) {
    return (
        <Card className="rounded-[28px] border shadow-sm">
            <CardContent className="p-4 sm:p-5">
                <div className="mb-4 space-y-1">
                    <h2 className="text-base font-semibold">Che cosa vuoi segnalare?</h2>
                    <p className="text-sm text-muted-foreground">
                        Scegli se si tratta di un problema o di un’opportunità.
                    </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                    {items.map((item) => {
                        const Icon = item.icon
                        const isActive = selectedKind === item.value

                        return (
                            <button
                                key={item.value}
                                type="button"
                                onClick={() => onSelectKind(item.value)}
                                className={cn(
                                    "flex min-h-32 flex-col items-start gap-4 rounded-[24px] border px-4 py-4 text-left transition cursor-pointer",
                                    isActive
                                        ? "border-foreground bg-foreground text-background"
                                        : "bg-background hover:bg-muted/40"
                                )}
                            >
                                <div
                                    className={cn(
                                        "flex h-10 w-10 items-center justify-center rounded-full",
                                        isActive ? "bg-background/15" : "bg-muted"
                                    )}
                                >
                                    <Icon className="h-5 w-5" />
                                </div>

                                <div className="space-y-1">
                                    <p className="text-sm font-semibold">{item.title}</p>
                                    <p
                                        className={cn(
                                            "text-sm leading-snug",
                                            isActive
                                                ? "text-background/80"
                                                : "text-muted-foreground"
                                        )}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </CardContent>
        </Card>
    )
}