import { ImageCardShell } from "@/components/ui/image-card-shell"
import type { OpportunityItem } from "@/types/civic"

type OpportunityCardProps = {
    item: OpportunityItem
}

export function OpportunityCard({ item }: OpportunityCardProps) {
    return (
        <ImageCardShell
            image={item.image}
            imageAlt={item.title}
            className="w-[19rem]"
            badge={
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                    {item.tag}
                </span>
            }
        >
            <h3 className="text-xl font-semibold leading-tight tracking-tight text-foreground">
                {item.title}
            </h3>

            <p className="mt-3 text-base text-muted-foreground">{item.meta}</p>

            <div className="mt-4 flex items-center justify-between gap-3 text-sm text-muted-foreground">
                <span>{item.supports} supporti</span>
            </div>
        </ImageCardShell>
    )
}