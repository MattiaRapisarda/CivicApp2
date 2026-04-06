import Link from "next/link"

export function LandingCta() {
    return (
        <section className="bg-primary py-10 text-primary-foreground">
            <div className="landing-container flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                <div className="max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight">
                        Aiuta a rendere il territorio più chiaro, una segnalazione alla volta.
                    </h2>
                </div>

                <div className="flex gap-3">
                    <Link href="/report/new" className="landing-button-inverse">
                        Fai una segnalazione
                    </Link>

                    <Link href="/app" className="landing-button-ghost-on-dark">
                        Esplora la piattaforma
                    </Link>
                </div>
            </div>
        </section>
    )
}