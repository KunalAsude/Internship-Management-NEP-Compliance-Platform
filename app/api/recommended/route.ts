import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    items: [
      { id: "1", title: "Frontend Intern", company: "Acme Corp", location: "Bengaluru", mode: "Hybrid" },
      { id: "2", title: "Data Analyst Intern", company: "DataWorks", location: "Pune", mode: "Onsite" },
      { id: "3", title: "ML Intern", company: "AI Labs", location: "Remote", mode: "Remote" },
      { id: "4", title: "DevOps Intern", company: "CloudOne", location: "Hyderabad", mode: "Onsite" },
      { id: "5", title: "UI/UX Intern", company: "DesignHub", location: "Mumbai", mode: "Hybrid" },
    ],
  })
}
