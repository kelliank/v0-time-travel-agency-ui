"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, AlertTriangle } from "lucide-react"
import Image from "next/image"

const destinations = [
  {
    id: 1,
    name: "Paris 1889",
    period: "1889 ap. J.-C.",
    description: "Découvrez la Belle Époque, admirez la Tour Eiffel fraîchement construite et vivez l'Exposition Universelle.",
    image: "/destinations/paris.png",
    duration: "4 jours",
    riskLevel: "Faible",
    era: "past"
  },
  {
    id: 2,
    name: "Crétacé",
    period: "65 millions av. J.-C.",
    description: "Explorez l'ère des dinosaures et découvrez la nature préhistorique dans toute sa splendeur.",
    image: "/destinations/cretace.png",
    duration: "3 jours",
    riskLevel: "Élevé",
    era: "past"
  },
  {
    id: 3,
    name: "Florence 1504",
    period: "1504 ap. J.-C.",
    description: "Plongez au cœur de la Renaissance, admirez les œuvres de Michel-Ange et vivez l'âge d'or de l'art italien.",
    image: "/destinations/florence.png",
    duration: "5 jours",
    riskLevel: "Faible",
    era: "past"
  }
]

function getRiskColor(level: string) {
  switch (level) {
    case "Faible": return "text-green-400"
    case "Modéré": return "text-gold"
    case "Élevé": return "text-destructive"
    default: return "text-muted-foreground"
  }
}

export function DestinationsSection() {
  return (
    <section id="destinations" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-mono text-sm uppercase tracking-wider mb-4 block">
            Destinations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Explorez les époques
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des civilisations anciennes aux mondes futuristes, choisissez votre prochaine 
            aventure temporelle parmi nos destinations soigneusement sélectionnées.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative rounded-xl overflow-hidden glass-effect border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Era badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                    destination.era === 'past' 
                      ? 'bg-primary/20 text-primary border border-primary/30' 
                      : 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                  }`}>
                    {destination.era === 'past' ? 'Passé' : 'Futur'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-gold text-sm mb-2 font-mono">
                  <Clock className="w-4 h-4" />
                  {destination.period}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>

                {/* Meta info */}
                <div className="flex items-center justify-between text-sm border-t border-border pt-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {destination.duration}
                    </span>
                    <span className={`flex items-center gap-1 ${getRiskColor(destination.riskLevel)}`}>
                      <AlertTriangle className="w-4 h-4" />
                      {destination.riskLevel}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Voir toutes les destinations
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
