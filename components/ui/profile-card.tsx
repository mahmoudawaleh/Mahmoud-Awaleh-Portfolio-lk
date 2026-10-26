"use client"

import Image from "next/image"
import { ArrowUpRight, Github, Globe2, Layers3, MapPin } from "lucide-react"

const profileLinks = [
  {
    label: "GitHub",
    detail: "Code and public work",
    href: "https://github.com/mahmoudawaleh/",
    icon: Github,
  },
  {
    label: "Portfolio",
    detail: "Selected work and projects",
    href: "https://m2awaleh.vercel.app/",
    icon: Globe2,
  },
  {
    label: "Kaltirsi / Dabshid",
    detail: "Digital calendar project",
    href: "https://dabshid-calendar-v3.vercel.app/",
    icon: Layers3,
  },
]

export default function Component() {
  return (
    <section
      id="profile-card"
      aria-labelledby="profile-card-title"
      className="relative overflow-hidden bg-[#171A1C] px-4 py-16 text-[#F8F3E3] sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#D4AF37]/[0.07] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <div>
            <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              <span className="h-px w-7 bg-[#D4AF37]" />
              Personal profile
            </div>

            <div className="flex items-center gap-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-[#D4AF37]/40 bg-black/30 sm:h-28 sm:w-28">
                <Image
                  src="/images/mahmoud-formal.jpg"
                  alt="Mahmoud Awaleh"
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 id="profile-card-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Mahmoud Awaleh
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Digital Architect &amp; Sovereign Innovation Strategist
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              I design and build digital systems that turn institutional knowledge, public services, and complex ideas
              into usable, trustworthy infrastructure.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-white/55">
            <MapPin className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
            Hargeisa, Republic of Somaliland
          </div>
        </div>

        <div className="rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#242729] to-[#1A1C1D] p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Explore my work</p>
              <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">Systems, products, and practice</h3>
            </div>
            <span className="rounded-full border border-[#D4AF37]/30 px-3 py-1 text-[11px] font-medium text-[#D4AF37]">
              M2 · Void &amp; Gold
            </span>
          </div>

          <div className="mt-7 space-y-3">
            {profileLinks.map(({ label, detail, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-black/15 p-4 transition-colors hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium text-white">{label}</span>
                  <span className="mt-1 block text-sm text-white/55">{detail}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D4AF37]" aria-hidden="true" />
              </a>
            ))}
          </div>

          <p className="mt-6 text-xs leading-5 text-white/40">
            Project descriptions and status should reflect the current implementation, not just the original idea.
          </p>
        </div>
      </div>
    </section>
  )
}
