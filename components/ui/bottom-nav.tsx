import Link from "next/link"
import { Bell, Home, Map, PlusCircle, User } from "lucide-react"

import type { BottomNavItem, BottomNavKey } from "@/types/civic"

type BottomNavProps = {
    active?: BottomNavKey
}

const BOTTOM_NAV_ITEMS: BottomNavItem[] = [
    { key: "explore", label: "Esplora", icon: Home, href: "/app" },
    { key: "map", label: "Mappa", icon: Map, href: "/app/mappa" },
    { key: "report", label: "Segnala", icon: PlusCircle, href: "/app/segnala", special: true },
    { key: "activity", label: "Attività", icon: Bell, href: "/app/attivita" },
    { key: "profile", label: "Profilo", icon: User, href: "/app/profilo" },
]

function getItemClasses(isActive: boolean, isSpecial?: boolean) {
    const highlighted = isActive || isSpecial

    return {
        link: `flex flex-col items-center justify-center gap-1 py-2 text-xs transition ${highlighted
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground"
            }`,
        icon: `h-5 w-5 ${isSpecial ? "scale-110" : ""}`,
        label: highlighted ? "font-medium" : "font-normal",
    }
}

function BottomNavItemButton({
    item,
    isActive,
}: {
    item: BottomNavItem
    isActive: boolean
}) {
    const Icon = item.icon
    const classes = getItemClasses(isActive, item.special)

    return (
        <Link href={item.href} className={classes.link} aria-current={isActive ? "page" : undefined}>
            <Icon className={classes.icon} />
            <span className={classes.label}>{item.label}</span>
        </Link>
    )
}

export function BottomNav({ active }: BottomNavProps) {
    return (
        <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/98 backdrop-blur lg:px-28">
            <div className="grid grid-cols-5 px-3 py-2">
                {BOTTOM_NAV_ITEMS.map((item) => (
                    <BottomNavItemButton
                        key={item.key}
                        item={item}
                        isActive={item.key === active}
                    />
                ))}
            </div>
        </nav>
    )
}