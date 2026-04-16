import { Bell, Home, Map, PlusCircle, User } from "lucide-react"

import { SearchBar } from "@/components/ui/search-bar"
import { SectionHeader } from "@/components/ui/section-header"
import { CardRow } from "@/components/ui/card-row"
import { BottomNav } from "@/components/ui/bottom-nav"
import { OpportunityCard } from "@/components/civic/opportunity-card"
import { ReportCard } from "@/components/civic/report-card"
import { opportunities, reports } from "@/data/civic-feed"
import type { BottomNavItem } from "@/types/civic"

export default function CivicApp2AppLayoutPrototype() {
    return (
        <div className="min-h-screen bg-background pb-28 text-foreground">
            <SearchBar />

            <main className="mx-auto max-w-5xl px-4 py-2 md:px-6 md:py-6">
                <section>
                    <SectionHeader title="Segnalazioni in corso" />
                    <CardRow>
                        {reports.map((item) => (
                            <ReportCard key={item.id} item={item} />
                        ))}
                    </CardRow>
                </section>

                <section className="mt-12">
                    <SectionHeader title="Opportunità" />
                    <CardRow>
                        {opportunities.map((item) => (
                            <OpportunityCard key={item.id} item={item} />
                        ))}
                    </CardRow>
                </section>
            </main>

            <BottomNav />
        </div>
    )
}