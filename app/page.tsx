import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import WorkProcess from "@/components/work-process"
import Portfolio from "@/components/portfolio"
import MagazineSection from "@/components/magazine-section"
import CallToAction from "@/components/call-to-action"
import Blog from "@/components/blog"
import Services from "@/components/services"
import Clients from "@/components/clients"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <WorkProcess />
      <Portfolio />
      <MagazineSection />
      <CallToAction />
      <Blog />
      <Services />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
