"use client"

import { useMemo, useState } from "react"

import { ReportCategoryCard } from "@/components/report/report-category-card"
import { ReportDetailsCard } from "@/components/report/report-details-card"
import { ReportKindCard } from "@/components/report/report-kind-card"
import { ReportLocationCard } from "@/components/report/report-location-card"
import { ReportSubmitBar } from "./report-submit-bar"
import type {
    ReportCategory,
    ReportCategoryItem,
    ReportKind,
} from "@/components/report/report-types"

const problemCategories: ReportCategoryItem[] = [
    { value: "strade", label: "Strade e marciapiedi" },
    { value: "illuminazione", label: "Illuminazione" },
    { value: "rifiuti", label: "Rifiuti e degrado" },
    { value: "verde", label: "Verde pubblico" },
    { value: "sicurezza", label: "Sicurezza" },
    { value: "altro", label: "Altro" },
]

const opportunityCategories: ReportCategoryItem[] = [
    { value: "spazi", label: "Spazi da valorizzare" },
    { value: "verde", label: "Verde e ambiente" },
    { value: "mobilita", label: "Mobilità" },
    { value: "servizi", label: "Servizi di quartiere" },
    { value: "comunita", label: "Comunità" },
    { value: "altro", label: "Altro" },
]

type SelectedCoords = {
    lat: number
    lng: number
}

type LocationSuggestion = {
    id: string
    label: string
    lat: number
    lng: number
}

export function NewReportFlow() {
    const [kind, setKind] = useState<ReportKind | null>(null)
    const [category, setCategory] = useState<ReportCategory | null>(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("")
    const [selectedCoords, setSelectedCoords] = useState<SelectedCoords | null>(null)
    const [isLocating, setIsLocating] = useState(false)
    const [successMessage, setSuccessMessage] = useState<string | null>(null)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const categories =
        kind === "opportunity" ? opportunityCategories : problemCategories

    const isValid = useMemo(() => {
        return Boolean(
            kind &&
            category &&
            title.trim() &&
            description.trim() &&
            address.trim() &&
            selectedCoords
        )
    }, [kind, category, title, description, address, selectedCoords])

    function resetMessages() {
        setSuccessMessage(null)
        setErrorMessage(null)
    }

    function handleKindChange(nextKind: ReportKind) {
        setKind(nextKind)
        setCategory(null)
        resetMessages()
    }

    function handleMapPositionChange(coords: SelectedCoords) {
        setSelectedCoords(coords)
        resetMessages()
    }

    function handleAddressChange(value: string) {
        setAddress(value)
        resetMessages()
    }

    function handleSuggestionSelect(suggestion: LocationSuggestion) {
        setAddress(suggestion.label)
        setSelectedCoords({
            lat: suggestion.lat,
            lng: suggestion.lng,
        })
        resetMessages()
    }

    function handleUseCurrentLocation() {
        if (!navigator.geolocation) {
            setErrorMessage("La geolocalizzazione non è supportata dal browser.")
            return
        }

        setIsLocating(true)
        resetMessages()

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setSelectedCoords({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                })
                setIsLocating(false)
            },
            () => {
                setIsLocating(false)
                setErrorMessage("Non è stato possibile rilevare la tua posizione.")
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0,
            }
        )
    }

    function handleSubmit() {
        if (!isValid || !kind || !category || !selectedCoords) return

        const payload = {
            kind,
            category,
            title: title.trim(),
            description: description.trim(),
            address: address.trim(),
            lat: selectedCoords.lat,
            lng: selectedCoords.lng,
        }

        console.log("REPORT PAYLOAD", payload)

        setSuccessMessage(
            kind === "opportunity"
                ? "Opportunità pronta per essere inviata."
                : "Problema pronto per essere inviato."
        )
    }

    return (
        <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col gap-6 px-4 py-6">
            <header className="space-y-2">
                <h1 className="text-2xl font-semibold">Nuova segnalazione</h1>
                <p className="text-sm text-muted-foreground">
                    Scegli il tipo di segnalazione e inserisci le informazioni essenziali.
                </p>
            </header>

            <ReportKindCard selectedKind={kind} onSelectKind={handleKindChange} />

            {kind ? (
                <ReportCategoryCard
                    categories={categories}
                    selectedCategory={category}
                    onSelectCategory={setCategory}
                />
            ) : null}

            <ReportLocationCard
                address={address}
                selectedCoords={selectedCoords}
                isLocating={isLocating}
                onAddressChange={handleAddressChange}
                onMapPositionChange={handleMapPositionChange}
                onUseCurrentLocation={handleUseCurrentLocation}
                onSuggestionSelect={handleSuggestionSelect}
            />

            <ReportDetailsCard
                kind={kind}
                title={title}
                description={description}
                onTitleChange={setTitle}
                onDescriptionChange={setDescription}
            />

            {errorMessage ? (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {errorMessage}
                </div>
            ) : null}

            {successMessage ? (
                <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                    {successMessage}
                </div>
            ) : null}

            <ReportSubmitBar isDisabled={!isValid} onSubmit={handleSubmit} />
        </main>
    )
}