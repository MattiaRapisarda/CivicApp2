import { CheckCircle2, Megaphone, ShieldCheck } from "lucide-react"

const features = [
    {
        title: "Segnala un problema",
        description:
            "Disservizi, criticità e situazioni che meritano attenzione raccolte in modo semplice e consultabile.",
        icon: Megaphone,
        tone: "success",
    },
    {
        title: "Condividi informazioni utili",
        description:
            "Contenuti locali, riferimenti e aggiornamenti organizzati in uno spazio comune più chiaro.",
        icon: ShieldCheck,
        tone: "info",
    },
    {
        title: "Segui ciò che conta",
        description:
            "Un modo più semplice per leggere bisogni, priorità e temi rilevanti del territorio.",
        icon: CheckCircle2,
        tone: "warning",
    },
] as const

export function LandingFeatures() {
    return (
        <section className="landing-section">
            <div className="landing-container py-16">
                <div className="max-w-2xl">
                    <p className="landing-eyebrow">Cosa puoi fare</p>
                    <h2 className="landing-title mt-3">
                        Un unico spazio per rendere le informazioni più utili
                    </h2>
                    <p className="landing-body mt-4">
                        CivicApp2 nasce per trasformare segnalazioni e contenuti locali in
                        informazioni più leggibili, più ordinate e più facili da seguire.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon

                        return (
                            <article key={feature.title} className="landing-card">
                                <div className={`landing-icon landing-icon--${feature.tone}`}>
                                    <Icon className="h-6 w-6" />
                                </div>

                                <h3 className="mt-4 text-xl font-semibold text-foreground">
                                    {feature.title}
                                </h3>

                                <p className="landing-body mt-3 text-sm">
                                    {feature.description}
                                </p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}