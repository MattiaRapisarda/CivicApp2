"use client"

type ReportSubmitBarProps = {
    isDisabled: boolean
    onSubmit: () => void
}

export function ReportSubmitBar({
    isDisabled,
    onSubmit,
}: ReportSubmitBarProps) {
    return (
        <div className="bottom-4">
            <button
                type="button"
                onClick={onSubmit}
                disabled={isDisabled}
                className="w-full rounded-2xl bg-foreground cursor-pointer px-4 py-3 mb-18 text-sm font-medium text-background disabled:cursor-not-allowed disabled:opacity-50"
            >
                Invia segnalazione
            </button>
        </div>
    )
}