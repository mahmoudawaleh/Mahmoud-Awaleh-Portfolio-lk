"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Do you have Project Idea?
            <br />
            Let's discuss your project!
          </h2>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Ready to transform your communication strategy and create impactful designs? Let's collaborate on meaningful
            projects that make a difference for your organization and community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-primary-foreground">
              Let's Work Together
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open("https://issuu.com/mahmoudawaleh/docs/m2_portfolio_2021", "_blank")}
            >
              View Complete Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
