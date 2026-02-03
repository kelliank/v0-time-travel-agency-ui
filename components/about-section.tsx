"use client"

import { Shield, Zap, Clock, Compass } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Technologie Quantique",
    description: "Notre technologie de pointe permet des voyages temporels sûrs et précis à travers les époques."
  },
  {
    icon: Shield,
    title: "Sécurité Maximale",
    description: "Chaque voyage est surveillé par nos experts pour garantir votre retour en toute sécurité."
  },
  {
    icon: Compass,
    title: "Guides Experts",
    description: "Des historiens et futurologues certifiés vous accompagnent dans chaque aventure."
  },
  {
    icon: Zap,
    title: "Expérience Immersive",
    description: "Vivez l'histoire comme jamais auparavant, tous vos sens seront sollicités."
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-gold font-mono text-sm uppercase tracking-wider mb-4 block">
              À propos de nous
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">
              Pionniers du voyage temporel depuis <span className="text-primary">2087</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              TimeTravel Agency est née d'un rêve audacieux : permettre à chacun d'explorer 
              les mystères du temps. Grâce à notre technologie révolutionnaire de portails 
              quantiques, nous avons rendu possible l'impossible.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Depuis notre création, nous avons guidé plus de 50 000 voyageurs à travers 
              les époques, de l'Égypte ancienne aux cités futuristes de 3000. Chaque voyage 
              est une aventure unique, soigneusement planifiée pour votre sécurité et 
              votre émerveillement.
            </p>
          </div>
          
          {/* Right content - Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="p-6 rounded-xl glass-effect border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
