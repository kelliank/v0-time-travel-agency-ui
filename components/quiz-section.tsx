"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, ArrowRight } from "lucide-react"

interface QuizQuestion {
  id: number
  question: string
  options: {
    value: string
    label: string
    weight: { paris: number; cretace: number; florence: number }
  }[]
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Quel type d'expérience recherchez-vous ?",
    options: [
      { 
        value: "cultural", 
        label: "Culturelle et artistique", 
        weight: { paris: 2, cretace: 0, florence: 3 } 
      },
      { 
        value: "adventure", 
        label: "Aventure et nature", 
        weight: { paris: 0, cretace: 3, florence: 0 } 
      },
      { 
        value: "elegance", 
        label: "Élégance et raffinement", 
        weight: { paris: 3, cretace: 0, florence: 2 } 
      }
    ]
  },
  {
    id: 2,
    question: "Votre période préférée ?",
    options: [
      { 
        value: "modern", 
        label: "Histoire moderne (XIXe-XXe siècle)", 
        weight: { paris: 3, cretace: 0, florence: 1 } 
      },
      { 
        value: "ancient", 
        label: "Temps anciens et origines", 
        weight: { paris: 0, cretace: 3, florence: 0 } 
      },
      { 
        value: "renaissance", 
        label: "Renaissance et classicisme", 
        weight: { paris: 1, cretace: 0, florence: 3 } 
      }
    ]
  },
  {
    id: 3,
    question: "Vous préférez :",
    options: [
      { 
        value: "urban", 
        label: "L'effervescence urbaine", 
        weight: { paris: 3, cretace: 0, florence: 2 } 
      },
      { 
        value: "nature", 
        label: "La nature sauvage", 
        weight: { paris: 0, cretace: 3, florence: 0 } 
      },
      { 
        value: "art", 
        label: "L'art et l'architecture", 
        weight: { paris: 2, cretace: 0, florence: 3 } 
      }
    ]
  },
  {
    id: 4,
    question: "Votre activité idéale :",
    options: [
      { 
        value: "monuments", 
        label: "Visiter des monuments", 
        weight: { paris: 3, cretace: 0, florence: 2 } 
      },
      { 
        value: "wildlife", 
        label: "Observer la faune", 
        weight: { paris: 0, cretace: 3, florence: 0 } 
      },
      { 
        value: "museums", 
        label: "Explorer des musées", 
        weight: { paris: 2, cretace: 0, florence: 3 } 
      }
    ]
  }
]

const destinationInfo = {
  paris: {
    name: "Paris 1889",
    description: "Belle Époque, Tour Eiffel, Exposition Universelle",
    image: "/destinations/paris.png"
  },
  cretace: {
    name: "Crétacé",
    description: "Dinosaures, nature préhistorique",
    image: "/destinations/cretace.png"
  },
  florence: {
    name: "Florence 1504",
    description: "Renaissance, art, Michel-Ange",
    image: "/destinations/florence.png"
  }
}

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [recommendation, setRecommendation] = useState<string | null>(null)
  const [aiExplanation, setAiExplanation] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value })
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateRecommendation = () => {
    const scores = { paris: 0, cretace: 0, florence: 0 }
    
    Object.entries(answers).forEach(([questionIndex, answerValue]) => {
      const question = quizQuestions[parseInt(questionIndex)]
      const selectedOption = question.options.find(opt => opt.value === answerValue)
      if (selectedOption) {
        scores.paris += selectedOption.weight.paris
        scores.cretace += selectedOption.weight.cretace
        scores.florence += selectedOption.weight.florence
      }
    })

    const recommended = Object.entries(scores).reduce((a, b) => 
      scores[a[0] as keyof typeof scores] > scores[b[0] as keyof typeof scores] ? a : b
    )[0] as keyof typeof scores

    return recommended
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    const recommended = calculateRecommendation()
    setRecommendation(recommended)

    // Générer l'explication avec l'IA
    try {
      const answersText = quizQuestions.map((q, idx) => {
        const answer = q.options.find(opt => opt.value === answers[idx])
        return `${q.question} → ${answer?.label}`
      }).join('\n')

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            {
              role: 'user',
              content: `En tant que conseiller TimeTravel Agency, j'ai fait passer un quiz à un client avec ces réponses :\n\n${answersText}\n\nLa destination recommandée est ${destinationInfo[recommended].name}. Rédige une explication personnalisée et enthousiaste (2-3 phrases) expliquant pourquoi cette destination est parfaite pour ce client. Reste dans le ton professionnel mais chaleureux de l'agence.`
            }
          ]
        })
      })

      const data = await response.json()
      setAiExplanation(data.message || "Cette destination correspond parfaitement à vos attentes !")
    } catch (error) {
      console.error('Erreur IA:', error)
      setAiExplanation("Cette destination correspond parfaitement à vos attentes !")
    } finally {
      setIsLoading(false)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setRecommendation(null)
    setAiExplanation("")
  }

  if (recommendation) {
    const dest = destinationInfo[recommendation as keyof typeof destinationInfo]
    return (
      <section id="quiz" className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect border border-border rounded-2xl p-8 animate-in fade-in duration-500">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Votre destination idéale :
              </h3>
              <h2 className="text-4xl font-bold mb-4 text-primary">
                {dest.name}
              </h2>
              <p className="text-xl text-muted-foreground mb-2">
                {dest.description}
              </p>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden mb-8">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover"
              />
            </div>

            {isLoading ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center gap-2 text-muted-foreground">
                  <Sparkles className="w-5 h-5 animate-spin" />
                  Génération de votre recommandation personnalisée...
                </div>
              </div>
            ) : (
              <div className="bg-secondary/50 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <p className="text-lg text-foreground leading-relaxed">
                    {aiExplanation}
                  </p>
                </div>
              </div>
            )}

            <div className="flex gap-4 justify-center">
              <Button 
                onClick={resetQuiz}
                variant="outline"
                className="border-border bg-transparent text-foreground hover:bg-secondary"
              >
                Refaire le quiz
              </Button>
              <Button 
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="#reservation">
                  Réserver cette destination
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const currentQ = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <section id="quiz" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold font-mono text-sm uppercase tracking-wider mb-4 block">
            Recommandation personnalisée
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Trouvez votre destination idéale
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Répondez à quelques questions et laissez notre IA vous recommander 
            la destination temporelle parfaite pour vous.
          </p>
        </div>

        {/* Quiz */}
        <div className="glass-effect border border-border rounded-2xl p-8">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestion + 1} sur {quizQuestions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <h3 className="text-2xl font-bold mb-6 text-foreground">
            {currentQ.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {currentQ.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                  answers[currentQuestion] === option.value
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border bg-secondary/50 text-foreground hover:border-primary/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    answers[currentQuestion] === option.value
                      ? 'border-primary bg-primary'
                      : 'border-muted-foreground'
                  }`}>
                    {answers[currentQuestion] === option.value && (
                      <Check className="w-3 h-3 text-primary-foreground" />
                    )}
                  </div>
                  <span className="text-lg">{option.label}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button 
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              variant="outline"
              className="border-border bg-transparent text-foreground hover:bg-secondary disabled:opacity-50"
            >
              Précédent
            </Button>
            
            {currentQuestion < quizQuestions.length - 1 ? (
              <Button 
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
                className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                Suivant
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit}
                disabled={!answers[currentQuestion]}
                className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Voir ma recommandation
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
