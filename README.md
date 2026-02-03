# ⏰ TimeTravel Agency - Interface Web

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/kelliankauffmann-2231s-projects/v0-time-travel-agency-ui)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/l6tx4CT0cZ8)

## 📖 À propos

TimeTravel Agency est une application web fictive d'agence de voyage temporel de luxe. Cette interface moderne et élégante permet aux utilisateurs de découvrir et réserver des voyages vers différentes époques historiques, avec un chatbot intelligent pour les assister dans leur choix.

## 🚀 Stack Technique

### Frontend
- **Next.js 16** - Framework React pour la production
- **React 19** - Bibliothèque UI
- **TypeScript** - Langage typé pour plus de robustesse
- **Tailwind CSS 4** - Framework CSS utilitaire
- **Radix UI** - Composants UI accessibles et personnalisables
- **Lucide React** - Icônes modernes

### Backend & API
- **Next.js API Routes** - Routes API serverless
- **Mistral AI API** - Intelligence artificielle pour le chatbot

### Outils & Déploiement
- **Vercel** - Hébergement et déploiement continu
- **pnpm** - Gestionnaire de paquets performant
- **ESLint** - Linter pour la qualité du code
- **PostCSS** - Transformation CSS

### Bibliothèques Complémentaires
- **react-hook-form** & **zod** - Gestion et validation de formulaires
- **next-themes** - Gestion du thème sombre/clair
- **date-fns** - Manipulation de dates
- **clsx** & **tailwind-merge** - Utilitaires pour les classes CSS

## ✨ Fonctionnalités

### Interface Principale
- 🎨 **Design moderne et responsive** - Interface élégante adaptée à tous les écrans
- 🌓 **Mode sombre/clair** - Thème personnalisable pour le confort visuel
- 🧭 **Navigation fluide** - Expérience utilisateur optimisée
- 📱 **Mobile-first** - Conçu d'abord pour les appareils mobiles

### Sections du Site
- 🏠 **Hero Section** - Page d'accueil accrocheuse avec call-to-action
- ℹ️ **À propos** - Présentation de l'agence et de ses services
- 🗓️ **Époques disponibles** - Catalogue des périodes historiques visitables
- 🌍 **Destinations** - Détails sur chaque destination temporelle :
  - **Paris 1889** (Belle Époque) - Exposition Universelle, Tour Eiffel
  - **Crétacé** (-65M années) - Ère des dinosaures
  - **Florence 1505** (Renaissance) - Art et culture italienne
- 📝 **Système de réservation** - Formulaire interactif pour planifier son voyage
- 📧 **Section Contact** - Formulaire de contact et informations pratiques
- 👤 **Footer** - Informations de contact et liens utiles

### Chatbot Intelligent "Chrono"
- 💬 **Assistant conversationnel** - Conseiller virtuel disponible 24/7
- 🤖 **IA générative** - Réponses personnalisées et contextuelles
- ⚡ **Réponses rapides** - Suggestions de questions fréquentes
- 📚 **Expertise historique** - Conseils détaillés sur chaque époque
- 🎯 **Recommandations personnalisées** - Aide au choix de destination

## 🤖 Intelligence Artificielle Utilisée

Ce projet a été développé avec l'assistance de plusieurs outils d'IA de pointe :

### Claude (Anthropic)
- **Utilisation** : Développement du code, architecture de l'application

### ChatGPT (OpenAI)
- **Utilisation** : Brainstorming créatif, génération de contenu

### Perplexity
- **Utilisation** : Génération de contenu


## 🛠️ Installation & Développement

### Prérequis
- Node.js 18+ 
- pnpm (recommandé) ou npm

### Installation

```bash
# Cloner le repository
git clone https://github.com/votre-repo/v0-time-travel-agency-ui.git

# Installer les dépendances
pnpm install

# Configurer les variables d'environnement
# Créer un fichier .env.local avec :
MISTRAL_API_KEY=votre_clé_api_mistral
```

### Développement

```bash
# Lancer le serveur de développement
pnpm dev

# Ouvrir http://localhost:3000
```

### Build & Déploiement

```bash
# Build de production
pnpm build

# Lancer en production
pnpm start
```

## 🌐 Déploiement

L'application est déployée automatiquement sur Vercel :

**[https://vercel.com/kelliankauffmann-2231s-projects/v0-time-travel-agency-ui](https://vercel.com/kelliankauffmann-2231s-projects/v0-time-travel-agency-ui)**

Chaque push sur la branche principale déclenche un nouveau déploiement automatique.

## 📂 Structure du Projet

```
v0-time-travel-agency-ui/
├── app/                    # Next.js App Router
│   ├── api/               # Routes API
│   │   └── chat/         # Endpoint chatbot
│   ├── layout.tsx        # Layout principal
│   ├── page.tsx          # Page d'accueil
│   └── globals.css       # Styles globaux
├── components/            # Composants React
│   ├── ui/               # Composants UI réutilisables
│   ├── navbar.tsx        # Navigation
│   ├── hero-section.tsx  # Section hero
│   ├── about-section.tsx # Section à propos
│   ├── eras-section.tsx  # Section époques
│   ├── destinations-section.tsx # Section destinations
│   ├── booking-section.tsx # Section réservation
│   ├── contact-section.tsx # Section contact
│   ├── footer.tsx        # Pied de page
│   └── chatbot.tsx       # Chatbot Chrono
├── lib/                   # Utilitaires
├── public/               # Assets statiques
└── styles/               # Styles CSS
```

## 🔑 Variables d'Environnement

```env
MISTRAL_API_KEY=votre_clé_api_mistral
```

## 📝 Licence

Ce projet est un projet personnel à but démonstratif.

## 👥 Crédits

- **Design & Développement** : Développé avec l'assistance de v0.app
- **IA & Code** : Claude, ChatGPT, Perplexity
- **Chatbot** : Propulsé par Mistral AI