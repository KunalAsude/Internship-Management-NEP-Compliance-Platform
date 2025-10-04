"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export function ParticipationChart({
  data,
}: { data: Array<{ month: string; participating: number; notParticipating: number }> }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Participation Analytics</CardTitle>
      </CardHeader>
      <CardContent className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="participating" fill="var(--color-chart-1)" />
            <Bar dataKey="notParticipating" fill="var(--color-chart-3)" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function ConversionChart({ data }: { data: Array<{ stage: string; value: number }> }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hiring Conversion</CardTitle>
      </CardHeader>
      <CardContent className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="stage" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="var(--color-chart-2)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
