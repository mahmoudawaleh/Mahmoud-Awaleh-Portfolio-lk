"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, Compass, Database, ShieldCheck, Workflow } from "lucide-react"

const focusAreas = [
  {
    icon: Compass,
    title: "Governance architecture",
    description: "Translate institutional mandates, information needs and public-service processes into clear digital operating models.",
  },
  {
    icon: Workflow,
    title: "Product and workflow design",
    description: "Shape practical user journeys, requirements, service workflows and interfaces around real operational needs.",
  },
  {
    icon: Database,
    title: "Data and institutional memory",
    description: "Improve how records, knowledge, data quality and reusable information are structured and maintained.",
  },
  {
    icon: ShieldCheck,
    title: "Quality and trust",
    description: "Apply evidence-led QA across UX, frontend, backend, security, accessibility and release readiness.",
  },
]

export default function About() {
  return (
    <section id="about" className="bg-[#F8F3E3] py-20 text-[#171A1C] dark:bg-[#171A1C] dark:text-[#F8F3E3]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9A7816] dark:text-[#D4AF37]">Approach and expertise</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Designing systems that institutions can understand, use and trust.</h2>
          <p className="mt-6 text-base leading-8 text-[#62686D] dark:text-white/65">
            My professional work combines strategic communications, creative practice, governance, research and digital product development. I focus on the practical connection between institutional goals, the people who use services, the information those services depend on, and the systems that keep them reliable.
          </p>
          <p className="mt-4 text-base leading-8 text-[#62686D] dark:text-white/65">
            I previously served as PR &amp; Communications Director at the Civil Service Commission. That role is completed; my current positioning is independent strategic consulting and governance-focused digital architecture.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {focusAreas.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="border-black/10 bg-white/70 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/35 bg-[#D4AF37]/10 text-[#9A7816] dark:text-[#D4AF37]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#62686D] dark:text-white/60">{description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <a href="https://github.com/mahmoudawaleh" target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#80620C] hover:text-[#9A7816] dark:text-[#D4AF37]">
          Review public work <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
