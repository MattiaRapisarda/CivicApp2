"use client"

import { useMemo, useState } from "react"

import { SearchBar } from "@/components/ui/search-bar"
import { SectionHeader } from "@/components/ui/section-header"
import { CardRow } from "@/components/ui/card-row"
import { BottomNav } from "@/components/ui/bottom-nav"
import { OpportunityCard } from "@/components/civic/opportunity-card"
import { ReportCard } from "@/components/civic/report-card"
import { opportunities, reports } from "@/data/civic-feed"

export default function CivicApp2AppLayoutPrototype() {
    const [query, setQuery] = useState("")

    const filteredReports = useMemo(() => {
        const q = query.trim().toLowerCase()

        if (!q) return reports

        return reports.filter((item) =>
            Object.values(item).some((value) =>
                String(value).toLowerCase().includes(q)
            )
        )
    }, [query])

    const filteredOpportunities = useMemo(() => {
        const q = query.trim().toLowerCase()

        if (!q) return opportunities

        return opportunities.filter((item) =>
            Object.values(item).some((value) =>
                String(value).toLowerCase().includes(q)
            )
        )
    }, [query])

    return (
        <div className="min-h-screen bg-background pb-28 text-foreground">
            <SearchBar
                value={query}
                onChange={setQuery}
                placeholder="Cerca segnalazione o opportunità"
            />

            <main className="mx-auto max-w-5xl px-4 py-2 md:px-6 md:py-6">
                <section>
                    <SectionHeader title="Disservizi" />
                    <CardRow>
                        {filteredReports.map((item) => (
                            <ReportCard key={item.id} item={item} />
                        ))}
                    </CardRow>
                </section>

                <section className="mt-12">
                    <SectionHeader title="Opportunità" />
                    <CardRow>
                        {filteredOpportunities.map((item) => (
                            <OpportunityCard key={item.id} item={item} />
                        ))}
                    </CardRow>
                </section>
            </main>

            <BottomNav />
        </div>
    )
}