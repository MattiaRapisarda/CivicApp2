import Link from "next/link"

export function LandingWhy() {
    return (
        <section className="landing-section">
            <div className="landing-container py-16">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="landing-panel-dark">
                        <p className="text-sm font-semibold text-primary-foreground/80">
                            Perché CivicApp
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                            Non solo segnalazioni, ma uno spazio comune per leggere il territorio
                        </h2>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <div className="landing-panel-dark-card">
                                <h3 className="font-semibold">Più chiarezza</h3>
                                <p className="mt-2 text-sm leading-7 text-primary-foreground/75">
                                    Le informazioni diventano più facili da capire e da seguire.
                                </p>
                            </div>

                            <div className="landing-panel-dark-card">
                                <h3 className="font-semibold">Più accessibilità</h3>
                                <p className="mt-2 text-sm leading-7 text-primary-foreground/75">
                                    Un punto di accesso semplice per cittadini e comunità locali.
                                </p>
                            </div>

                            <div className="landing-panel-dark-card">
                                <h3 className="font-semibold">Più continuità</h3>
                                <p className="mt-2 text-sm leading-7 text-primary-foreground/75">
                                    I contenuti non si perdono: restano ordinati e consultabili.
                                </p>
                            </div>

                            <div className="landing-panel-dark-card">
                                <h3 className="font-semibold">Più possibilità</h3>
                                <p className="mt-2 text-sm leading-7 text-primary-foreground/75">
                                    La piattaforma può crescere insieme ai servizi del territorio.
                                </p>
                            </div>
                        </div>
                    </div>

                    <aside className="landing-panel-light">
                        <p className="text-sm font-semibold text-[color:var(--color-info-600)]">
                            In sintesi
                        </p>

                        <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                            Una base semplice per costruire una vera piattaforma civica
                        </h2>

                        <p className="landing-body mt-4">
                            CivicApp parte dalle segnalazioni, ma l’obiettivo è più ampio:
                            creare uno spazio digitale utile per raccogliere e organizzare ciò
                            che conta sul territorio.
                        </p>

                        <div className="mt-8 space-y-3">
                            <div className="landing-summary-chip">
                                Segnalazioni territoriali più leggibili
                            </div>
                            <div className="landing-summary-chip">
                                Informazioni utili raccolte in uno spazio comune
                            </div>
                            <div className="landing-summary-chip">
                                Una struttura pronta a crescere con il territorio
                            </div>
                        </div>

                        <div className="mt-8">
                            <Link href="/report/new" className="landing-button-primary">
                                Inizia ora
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}