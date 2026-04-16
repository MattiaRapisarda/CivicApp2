import { Clock3 } from "lucide-react"
import { ImageCardShell } from "@/components/ui/image-card-shell"
import type { ReportItem } from "@/types/civic"

type ReportCardProps = {
    item: ReportItem
}

export function ReportCard({ item }: ReportCardProps) {
    return (
        <ImageCardShell
            image={item.image}
            imageAlt={item.title}
            className="w-[23.5rem]"
            badge={
                <span className="rounded-full bg-slate-900/75 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {item.status}
                </span>
            }
        >
            <h3 className="text-[1.05rem] font-semibold leading-tight tracking-tight text-foreground md:text-[1.15rem]">
                {item.title}
            </h3>

            <p className="mt-2 line-clamp-1 text-sm text-muted-foreground">
                {item.location}
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock3 className="h-4 w-4" />
                <span>{item.updatedAt}</span>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
                {item.supports} supporti
            </p>
        </ImageCardShell>
    )
}