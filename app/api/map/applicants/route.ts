import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    points: [
      { id: "blore-app", name: "Bengaluru • 60 applicants", lat: 12.9716, lng: 77.5946, meta: "Frontend, Backend" },
      { id: "pune-app", name: "Pune • 35 applicants", lat: 18.5204, lng: 73.8567, meta: "Data, Cloud" },
      { id: "hydr-app", name: "Hyderabad • 22 applicants", lat: 17.385, lng: 78.4867, meta: "DevOps" },
      { id: "kol-app", name: "Kolkata • 12 applicants", lat: 22.5726, lng: 88.3639, meta: "Design" },
      { id: "chennai-app", name: "Chennai • 19 applicants", lat: 13.0827, lng: 80.2707, meta: "AI/ML" },
    ],
  })
}
