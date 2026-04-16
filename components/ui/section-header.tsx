import { ChevronRight } from "lucide-react"

type SectionHeaderProps = {
    title: string
    onActionClick?: () => void
}

export function SectionHeader({
    title,
    onActionClick,
}: SectionHeaderProps) {
    return (
        <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-[2rem] font-semibold tracking-tight text-foreground md:text-[2.3rem]">
                {title}
            </h2>

            <button
                onClick={onActionClick}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition hover:bg-muted"
                aria-label={`Apri sezione ${title}`}
            >
                <ChevronRight className="h-5 w-5" />
            </button>
        </div>
    )
}