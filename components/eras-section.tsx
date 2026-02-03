"use client"

import { History, Globe, Rocket } from "lucide-react"

const eras = [
  {
    id: "past",
    icon: History,
    title: "Le Passé",
    subtitle: "Explorez l'histoire",
    description: "Revivez les moments qui ont façonné notre monde. Des pyramides d'Égypte aux batailles médiévales, plongez au cœur de l'histoire.",
    highlights: ["Civilisations anciennes", "Moments historiques", "Cultures disparues"],
    color: "primary",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    id: "present",
    icon: Globe,
    title: "Le Présent",
    subtitle: "Vivez l'instant",
    description: "Découvrez des lieux et moments uniques de notre époque. Des événements exclusifs aux rencontres exceptionnelles.",
    highlights: ["Événements exclusifs", "Rencontres VIP", "Expériences uniques"],
    color: "gold",
    gradient: "from-gold/20 to-gold/5"
  },
  {
    id: "future",
    icon: Rocket,
    title: "Le Futur",
    subtitle: "Anticipez demain",
    description: "Voyagez vers les mondes de demain. Colonies spatiales, cités futuristes, et technologies inimaginables vous attendent.",
    highlights: ["Colonies spatiales", "Technologies futures", "Nouvelles civilisations"],
    color: "neon-cyan",
    gradient: "from-neon-cyan/20 to-neon-cyan/5"
  }
]

export function ErasSection() {
  return (
    <section id="eras" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-px h-96 bg-gradient-to-b from-transparent via-primary to-transparent" />
        <div className="absolute top-1/2 right-0 w-px h-96 bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-mono text-sm uppercase tracking-wider mb-4 block">
            Époques
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Choisissez votre ère
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trois dimensions temporelles s'offrent à vous. Chacune recèle des merveilles 
            uniques et des aventures extraordinaires.
          </p>
        </div>

        {/* Eras Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {eras.map((era) => (
            <div
              key={era.id}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative h-full p-8 rounded-2xl glass-effect border border-border hover:border-${era.color}/50 transition-all duration-500 overflow-hidden`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-b ${era.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-${era.color}/10 border border-${era.color}/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <era.icon className={`w-8 h-8 text-${era.color}`} />
                  </div>
                  
                  {/* Text */}
                  <span className={`text-${era.color} font-mono text-sm uppercase tracking-wider mb-2 block`}>
                    {era.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {era.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {era.description}
                  </p>
                  
                  {/* Highlights */}
                  <ul className="space-y-2">
                    {era.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full bg-${era.color}`} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Decorative line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${era.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
