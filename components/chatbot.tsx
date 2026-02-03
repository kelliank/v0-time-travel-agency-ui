"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

const quickReplies = [
  "Quelle destination recommandez-vous ?",
  "Quels sont les risques ?",
  "Comment fonctionne le voyage ?",
  "Prix et réservation"
]

const botResponses: Record<string, string> = {
  "destination": "Je vous recommande l'Égypte Ancienne pour une première expérience ! C'est une destination fascinante avec un niveau de risque modéré. Vous pourrez assister à la construction des pyramides et rencontrer les pharaons.",
  "risque": "Chaque voyage comporte un niveau de risque évalué par nos experts. Nous avons trois niveaux : Faible, Modéré et Élevé. Nos guides formés vous accompagnent à chaque instant et notre technologie de rapatriement d'urgence est toujours active.",
  "fonctionne": "Notre technologie de portail quantique crée une brèche temporelle sécurisée. Vous êtes équipé d'un dispositif de synchronisation qui vous maintient ancré à notre époque. Le voyage est instantané et sans effets secondaires.",
  "prix": "Nos forfaits commencent à partir de 15 000€ pour une expérience de 2 jours. Nous proposons des plans de financement et des offres spéciales pour les premiers voyageurs. Souhaitez-vous que je vous envoie notre brochure ?",
  "default": "Merci pour votre question ! Je suis Chrono, votre assistant TimeTravel. Je peux vous aider à choisir votre destination, comprendre notre technologie, ou répondre à vos questions sur la sécurité et les tarifs."
}

function getBotResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  if (lowerMessage.includes("destination") || lowerMessage.includes("recommand")) {
    return botResponses.destination
  }
  if (lowerMessage.includes("risque") || lowerMessage.includes("danger") || lowerMessage.includes("sécur")) {
    return botResponses.risque
  }
  if (lowerMessage.includes("fonctionne") || lowerMessage.includes("comment") || lowerMessage.includes("technologie")) {
    return botResponses.fonctionne
  }
  if (lowerMessage.includes("prix") || lowerMessage.includes("réserv") || lowerMessage.includes("tarif") || lowerMessage.includes("coût")) {
    return botResponses.prix
  }
  return botResponses.default
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis Chrono, votre assistant TimeTravel. Comment puis-je vous aider à planifier votre voyage temporel ?",
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim()
    if (!messageText) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isBot: false,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(messageText),
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-300 animate-pulse-glow ${isOpen ? 'hidden' : ''}`}
        aria-label="Ouvrir le chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-6rem)] rounded-2xl glass-effect border border-border flex flex-col overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="p-4 border-b border-border flex items-center justify-between bg-secondary/50">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Chrono</h3>
                <p className="text-xs text-muted-foreground">Assistant TimeTravel</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fermer le chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isBot ? '' : 'flex-row-reverse'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  message.isBot ? 'bg-primary/20' : 'bg-gold/20'
                }`}>
                  {message.isBot ? (
                    <Bot className="w-4 h-4 text-primary" />
                  ) : (
                    <User className="w-4 h-4 text-gold" />
                  )}
                </div>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.isBot 
                    ? 'bg-secondary text-secondary-foreground rounded-tl-sm' 
                    : 'bg-primary text-primary-foreground rounded-tr-sm'
                }`}>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="px-4 pb-2 flex gap-2 overflow-x-auto">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleSendMessage(reply)}
                className="shrink-0 px-3 py-1.5 rounded-full text-xs bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors border border-border"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <form 
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
              className="flex gap-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Posez votre question..."
                className="flex-1 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button 
                type="submit" 
                size="icon"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0"
                disabled={!inputValue.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Propulsé par l'IA temporelle
            </p>
          </div>
        </div>
      )}
    </>
  )
}
