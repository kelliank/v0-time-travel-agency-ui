"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-background">
        {/* Vortex effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[800px] h-[800px]">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-rotate-slow" />
            <div className="absolute inset-8 rounded-full border border-primary/30 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
            <div className="absolute inset-16 rounded-full border border-primary/40 animate-rotate-slow" style={{ animationDuration: '12s' }} />
            <div className="absolute inset-24 rounded-full border border-gold/30 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '10s' }} />
            <div className="absolute inset-32 rounded-full border border-primary/50 animate-rotate-slow" style={{ animationDuration: '8s' }} />
            
            {/* Center glow */}
            <div className="absolute inset-40 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-gold animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-primary animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-neon-cyan animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-gold animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-primary animate-float" style={{ animationDelay: '1.5s' }} />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(var(--primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--primary) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-border mb-8">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-sm text-muted-foreground font-mono">Portails temporels actifs</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
          <span className="text-foreground">Voyagez à travers</span>
          <br />
          <span className="text-glow text-primary">le temps</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
          Explorez les époques les plus fascinantes de l'histoire. 
          Du passé lointain aux futurs inexplorés, votre aventure temporelle commence ici.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow"
          >
            Découvrir les destinations
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-border bg-transparent text-foreground hover:bg-secondary"
          >
            En savoir plus
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm text-muted-foreground">Défiler</span>
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
