import type { OpportunityItem, ReportItem } from "@/types/civic"

export const reports: ReportItem[] = [
    {
        id: 1,
        status: "Presa in carico",
        title: "Area boschiva del litorale distrutta",
        location: "Via Giarre Calatabiano, San Marco",
        updatedAt: "Aggiornata 4 giorni fa",
        supports: 2,
        image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 2,
        status: "Nuova",
        title: "Lampione spento in Via Verdi",
        location: "Centro storico",
        updatedAt: "Aggiornata 2 ore fa",
        supports: 12,
        image:
            "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop",
    },
]

export const opportunities: OpportunityItem[] = [
    {
        id: 1,
        tag: "Evento",
        title: "Pulizia partecipata del parco di quartiere",
        meta: "Sabato · Parco Nord",
        supports: 23,
        image:
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 2,
        tag: "Bando",
        title: "Contributi per iniziative civiche locali",
        meta: "Scade tra 5 giorni",
        supports: 11,
        image:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    },
]