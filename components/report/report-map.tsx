"use client"

import { useEffect } from "react"
import L from "leaflet"
import {
    MapContainer,
    Marker,
    TileLayer,
    useMapEvents,
} from "react-leaflet"
import type { ReportCoordinates } from "@/components/report/report-types"

type ReportMapProps = {
    value: ReportCoordinates | null
    onChange: (coords: ReportCoordinates) => void
}

const defaultCenter: ReportCoordinates = {
    lat: 41.9028,
    lng: 12.4964,
}

const markerIcon = L.icon({
    iconUrl: "/leaflet/marker-icon.png",
    iconRetinaUrl: "/leaflet/marker-icon-2x.png",
    shadowUrl: "/leaflet/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
})

function MapClickHandler({
    onChange,
}: {
    onChange: (coords: ReportCoordinates) => void
}) {
    useMapEvents({
        click(event) {
            onChange({
                lat: event.latlng.lat,
                lng: event.latlng.lng,
            })
        },
    })

    return null
}

function MapAutoCenter({ value }: { value: ReportCoordinates | null }) {
    const map = useMapEvents({})

    useEffect(() => {
        if (!value) return
        map.setView([value.lat, value.lng], 16)
    }, [map, value])

    return null
}

export function ReportMap({ value, onChange }: ReportMapProps) {
    const center = value ?? defaultCenter

    return (
        <div className="overflow-hidden rounded-3xl border">
            <MapContainer
                center={[center.lat, center.lng]}
                zoom={value ? 16 : 13}
                scrollWheelZoom
                className="h-[320px] w-full"
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MapClickHandler onChange={onChange} />
                <MapAutoCenter value={value} />

                {value ? (
                    <Marker
                        position={[value.lat, value.lng]}
                        draggable
                        icon={markerIcon}
                        eventHandlers={{
                            dragend: (event) => {
                                const marker = event.target
                                const latlng = marker.getLatLng()

                                onChange({
                                    lat: latlng.lat,
                                    lng: latlng.lng,
                                })
                            },
                        }}
                    />
                ) : null}
            </MapContainer>
        </div>
    )
}