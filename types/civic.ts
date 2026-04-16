import type { LucideIcon } from "lucide-react"

export type ReportItem = {
    id: number
    status: string
    title: string
    location: string
    updatedAt: string
    supports: number
    image: string
}

export type OpportunityItem = {
    id: number
    tag: string
    title: string
    meta: string
    supports: number
    image: string
}

export type BottomNavKey = "explore" | "map" | "report" | "activity" | "profile"

export type BottomNavItem = {
    key: BottomNavKey
    label: string
    icon: LucideIcon
    href: string
    special?: boolean
}