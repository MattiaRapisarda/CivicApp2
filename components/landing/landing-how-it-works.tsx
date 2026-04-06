import { Bell, CheckCircle2, MapPin } from "lucide-react"

const steps = [
    {
        number: "1",
        title: "Descrivi il problema",
        description:
            "Spiega cosa succede e dove, così la segnalazione parte subito da una base chiara.",
        icon: MapPin,
        tone: "success",
    },
    {
        number: "2",
        title: "Aggiungi dettagli utili",
        description:
            "Categoria, contesto e informazioni aggiuntive rendono il contenuto più comprensibile.",
        icon: Bell,
        tone: "info",
    },
    {
        number: "3",
        title: "Rendi tutto accessibile",
        description:
            "La segnalazione resta consultabile e può diventare utile anche per altre persone.",
        icon: CheckCircle2,
        tone: "warning",
    },
] as const

export function LandingHowItWorks() {
    return (
        <section className="landing-section border-y border-border bg-card">
            <div className="landing-container py-16">
                <div className="max-w-2xl">
                    <p className="landing-eyebrow">Come funziona</p>
                    <h2 className="landing-title mt-3">
                        Un processo semplice, pensato per essere utile davvero
                    </h2>
                    <p className="landing-body mt-4">
                        Pochi passaggi chiari per trasformare un problema o un’informazione
                        locale in un contenuto leggibile e condivisibile.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {steps.map((step) => {
                        const Icon = step.icon

                        return (
                            <article key={step.title} className="landing-step">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className={`landing-step-number landing-step-number--${step.tone}`}>
                                        {step.number}
                                    </div>
                                    <Icon className={`h-5 w-5 landing-step-icon landing-step-icon--${step.tone}`} />
                                </div>

                                <h3 className="text-lg font-semibold text-foreground">
                                    {step.title}
                                </h3>

                                <p className="landing-body mt-3 text-sm">
                                    {step.description}
                                </p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}