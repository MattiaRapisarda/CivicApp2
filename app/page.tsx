import { LandingCta } from "@/components/landing/landing-cta"
import { LandingFeatures } from "@/components/landing/landing-features"
import { LandingHero } from "@/components/landing/landing-hero"
import { LandingWhy } from "@/components/landing/landing-why"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <LandingHero />
      <LandingFeatures />
      <LandingWhy />
      <LandingCta />
    </main>
  )
}