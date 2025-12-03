import { Facebook, Instagram, Linkedin } from "lucide-react"

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Contact", href: "#contact" },
    ],
    Services: [
      { name: "Strategic Communications", href: "#services" },
      { name: "Brand Development", href: "#services" },
      { name: "Public Relations", href: "#services" },
      { name: "Digital Marketing", href: "#services" },
    ],
    Resources: [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#portfolio" },
      { name: "View Portfolio", href: "https://issuu.com/mahmoudawaleh/docs/m2_portfolio_2021", external: true },
      {
        name: "Magazine Collection",
        href: "https://drive.google.com/drive/folders/1dI1-QKDL5cmFDz-hvdxCBxF7vNUvxffr",
        external: true,
      },
    ],
  }

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com/mahmoud.awaleh", icon: Facebook },
    { name: "X (Twitter)", href: "https://twitter.com/mahmoudawaleh", icon: XIcon },
    { name: "Instagram", href: "https://www.instagram.com/m2awaleh", icon: Instagram },
    { name: "LinkedIn", href: "https://linkedin.com/in/mahmoudawaleh", icon: Linkedin },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MA</span>
              </div>
              <span className="font-bold text-xl">Mahmoud Awaleh</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Strategic communication and creative design professional dedicated to building meaningful connections
              between institutions and communities.
            </p>
            <div className="text-sm text-gray-400">
              <p>PR & Communications Director</p>
              <p>Somaliland Civil Service Commission</p>
            </div>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${social.name}`}
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links - Updated to remove dead links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-6">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {link.name}
                      {link.external && <span className="sr-only"> (opens in new tab)</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {currentYear} Mahmoud Mohamed Awaleh. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
