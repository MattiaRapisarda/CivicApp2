import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function LandingHero() {
    return (
        <section className="landing-section landing-hero-shell">
            <div className="landing-hero-glow" aria-hidden="true" />

            <div className="landing-container landing-hero-content">
                <div className="max-w-[52rem]">
                    <div className="landing-badge mb-5">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span>CivicApp · piattaforma civica digitale</span>
                    </div>

                    <h1 className="landing-display">
                        Segnalare, capire
                        e seguire
                        ciò che accade
                        sul territorio dovrebbe essere semplice
                    </h1>

                    <p className="landing-lead mt-6 max-w-2xl">
                        CivicApp aiuta cittadini e comunità a condividere problemi,
                        bisogni e informazioni utili in uno spazio chiaro, accessibile e
                        facile da consultare.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link href="/report/new" className="landing-button-primary">
                            <span>Fai una segnalazione</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>

                        <Link href="/app" className="landing-button-secondary">
                            Esplora la piattaforma
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}