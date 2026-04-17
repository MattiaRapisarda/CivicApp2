import { NewReportFlow } from "@/components/report/new-report-flow"
import { BottomNav } from "@/components/ui/bottom-nav"

export default function SegnalaPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <NewReportFlow />
            <BottomNav />
        </main>
    )
}