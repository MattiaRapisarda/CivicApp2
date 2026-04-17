export type ReportKind = "problem" | "opportunity"

export type ReportCategory =
    | "strade"
    | "illuminazione"
    | "rifiuti"
    | "verde"
    | "sicurezza"
    | "spazi"
    | "mobilita"
    | "servizi"
    | "comunita"
    | "altro"

export type ReportCategoryItem = {
    value: ReportCategory
    label: string
}

export type ReportCoordinates = {
    lat: number
    lng: number
}