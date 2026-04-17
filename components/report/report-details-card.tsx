"use client"

import type { ReportKind } from "@/components/report/report-types"

type ReportDetailsCardProps = {
    kind: ReportKind | null
    title: string
    description: string
    onTitleChange: (value: string) => void
    onDescriptionChange: (value: string) => void
}

export function ReportDetailsCard({
    kind,
    title,
    description,
    onTitleChange,
    onDescriptionChange,
}: ReportDetailsCardProps) {
    const titlePlaceholder =
        kind === "opportunity"
            ? "Es. Spazio adatto a orto urbano condiviso"
            : "Es. Lampione spento in via Roma"

    const descriptionPlaceholder =
        kind === "opportunity"
            ? "Descrivi l’idea o la risorsa e spiega perché potrebbe essere utile..."
            : "Descrivi il problema, il disagio o l’eventuale rischio..."

    return (
        <section className="rounded-3xl border bg-card p-5 shadow-sm">
            <div className="mb-4">
                <h2 className="text-base font-semibold">Dettagli</h2>
                <p className="text-sm text-muted-foreground">
                    Inserisci le informazioni essenziali della segnalazione.
                </p>
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Titolo</label>
                    <input
                        value={title}
                        onChange={(event) => onTitleChange(event.target.value)}
                        placeholder={titlePlaceholder}
                        className="w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none"
                        maxLength={80}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Descrizione</label>
                    <textarea
                        value={description}
                        onChange={(event) => onDescriptionChange(event.target.value)}
                        placeholder={descriptionPlaceholder}
                        className="min-h-28 w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none"
                        maxLength={240}
                    />
                    <p className="text-right text-xs text-muted-foreground">
                        {description.length}/240
                    </p>
                </div>
            </div>
        </section>
    )
}