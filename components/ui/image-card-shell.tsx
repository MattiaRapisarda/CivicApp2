import type { ReactNode } from "react"
import { Heart } from "lucide-react"

type ImageCardShellProps = {
    image: string
    imageAlt?: string
    badge?: ReactNode
    actions?: ReactNode
    children: ReactNode
    className?: string
}

export function ImageCardShell({
    image,
    imageAlt = "",
    badge,
    actions,
    children,
    className = "w-[20rem]",
}: ImageCardShellProps) {
    return (
        <article
            className={`${className} shrink-0 overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm`}
        >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <img src={image} alt={imageAlt} className="h-full w-full object-cover" />

                {badge ? <div className="absolute left-4 top-4">{badge}</div> : null}

                <div className="absolute right-4 top-4">
                    {actions ?? (
                        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/75 text-foreground backdrop-blur-sm transition hover:bg-white">
                            <Heart className="h-5 w-5" />
                        </button>
                    )}
                </div>
            </div>

            <div className="p-5">{children}</div>
        </article>
    )
}