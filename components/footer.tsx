import { Github, Instagram, Linkedin, Mail } from "lucide-react"

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socialLinks = [
  { name: "GitHub", href: "https://github.com/mahmoudawaleh", icon: Github },
  { name: "X", href: "https://x.com/mahmoudawaleh", icon: XIcon },
  { name: "Instagram", href: "https://www.instagram.com/m2awaleh", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com/in/mahmoudawaleh", icon: Linkedin },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#171A1C] text-[#F8F3E3]">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-sm font-bold text-[#D4AF37]">M2</span>
              <span className="text-lg font-semibold">Mahmoud Awaleh</span>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/60">
              Digital Architect &amp; Sovereign Innovation Strategist. Independent work across governance, institutional design, digital products and quality assurance.
            </p>
            <p className="text-sm text-white/45">Hargeisa · Republic of Somaliland</p>
            <div className="flex gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${name} profile`} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/65 transition-colors hover:border-[#D4AF37]/50 hover:text-[#D4AF37]">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[#D4AF37]">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><a className="hover:text-[#D4AF37]" href="#about">About</a></li>
              <li><a className="hover:text-[#D4AF37]" href="#work">Selected work</a></li>
              <li><a className="hover:text-[#D4AF37]" href="#services">Capabilities</a></li>
              <li><a className="hover:text-[#D4AF37]" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#D4AF37]">Selected links</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><a className="hover:text-[#D4AF37]" href="https://github.com/mahmoudawaleh" target="_blank" rel="noreferrer">GitHub profile</a></li>
              <li><a className="hover:text-[#D4AF37]" href="https://dabshid-calendar-v3.vercel.app/" target="_blank" rel="noreferrer">Kaltirsi / Dabshid</a></li>
              <li><a className="hover:text-[#D4AF37]" href="https://github.com/m2creativeplus" target="_blank" rel="noreferrer">M2 Creative &amp; Consulting</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {currentYear} Mahmoud Awaleh. Project status and claims are documented against available evidence.
        </div>
      </div>
    </footer>
  )
}
