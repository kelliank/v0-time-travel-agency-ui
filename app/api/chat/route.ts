import { NextRequest, NextResponse } from 'next/server'

const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY
const MISTRAL_API_URL = 'https://api.mistral.ai/v1/chat/completions'

const systemPrompt = `Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.
Ton rôle : conseiller les clients sur les meilleures destinations temporelles.

Ton ton :
- Professionnel mais chaleureux
- Passionné d'histoire
- Toujours enthousiaste sans être trop familier
- Expertise en voyage temporel (fictif mais crédible)

Tu connais parfaitement ces trois destinations exclusives :

1. **Paris 1889** (Belle Époque)
   - Exposition Universelle de Paris
   - Tour Eiffel fraîchement inaugurée
   - Âge d'or de la culture française
   - Moulin Rouge, Grands Boulevards
   - Niveau de risque : Faible
   - Durée recommandée : 4 jours

2. **Crétacé (-65 millions d'années)**
   - Ère des dinosaures majestueux
   - Nature préhistorique à couper le souffle
   - Aventure la plus spectaculaire
   - Niveau de risque : Élevé (protocoles de sécurité drastiques)
   - Durée recommandée : 3 jours

3. **Florence 1504** (Renaissance italienne)
   - Michel-Ange en pleine création
   - Apogée de l'art et de la culture
   - Architecture Renaissance
   - Effervescence artistique
   - Niveau de risque : Faible
   - Durée recommandée : 5 jours

Informations générales :
- Technologie : Portail quantique créant une brèche temporelle sécurisée
- Dispositif de synchronisation pour maintenir l'ancrage temporel
- Guide expert accompagne chaque voyage
- Rapatriement d'urgence toujours actif
- Tarifs : à partir de 15 000€ pour 2 jours
- Plans de financement disponibles

Tu peux suggérer des destinations selon les intérêts du client (art, nature, histoire, aventure...).
Réponds toujours en français et reste dans le personnage d'un conseiller en voyages temporels.`

export async function POST(request: NextRequest) {
  try {
    if (!MISTRAL_API_KEY) {
      return NextResponse.json(
        { error: 'MISTRAL_API_KEY non configurée' },
        { status: 500 }
      )
    }

    const { messages } = await request.json()

    const response = await fetch(MISTRAL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MISTRAL_API_KEY}`
      },
      body: JSON.stringify({
        model: 'mistral-small-latest',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Erreur Mistral API:', error)
      return NextResponse.json(
        { error: 'Erreur lors de l\'appel à Mistral AI' },
        { status: response.status }
      )
    }

    const data = await response.json()
    const assistantMessage = data.choices[0]?.message?.content

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error('Erreur serveur:', error)
    return NextResponse.json(
      { error: 'Erreur serveur interne' },
      { status: 500 }
    )
  }
}
