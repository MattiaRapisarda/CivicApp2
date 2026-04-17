"use client"

import dynamic from "next/dynamic"

export const ReportMapDynamic = dynamic(
    () => import("./report-map").then((mod) => mod.ReportMap),
    {
        ssr: false,
        loading: () => (
            <div className="flex h-[320px] items-center justify-center rounded-3xl border bg-muted/30 text-sm text-muted-foreground">
                Caricamento mappa...
            </div>
        ),
    }
)