"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, AlertTriangle, X, Users, Calendar, Shield, Star } from "lucide-react"
import Image from "next/image"

interface Destination {
  id: number
  name: string
  period: string
  description: string
  fullDescription: string
  image: string
  duration: string
  riskLevel: string
  era: string
  price: string
  maxTravelers: number
  highlights: string[]
  included: string[]
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Paris 1889",
    period: "1889 ap. J.-C.",
    description: "Découvrez la Belle Époque, admirez la Tour Eiffel fraîchement construite et vivez l'Exposition Universelle.",
    fullDescription: "Plongez dans l'effervescence de la Belle Époque parisienne ! Assistez à l'inauguration de la Tour Eiffel, chef-d'œuvre de Gustave Eiffel, et explorez l'Exposition Universelle qui célèbre le centenaire de la Révolution française. Déambulez sur les Grands Boulevards illuminés, assistez aux spectacles du Moulin Rouge, et vivez l'âge d'or de la culture française. Cette époque raffinée vous transportera dans un monde d'élégance, d'innovations technologiques et d'effervescence artistique.",
    image: "/destinations/paris.png",
    duration: "4 jours",
    riskLevel: "Faible",
    era: "past",
    price: "15 000€",
    maxTravelers: 6,
    highlights: [
      "Inauguration de la Tour Eiffel",
      "Exposition Universelle de Paris",
      "Spectacle au Moulin Rouge",
      "Promenade sur les Grands Boulevards",
      "Dîner dans un restaurant Belle Époque"
    ],
    included: [
      "Guide historien expert",
      "Costumes d'époque authentiques",
      "Billets d'entrée à l'Exposition",
      "Hébergement luxe 4 étoiles",
      "Dispositif de rapatriement d'urgence"
    ]
  },
  {
    id: 2,
    name: "Crétacé",
    period: "65 millions av. J.-C.",
    description: "Explorez l'ère des dinosaures et découvrez la nature préhistorique dans toute sa splendeur.",
    fullDescription: "Embarquez pour l'aventure ultime : un voyage au Crétacé, il y a 65 millions d'années ! Observez de près les dinosaures majestueux dans leur habitat naturel : Tyrannosaurus Rex, Triceratops, Brachiosaures... Explorez une nature préhistorique luxuriante et sauvage, avant l'extinction massive. Cette expédition exceptionnelle vous garantit une sécurité maximale grâce à nos protocoles drastiques et notre technologie de protection avancée. Un voyage inoubliable pour les amateurs d'aventure extrême !",
    image: "/destinations/cretace.png",
    duration: "3 jours",
    riskLevel: "Élevé",
    era: "past",
    price: "45 000€",
    maxTravelers: 4,
    highlights: [
      "Observation des T-Rex et Triceratops",
      "Safari préhistorique sécurisé",
      "Nature sauvage avant extinction",
      "Volcans actifs et forêts primaires",
      "Expérience nocturne sous les étoiles"
    ],
    included: [
      "Équipe de sécurité spécialisée",
      "Équipement de protection intégral",
      "Bunker sécurisé haute technologie",
      "Assurance tous risques premium",
      "Système de rapatriement instantané"
    ]
  },
  {
    id: 3,
    name: "Florence 1504",
    period: "1504 ap. J.-C.",
    description: "Plongez au cœur de la Renaissance, admirez les œuvres de Michel-Ange et vivez l'âge d'or de l'art italien.",
    fullDescription: "Vivez la Renaissance italienne à son apogée ! Florence 1504 est l'épicentre de l'art et de la culture européenne. Rencontrez Michel-Ange travaillant sur ses chefs-d'œuvre, explorez les ateliers des grands maîtres, et assistez aux débats philosophiques dans les cours des Médicis. Admirez la construction du Duomo, déambulez dans les rues pavées, et imprégnez-vous de l'atmosphère unique de cette période extraordinaire où l'humanisme et l'art ont atteint des sommets inégalés.",
    image: "/destinations/florence.png",
    duration: "5 jours",
    riskLevel: "Faible",
    era: "past",
    price: "18 000€",
    maxTravelers: 6,
    highlights: [
      "Rencontre avec Michel-Ange",
      "Visite des ateliers de la Renaissance",
      "Palais des Médicis",
      "Cathédrale Santa Maria del Fiore",
      "Marché artisanal florentin"
    ],
    included: [
      "Guide expert en art Renaissance",
      "Costumes Renaissance sur mesure",
      "Accès privilèges aux ateliers",
      "Hébergement palazzo historique",
      "Cours d'italien ancien (optionnel)"
    ]
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
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)

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
              onClick={() => setSelectedDestination(destination)}
              className="group relative rounded-xl overflow-hidden glass-effect border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer"
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

      {/* Modal */}
      {selectedDestination && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedDestination(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto glass-effect border border-border rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedDestination(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Image Header */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <Image
                src={selectedDestination.image}
                alt={selectedDestination.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              
              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-2 text-gold text-sm mb-2 font-mono">
                  <Clock className="w-4 h-4" />
                  {selectedDestination.period}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {selectedDestination.name}
                </h2>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {selectedDestination.duration}
                  </span>
                  <span className={`flex items-center gap-1 ${getRiskColor(selectedDestination.riskLevel)}`}>
                    <AlertTriangle className="w-4 h-4" />
                    Risque {selectedDestination.riskLevel}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    Max {selectedDestination.maxTravelers} voyageurs
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedDestination.fullDescription}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10 border border-primary/30">
                <div>
                  <p className="text-sm text-muted-foreground">À partir de</p>
                  <p className="text-3xl font-bold text-primary">{selectedDestination.price}</p>
                </div>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setSelectedDestination(null)}
                >
                  <a href="#reservation">
                    Réserver maintenant
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold" />
                  Points forts
                </h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {selectedDestination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Included */}
              <div>
                <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  Inclus dans le forfait
                </h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {selectedDestination.included.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer CTA */}
              <div className="pt-4 border-t border-border flex gap-4">
                <Button 
                  variant="outline"
                  onClick={() => setSelectedDestination(null)}
                  className="flex-1 border-border bg-transparent text-foreground hover:bg-secondary"
                >
                  Fermer
                </Button>
                <Button 
                  asChild 
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setSelectedDestination(null)}
                >
                  <a href="#reservation">
                    Réserver cette destination
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
