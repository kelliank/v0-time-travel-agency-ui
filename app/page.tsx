import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { DestinationsSection } from "@/components/destinations-section"
import { ErasSection } from "@/components/eras-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ErasSection />
      <DestinationsSection />
      <BookingSection />
      <Footer />
      <Chatbot />
    </main>
  )
}
