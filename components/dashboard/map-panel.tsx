"use client"
import dynamic from "next/dynamic"
import React from "react"

import "leaflet/dist/leaflet.css"
import { cn } from "@/lib/utils"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const DynamicLeaflet = dynamic(
  async () => {
    const L = await import("leaflet")

    // Fix for default markers in react-leaflet
    delete (L.Icon.Default.prototype as any)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    })

    const { MapContainer, TileLayer, Popup, CircleMarker, useMap } = await import("react-leaflet")

    function InvalidateOnResize({ points }: { points: Array<{ lat: number; lng: number }> }) {
      const map = useMap()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      React.useEffect(() => {
        // invalidate on mount
        const invalidate = () => map.invalidateSize()
        const fit = () => {
          if (points.length > 0) {
            const bounds = L.latLngBounds(points.map((p) => [p.lat, p.lng]))
            map.fitBounds(bounds, { padding: [20, 20] })
          }
        }
        // initial
        setTimeout(() => {
          invalidate()
          fit()
        }, 0)
        // resize
        window.addEventListener("resize", invalidate)
        return () => window.removeEventListener("resize", invalidate)
      }, [map, points])
      return null
    }

    function MapInner({
      points,
    }: { points: Array<{ id: string; name: string; lat: number; lng: number; meta?: string }> }) {
      const mapRef = React.useRef<HTMLDivElement>(null)
      const leafletMapRef = React.useRef<any>(null)
      const center = points.length ? ([points[0].lat, points[0].lng] as [number, number]) : [20.5937, 78.9629]

      React.useEffect(() => {
        if (!mapRef.current || leafletMapRef.current) return

        // Initialize map
        const L = (window as any).L
        const map = L.map(mapRef.current).setView(center, 5)

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map)

        leafletMapRef.current = map

        // Add markers
        const markers: any[] = []
        points.forEach((p) => {
          const marker = L.circleMarker([p.lat, p.lng], {
            color: "var(--color-primary)",
            fillColor: "var(--color-primary)",
            fillOpacity: 0.2,
            radius: 8,
          }).addTo(map)

          marker.bindPopup(`<strong>${p.name}</strong>${p.meta ? `<div class="text-xs text-muted-foreground">${p.meta}</div>` : ''}`)
          markers.push(marker)
        })

        // Handle resize
        const handleResize = () => {
          map.invalidateSize()
        }
        window.addEventListener('resize', handleResize)

        return () => {
          window.removeEventListener('resize', handleResize)
          if (leafletMapRef.current) {
            leafletMapRef.current.remove()
            leafletMapRef.current = null
          }
        }
      }, [])

      // Update markers when points change
      React.useEffect(() => {
        if (!leafletMapRef.current) return

        const map = leafletMapRef.current
        const L = (window as any).L

        // Clear existing markers (keep tile layer)
        map.eachLayer((layer: any) => {
          if (layer instanceof L.CircleMarker) {
            map.removeLayer(layer)
          }
        })

        // Add new markers
        points.forEach((p) => {
          const marker = L.circleMarker([p.lat, p.lng], {
            color: "var(--color-primary)",
            fillColor: "var(--color-primary)",
            fillOpacity: 0.2,
            radius: 8,
          }).addTo(map)

          marker.bindPopup(`<strong>${p.name}</strong>${p.meta ? `<div class="text-xs text-muted-foreground">${p.meta}</div>` : ''}`)
        })

        // Update center if points changed
        if (points.length > 0) {
          map.setView([points[0].lat, points[0].lng], 5)
        }
      }, [points])

      return <div ref={mapRef} className="h-full w-full" />
    }
    return MapInner as unknown as React.ComponentType<{
      points: Array<{ id: string; name: string; lat: number; lng: number; meta?: string }>
    }>
  },
  { ssr: false },
)

export function MapPanel({
  title,
  points,
  heightClass = "h-80",
}: {
  title: string
  points: Array<{ id: string; name: string; lat: number; lng: number; meta?: string }>
  heightClass?: string
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className={cn("relative overflow-hidden rounded-lg", heightClass)}>
        <DynamicLeaflet points={points} />
      </CardContent>
    </Card>
  )
}
