"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#171A1C] pb-20 pt-32 text-[#F8F3E3] sm:pb-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-20 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-36 left-1/4 h-80 w-80 rounded-full bg-[#D4AF37]/[0.06] blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">
                <span className="h-px w-8 bg-[#D4AF37]" />
                Independent Strategic Consultant
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Mahmoud Awaleh
                <span className="mt-3 block text-[#D4AF37]">Digital Architect &amp; Sovereign Innovation Strategist</span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                I design and build digital systems that turn institutional knowledge, public services, and complex ideas into usable, trustworthy infrastructure.
              </p>
              <p className="text-sm text-white/50">Hargeisa · Republic of Somaliland</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-[#D4AF37] text-[#171A1C] hover:bg-[#E2C45D]" onClick={handleContact}>
                Discuss a project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/[0.04] text-white hover:bg-white/10 hover:text-white"
                onClick={() => window.open("https://github.com/mahmoudawaleh", "_blank", "noopener,noreferrer")}
              >
                Explore GitHub <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-sm font-semibold text-[#D4AF37]">Governance</p>
                <p className="mt-1 text-xs leading-5 text-white/55">Institutional systems</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#D4AF37]">Technology</p>
                <p className="mt-1 text-xs leading-5 text-white/55">Digital infrastructure</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#D4AF37]">Assurance</p>
                <p className="mt-1 text-xs leading-5 text-white/55">Quality and trust</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 rounded-[2rem] bg-[#D4AF37]/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/30 bg-white/[0.04] p-3 shadow-2xl">
              <Image
                src="/images/mahmoud-formal.jpg"
                alt="Portrait of Mahmoud Awaleh"
                width={640}
                height={760}
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                priority
              />
              <div className="px-3 pb-3 pt-5">
                <p className="text-lg font-semibold text-white">M2 · Void &amp; Gold</p>
                <p className="mt-1 text-sm text-white/55">Strategy · Systems · Digital products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
