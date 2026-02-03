"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Users, MapPin, Check, Sparkles } from "lucide-react"

const destinations = [
  { value: "paris", label: "Paris 1889 (Belle Époque)" },
  { value: "cretace", label: "Crétacé (-65 millions d'années)" },
  { value: "florence", label: "Florence 1504 (Renaissance)" }
]

export function BookingSection() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    destination: "",
    date: "",
    travelers: "",
    name: "",
    email: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Dernière étape : confirmer la réservation
      setIsSubmitted(true)
      console.log("Réservation confirmée:", formData)
    }
  }

  const isStepComplete = (stepNum: number) => {
    switch (stepNum) {
      case 1:
        return formData.destination && formData.date
      case 2:
        return formData.travelers && formData.name
      case 3:
        return formData.email
      default:
        return false
    }
  }

  return (
    <section id="reservation" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold font-mono text-sm uppercase tracking-wider mb-4 block">
            Réservation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Planifiez votre voyage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Réservez votre aventure temporelle en quelques étapes simples. 
            Notre équipe vous contactera pour finaliser les détails.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {[1, 2, 3].map((stepNum) => (
            <div key={stepNum} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                step === stepNum 
                  ? 'bg-primary text-primary-foreground'
                  : step > stepNum
                    ? 'bg-gold text-accent-foreground'
                    : 'bg-secondary text-muted-foreground'
              }`}>
                {step > stepNum ? <Check className="w-5 h-5" /> : stepNum}
              </div>
              {stepNum < 3 && (
                <div className={`w-16 h-0.5 mx-2 transition-all duration-300 ${
                  step > stepNum ? 'bg-gold' : 'bg-border'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="glass-effect border border-border rounded-2xl p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
            {/* Step 1: Destination & Date */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Choisissez votre destination
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="destination" className="text-foreground">Destination temporelle</Label>
                    <Select 
                      value={formData.destination} 
                      onValueChange={(value) => setFormData({ ...formData, destination: value })}
                    >
                      <SelectTrigger className="bg-secondary border-border text-foreground">
                        <SelectValue placeholder="Sélectionnez une époque" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        {destinations.map((dest) => (
                          <SelectItem key={dest.value} value={dest.value} className="text-popover-foreground">
                            {dest.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-foreground">Date de départ</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="date"
                        id="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="pl-10 bg-secondary border-border text-foreground"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Travelers */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Informations voyageurs
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="travelers" className="text-foreground">Nombre de voyageurs</Label>
                    <Select 
                      value={formData.travelers} 
                      onValueChange={(value) => setFormData({ ...formData, travelers: value })}
                    >
                      <SelectTrigger className="bg-secondary border-border text-foreground">
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()} className="text-popover-foreground">
                            {num} voyageur{num > 1 ? 's' : ''}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Nom complet</Label>
                    <Input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jean Dupont"
                      className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Finaliser la réservation
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Adresse email</Label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jean@example.com"
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                  />
                  <p className="text-sm text-muted-foreground">
                    Nous vous enverrons la confirmation et les détails de votre voyage.
                  </p>
                </div>

                {/* Summary */}
                <div className="mt-8 p-6 rounded-xl bg-secondary/50 border border-border">
                  <h4 className="font-semibold mb-4 text-foreground">Récapitulatif</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Destination:</span>
                      <span className="text-foreground">{destinations.find(d => d.value === formData.destination)?.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="text-foreground">{formData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Voyageurs:</span>
                      <span className="text-foreground">{formData.travelers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Nom:</span>
                      <span className="text-foreground">{formData.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setStep(step - 1)}
                  className="border-border bg-transparent text-foreground hover:bg-secondary"
                >
                  Précédent
                </Button>
              )}
              <Button 
                type="submit" 
                className={`bg-primary text-primary-foreground hover:bg-primary/90 ${step === 1 ? 'ml-auto' : ''}`}
                disabled={!isStepComplete(step)}
              >
                {step < 3 ? 'Continuer' : 'Confirmer la réservation'}
              </Button>
            </div>
          </form>
          ) : (
            <div className="text-center py-12 animate-in fade-in duration-500">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Réservation confirmée !</h3>
              <p className="text-muted-foreground mb-2">
                Merci {formData.name} pour votre réservation.
              </p>
              <p className="text-muted-foreground mb-8">
                Vous recevrez un email de confirmation à <span className="text-primary font-semibold">{formData.email}</span> avec tous les détails de votre voyage.
              </p>
              <Button 
                onClick={() => {
                  setIsSubmitted(false)
                  setStep(1)
                  setFormData({
                    destination: "",
                    date: "",
                    travelers: "",
                    name: "",
                    email: ""
                  })
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Nouvelle réservation
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
