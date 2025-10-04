import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    points: [
      { id: "bengaluru", name: "Bengaluru • 42 roles", lat: 12.9716, lng: 77.5946, meta: "Tech & Product" },
      { id: "pune", name: "Pune • 18 roles", lat: 18.5204, lng: 73.8567, meta: "Data & Cloud" },
      { id: "hyderabad", name: "Hyderabad • 16 roles", lat: 17.385, lng: 78.4867, meta: "DevOps" },
      { id: "mumbai", name: "Mumbai • 12 roles", lat: 19.076, lng: 72.8777, meta: "Design & Marketing" },
      { id: "delhi", name: "Delhi • 8 roles", lat: 28.6139, lng: 77.209, meta: "Policy & Govt" },
    ],
  })
}
