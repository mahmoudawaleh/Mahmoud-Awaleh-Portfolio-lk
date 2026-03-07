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
import DesignShowcase from "@/components/design-showcase"
import GovernmentPublications from "@/components/government-publications"
import ScrollProgress from "@/components/scroll-progress"
import BackToTop from "@/components/back-to-top"
import CursorFollower from "@/components/cursor-follower"

export default function HomePage() {
  return (
    <div id="main-content" className="min-h-screen bg-background scrollbar-gold">
      <ScrollProgress />
      <CursorFollower />
      <Header />
      <Hero />
      <About />
      <WorkProcess />
      <Portfolio />
      <DesignShowcase />
      <GovernmentPublications />
      <MagazineSection />
      <CallToAction />
      <Blog />
      <Services />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}
