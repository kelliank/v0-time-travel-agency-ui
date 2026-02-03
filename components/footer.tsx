"use client"

import { Clock, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  destinations: [
    { label: "Égypte Ancienne", href: "#" },
    { label: "Rome Impériale", href: "#" },
    { label: "Renaissance", href: "#" },
    { label: "Tokyo 2150", href: "#" },
    { label: "Mars Colony", href: "#" }
  ],
  company: [
    { label: "À propos", href: "#about" },
    { label: "Comment ça marche", href: "#" },
    { label: "Sécurité", href: "#" },
    { label: "Carrières", href: "#" },
    { label: "Presse", href: "#" }
  ],
  support: [
    { label: "Centre d'aide", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Conditions", href: "#" },
    { label: "Confidentialité", href: "#" }
  ]
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Time<span className="text-primary">Travel</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Pionniers du voyage temporel depuis 2087. 
              Explorez le passé, vivez le présent, anticipez le futur.
            </p>
            
            {/* Contact info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Paris, France - 2087</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@timetravel.agency</span>
              </div>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Destinations</h3>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2087 TimeTravel Agency. Tous droits réservés à travers toutes les époques.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground font-mono">
              Licence temporelle #TT-2087-FR-001
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
