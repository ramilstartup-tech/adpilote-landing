// Типизированный контент лендинга для EN и FR
// Вынесен в отдельный файл для удобства локализации и масштабирования

export type Lang = "en" | "fr";

export const landingContent = {
  en: {
    // Metadata
    meta: {
      title: "AdPilote – AI Google Ads Copilot",
      description:
        "AI Google Ads Copilot for agencies, freelancers and in-house teams. Automate search term cleaning, insights and executive reporting.",
    },

    // Header
    header: {
      logo: "AdPilote",
      nav: {
        product: "Product",
        pricing: "Pricing",
        faq: "FAQ",
        contact: "Contact",
      },
      cta: "Start Free Trial",
    },

    // Hero Section
    hero: {
      title: "AI Google Ads Copilot — built for performance marketers",
      subtitle:
        "Automate search term cleaning, negative keyword generation, insights, and executive reporting — 10× faster with AI.",
      primaryCta: "Start Free Trial",
      secondaryCta: "Watch Demo",
      dashboardCard: {
        title: "Search Terms Intelligence",
        stats: [
          { label: "ROAS", value: "+127%" },
          { label: "Wasted Spend", value: "-€4.2K" },
          { label: "Auto-cleaned", value: "1,847" },
        ],
      },
    },

    // Problem Section
    problem: {
      title: "Google Ads is too complex to manage manually.",
      intro:
        "Performance marketers waste hours every week on tedious, repetitive tasks that drain budgets and kill ROAS.",
      pains: [
        "Search term reports grow faster than you can analyze them",
        "Manual negative keyword management misses costly irrelevant clicks",
        "Executive reports take hours to create and are outdated by the time they're shared",
        "Campaign insights are buried in spreadsheets instead of actionable",
        "Agencies struggle to scale client management without hiring more analysts",
      ],
      closer:
        "You know there's a better way — but building internal tools or hiring more people isn't the answer.",
    },

    // Promise Section
    promise: {
      title: "Meet AdPilote — your AI Copilot for Google Ads.",
      intro:
        "AdPilote transforms how you manage Google Ads — from reactive firefighting to proactive optimization. Our AI reads your campaigns like a senior analyst and automates the work you hate.",
      benefits: [
        "Auto-clean search terms and generate negative keywords in seconds",
        "Get AI-generated insights and executive summaries on demand",
        "Monitor campaign performance in real-time with smart alerts",
        "Scale client management without scaling headcount",
        "Focus on strategy while AdPilote handles the tedious work",
      ],
      productParts: [
        {
          title: "Search Terms Intelligence",
          description: "AI-powered search term cleaning and keyword discovery",
        },
        {
          title: "AI Reports",
          description: "Executive summaries and insights generated instantly",
        },
        {
          title: "Real-Time Dashboard",
          description: "Live campaign monitoring with smart alerts",
        },
      ],
    },

    // How It Works
    howItWorks: {
      title: "How AdPilote Works",
      subtitle: "From messy search terms to clean insights in seconds.",
      steps: [
        {
          title: "1. Connect Your Account",
          description:
            "Link your Google Ads account securely via OAuth. No credentials stored, full control.",
          icon: "download",
        },
        {
          title: "2. AI Analyzes Everything",
          description:
            "Our AI scans search terms, groups by intent, detects waste, and generates insights automatically.",
          icon: "sparkles",
        },
        {
          title: "3. Export & Optimize",
          description:
            "One-click export to Google Ads, or use insights to make better decisions faster.",
          icon: "chart",
        },
      ],
    },

    // Before/After
    beforeAfter: {
      title: "See the Difference",
      before: {
        title: "Before AdPilote",
        items: [
          "best running shoes for men cheap",
          "running shoes sale clearance free shipping",
          "nike running shoes women size 8 purple",
          "how to clean running shoes",
          "running shoes vs walking shoes difference",
        ],
      },
      after: {
        title: "After AdPilote",
        badge: "91 terms auto-cleaned",
        clusters: [
          { intent: "Purchase Intent", volume: "1,240", negatives: "12" },
          { intent: "Research Intent", volume: "487", negatives: "34" },
          { intent: "Irrelevant", volume: "156", negatives: "156" },
        ],
      },
    },

    // AI Insights
    aiInsights: {
      title: "AI-Powered Insights",
      subtitle: "Stop guessing. Start optimizing with confidence.",
      cards: [
        {
          type: "Insight",
          title: "High-intent keywords underperforming",
          description:
            "3 clusters with strong purchase intent have ROAS below target. Low Quality Score detected.",
        },
        {
          type: "Explanation",
          title: "Why this matters",
          description:
            "You're paying 2.3× more per click than competitors for the same keywords. Ad copy mismatch likely.",
        },
        {
          type: "Recommendation",
          title: "Recommended action",
          description:
            "Rewrite ad copy to match search intent. Add negative keywords: 'cheap', 'free', 'clearance'.",
        },
      ],
    },

    // Dashboard Preview
    dashboardPreview: {
      title: "Real-Time Performance at a Glance",
      metrics: [
        { label: "ROAS", value: "4.2×", change: "+12%" },
        { label: "Spend vs Target", value: "€8.4K / €10K", progress: 84 },
        { label: "Wasted Spend", value: "-€1.2K", change: "-34%" },
        { label: "Clusters Optimized", value: "23/31", progress: 74 },
      ],
    },

    // Why Teams Love
    whyTeamsLove: {
      title: "Why teams love AdPilote",
      cards: [
        {
          title: "Save Hours Every Week",
          description:
            "Automate search term cleaning and report generation. Reclaim 10+ hours per week.",
        },
        {
          title: "Reduce Wasted Spend",
          description:
            "AI detects irrelevant clicks before they drain your budget. Average savings: 15-30%.",
        },
        {
          title: "Clear, Actionable Reports",
          description:
            "Executive summaries in plain language. No more spreadsheet gymnastics.",
        },
        {
          title: "Better Decisions, Faster",
          description:
            "AI insights highlight what's working and what's not. Optimize with confidence.",
        },
      ],
    },

    // Product: Search Terms Intelligence
    productSearchTerms: {
      title: "Search Terms Intelligence",
      intro:
        "Stop wasting time manually reviewing search term reports. AdPilote's AI analyzes every query, flags waste, and suggests negative keywords automatically.",
      features: [
        "Auto-categorize search terms by intent and relevance",
        "AI-suggested negative keywords based on your campaign goals",
        "Detect wasted spend on irrelevant clicks before it scales",
        "Group related search terms for smarter keyword expansion",
        "One-click export to Google Ads Editor or bulk upload",
        "Track search term trends over time to spot emerging opportunities",
        "Multi-account view for agencies managing dozens of clients",
      ],
    },

    // Product: AI Reports
    productReports: {
      title: "AI Reports",
      intro:
        "Get executive-ready reports in seconds, not hours. AdPilote's AI reads your campaigns and writes insights in plain language — no more spreadsheet gymnastics.",
      features: [
        "Auto-generate weekly or monthly performance summaries",
        "AI-written insights highlight what's working and what's not",
        "Customizable report templates for different stakeholders",
        "Export to PDF, Slides, or share via link",
        "Compare performance across campaigns, ad groups, or time periods",
        "Natural language explanations of ROAS, CPA, and budget pacing",
        "White-label reports for agencies with custom branding",
      ],
    },

    // Product: Real-Time Dashboard
    productDashboard: {
      title: "Real-Time Insights Dashboard",
      intro:
        "Stay ahead of campaign issues with live monitoring and smart alerts. Know what's happening in your accounts without logging into Google Ads every hour.",
      features: [
        "Real-time performance metrics across all campaigns",
        "Smart alerts for budget pacing, ROAS drops, or conversion anomalies",
        "Visual trend charts to spot patterns at a glance",
        "Drill down into individual campaigns, ad groups, or keywords",
        "Mobile-friendly dashboard for on-the-go monitoring",
        "Custom KPI tracking for your specific goals",
      ],
    },

    // Who It's For
    whoItsFor: {
      title: "Built for every Google Ads professional",
      cards: [
        {
          title: "Agencies",
          description:
            "Manage more clients with the same team. AdPilote scales your operations without scaling headcount.",
          benefits: [
            "Multi-account management",
            "White-label reporting",
            "Client-ready insights",
          ],
        },
        {
          title: "Freelancers",
          description:
            "Compete with agencies on deliverables. Spend less time on busywork, more time on strategy and growth.",
          benefits: [
            "Automated reporting",
            "Fast search term cleanup",
            "Professional client reports",
          ],
        },
        {
          title: "In-House Teams",
          description:
            "Run leaner PPC teams without sacrificing performance. Let AdPilote handle the repetitive analysis.",
          benefits: [
            "Executive summaries",
            "Real-time alerts",
            "Faster decision-making",
          ],
        },
      ],
    },

    // Pricing
    pricing: {
      title: "Simple, transparent pricing",
      note: "Start free. Upgrade when you're ready. Cancel anytime.",
      plans: [
        {
          name: "Freemium",
          price: "0",
          currency: "€",
          period: "forever",
          features: [
            "1 Google Ads account",
            "100 search terms analyzed/month",
            "Basic AI insights",
            "Email support",
          ],
          cta: "Start Free",
          highlighted: false,
        },
        {
          name: "Pro",
          price: "49",
          currency: "€",
          period: "/month",
          features: [
            "3 Google Ads accounts",
            "Unlimited search terms",
            "Full AI reports & insights",
            "Real-time dashboard",
            "Priority support",
          ],
          cta: "Choose Plan",
          highlighted: true,
        },
        {
          name: "Agency",
          price: "149",
          currency: "€",
          period: "/month",
          features: [
            "Unlimited accounts",
            "White-label reports",
            "Multi-user access",
            "API access",
            "Dedicated support",
          ],
          cta: "Choose Plan",
          highlighted: false,
        },
      ],
      enterprise:
        "Enterprise: Need custom limits, SSO, or dedicated infrastructure? Contact us for a tailored plan.",
    },

    // FAQ
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How does AdPilote connect to my Google Ads account?",
          answer:
            "AdPilote uses official Google Ads API with OAuth2. You authorize read-only access (or read-write if you want one-click imports). We never store your login credentials, and you can revoke access anytime from your Google Account settings.",
        },
        {
          question: "Is my campaign data secure?",
          answer:
            "Yes. All data is encrypted in transit (TLS) and at rest. We're SOC 2 Type II compliant and follow GDPR standards. Your data is never shared with third parties or used to train public models.",
        },
        {
          question: "Can I cancel anytime?",
          answer:
            "Absolutely. Cancel with one click from your dashboard. No long-term contracts, no cancellation fees. If you cancel, you'll keep access until the end of your billing period.",
        },
        {
          question: "Do you offer a free trial of paid plans?",
          answer:
            "Yes! Start with our Freemium plan to test the core features. When you upgrade to Pro or Agency, you get a 14-day money-back guarantee — if you're not happy, we'll refund you, no questions asked.",
        },
      ],
    },

    // Footer
    footer: {
      tagline: "AdPilote — The AI Copilot for Google Ads.",
      year: "2025",
      email: "hello@adpilote.com",
      links: {
        privacy: "Privacy",
        terms: "Terms",
      },
    },
  },

  fr: {
    // Metadata
    meta: {
      title: "AdPilote – Le copilote IA pour Google Ads",
      description:
        "Le copilote IA pour Google Ads pour agences, freelances et équipes internes. Automatisez le nettoyage des requêtes, les insights et les rapports.",
    },

    // Header
    header: {
      logo: "AdPilote",
      nav: {
        product: "Produit",
        pricing: "Tarifs",
        faq: "FAQ",
        contact: "Contact",
      },
      cta: "Essai gratuit",
    },

    // Hero Section
    hero: {
      title: "Le copilote IA pour Google Ads — conçu pour les experts performance",
      subtitle:
        "Automatisez le nettoyage des requêtes, la génération de mots-clés négatifs, les insights et les rapports — 10× plus rapide avec l'IA.",
      primaryCta: "Essai gratuit",
      secondaryCta: "Voir la démo",
      dashboardCard: {
        title: "Intelligence des requêtes",
        stats: [
          { label: "ROAS", value: "+127%" },
          { label: "Budget gaspillé", value: "-4,2K€" },
          { label: "Auto-nettoyées", value: "1 847" },
        ],
      },
    },

    // Problem Section
    problem: {
      title: "Google Ads est trop complexe à gérer manuellement.",
      intro:
        "Les experts performance perdent des heures chaque semaine sur des tâches répétitives qui drainent les budgets et tuent le ROAS.",
      pains: [
        "Les rapports de requêtes grossissent plus vite que vous ne pouvez les analyser",
        "La gestion manuelle des mots-clés négatifs laisse passer des clics coûteux et non pertinents",
        "Les rapports exécutifs prennent des heures à créer et sont obsolètes au moment du partage",
        "Les insights campagnes sont ensevelis dans des tableurs au lieu d'être actionnables",
        "Les agences peinent à scaler la gestion client sans recruter plus d'analystes",
      ],
      closer:
        "Vous savez qu'il existe un meilleur moyen — mais développer des outils internes ou recruter n'est pas la solution.",
    },

    // Promise Section
    promise: {
      title: "Voici AdPilote — votre copilote IA pour Google Ads.",
      intro:
        "AdPilote transforme votre gestion Google Ads — de l'urgence réactive à l'optimisation proactive. Notre IA lit vos campagnes comme un analyste senior et automatise le travail que vous détestez.",
      benefits: [
        "Nettoyez automatiquement les requêtes et générez des mots-clés négatifs en quelques secondes",
        "Obtenez des insights IA et des résumés exécutifs à la demande",
        "Surveillez les performances en temps réel avec des alertes intelligentes",
        "Scalez la gestion client sans scaler l'équipe",
        "Concentrez-vous sur la stratégie pendant qu'AdPilote gère le travail fastidieux",
      ],
      productParts: [
        {
          title: "Intelligence des requêtes",
          description: "Nettoyage IA des requêtes et découverte de mots-clés",
        },
        {
          title: "Rapports IA",
          description: "Résumés exécutifs et insights générés instantanément",
        },
        {
          title: "Tableau de bord temps réel",
          description: "Surveillance live des campagnes avec alertes intelligentes",
        },
      ],
    },

    // How It Works
    howItWorks: {
      title: "Comment fonctionne AdPilote",
      subtitle: "Des requêtes désordonnées aux insights clairs en quelques secondes.",
      steps: [
        {
          title: "1. Connectez votre compte",
          description:
            "Liez votre compte Google Ads de manière sécurisée via OAuth. Aucune donnée stockée, contrôle total.",
          icon: "download",
        },
        {
          title: "2. L'IA analyse tout",
          description:
            "Notre IA scanne les requêtes, groupe par intention, détecte le gaspillage et génère des insights automatiquement.",
          icon: "sparkles",
        },
        {
          title: "3. Exportez et optimisez",
          description:
            "Export en un clic vers Google Ads, ou utilisez les insights pour prendre de meilleures décisions plus rapidement.",
          icon: "chart",
        },
      ],
    },

    // Before/After
    beforeAfter: {
      title: "Voyez la différence",
      before: {
        title: "Avant AdPilote",
        items: [
          "meilleures chaussures running homme pas cher",
          "chaussures running solde livraison gratuite",
          "nike chaussures running femme taille 38 violet",
          "comment nettoyer chaussures running",
          "chaussures running vs marche différence",
        ],
      },
      after: {
        title: "Après AdPilote",
        badge: "91 termes auto-nettoyés",
        clusters: [
          { intent: "Intention d'achat", volume: "1 240", negatives: "12" },
          { intent: "Intention recherche", volume: "487", negatives: "34" },
          { intent: "Non pertinent", volume: "156", negatives: "156" },
        ],
      },
    },

    // AI Insights
    aiInsights: {
      title: "Insights générés par IA",
      subtitle: "Arrêtez de deviner. Commencez à optimiser avec confiance.",
      cards: [
        {
          type: "Insight",
          title: "Mots-clés forte intention sous-performent",
          description:
            "3 clusters avec forte intention d'achat ont un ROAS en dessous de l'objectif. Quality Score faible détecté.",
        },
        {
          type: "Explication",
          title: "Pourquoi c'est important",
          description:
            "Vous payez 2,3× plus par clic que vos concurrents pour les mêmes mots-clés. Inadéquation de l'annonce probable.",
        },
        {
          type: "Recommandation",
          title: "Action recommandée",
          description:
            "Réécrivez les annonces pour correspondre à l'intention. Ajoutez des mots-clés négatifs : 'pas cher', 'gratuit', 'solde'.",
        },
      ],
    },

    // Dashboard Preview
    dashboardPreview: {
      title: "Performance temps réel en un coup d'œil",
      metrics: [
        { label: "ROAS", value: "4,2×", change: "+12%" },
        { label: "Dépense vs Cible", value: "8,4K€ / 10K€", progress: 84 },
        { label: "Budget gaspillé", value: "-1,2K€", change: "-34%" },
        { label: "Clusters optimisés", value: "23/31", progress: 74 },
      ],
    },

    // Why Teams Love
    whyTeamsLove: {
      title: "Pourquoi les équipes adorent AdPilote",
      cards: [
        {
          title: "Gagnez des heures chaque semaine",
          description:
            "Automatisez le nettoyage des requêtes et la génération de rapports. Récupérez 10h+ par semaine.",
        },
        {
          title: "Réduisez le budget gaspillé",
          description:
            "L'IA détecte les clics non pertinents avant qu'ils ne drainent votre budget. Économies moyennes : 15-30%.",
        },
        {
          title: "Rapports clairs et actionnables",
          description:
            "Résumés exécutifs en langage clair. Fini la gymnastique de tableurs.",
        },
        {
          title: "Meilleures décisions, plus rapidement",
          description:
            "Les insights IA mettent en avant ce qui marche et ce qui ne marche pas. Optimisez en confiance.",
        },
      ],
    },

    // Product: Search Terms Intelligence
    productSearchTerms: {
      title: "Intelligence des requêtes",
      intro:
        "Arrêtez de perdre du temps à réviser manuellement les rapports de requêtes. L'IA d'AdPilote analyse chaque requête, détecte le gaspillage et suggère des mots-clés négatifs automatiquement.",
      features: [
        "Catégorisez automatiquement les requêtes par intention et pertinence",
        "Mots-clés négatifs suggérés par IA selon vos objectifs de campagne",
        "Détectez le budget gaspillé sur des clics non pertinents avant que ça scale",
        "Groupez les requêtes similaires pour une expansion intelligente",
        "Export en un clic vers Google Ads Editor ou import en masse",
        "Suivez les tendances de requêtes pour repérer les opportunités émergentes",
        "Vue multi-comptes pour agences gérant des dizaines de clients",
      ],
    },

    // Product: AI Reports
    productReports: {
      title: "Rapports IA",
      intro:
        "Obtenez des rapports prêts pour l'exécutif en quelques secondes, pas en heures. L'IA d'AdPilote lit vos campagnes et rédige des insights en langage clair — fini la gymnastique de tableurs.",
      features: [
        "Générez automatiquement des résumés hebdomadaires ou mensuels",
        "Insights rédigés par IA mettant en avant ce qui marche et ce qui ne marche pas",
        "Modèles de rapports personnalisables pour différents interlocuteurs",
        "Export PDF, Slides ou partage par lien",
        "Comparez les performances entre campagnes, groupes d'annonces ou périodes",
        "Explications en langage naturel du ROAS, CPA et rythme budgétaire",
        "Rapports white-label pour agences avec branding personnalisé",
      ],
    },

    // Product: Real-Time Dashboard
    productDashboard: {
      title: "Tableau de bord temps réel",
      intro:
        "Anticipez les problèmes de campagne avec une surveillance live et des alertes intelligentes. Sachez ce qui se passe dans vos comptes sans vous connecter à Google Ads toutes les heures.",
      features: [
        "Métriques de performance en temps réel sur toutes les campagnes",
        "Alertes intelligentes pour rythme budgétaire, chute ROAS ou anomalies de conversion",
        "Graphiques de tendances visuels pour repérer les patterns d'un coup d'œil",
        "Plongez dans les campagnes, groupes d'annonces ou mots-clés individuels",
        "Tableau de bord mobile-friendly pour suivi en déplacement",
        "Suivi KPI personnalisé pour vos objectifs spécifiques",
      ],
    },

    // Who It's For
    whoItsFor: {
      title: "Conçu pour tous les professionnels Google Ads",
      cards: [
        {
          title: "Agences",
          description:
            "Gérez plus de clients avec la même équipe. AdPilote scale vos opérations sans scaler l'effectif.",
          benefits: [
            "Gestion multi-comptes",
            "Reporting white-label",
            "Insights prêts pour le client",
          ],
        },
        {
          title: "Freelances",
          description:
            "Rivalisez avec les agences sur les livrables. Moins de temps sur les tâches, plus sur la stratégie et la croissance.",
          benefits: [
            "Reporting automatisé",
            "Nettoyage rapide des requêtes",
            "Rapports clients professionnels",
          ],
        },
        {
          title: "Équipes internes",
          description:
            "Gérez des équipes PPC plus légères sans sacrifier la performance. Laissez AdPilote gérer l'analyse répétitive.",
          benefits: [
            "Résumés exécutifs",
            "Alertes temps réel",
            "Prise de décision plus rapide",
          ],
        },
      ],
    },

    // Pricing
    pricing: {
      title: "Tarifs simples et transparents",
      note: "Commencez gratuitement. Passez à l'offre supérieure quand vous êtes prêt. Annulez à tout moment.",
      plans: [
        {
          name: "Freemium",
          price: "0",
          currency: "€",
          period: "pour toujours",
          features: [
            "1 compte Google Ads",
            "100 requêtes analysées/mois",
            "Insights IA basiques",
            "Support email",
          ],
          cta: "Commencer gratuitement",
          highlighted: false,
        },
        {
          name: "Pro",
          price: "49",
          currency: "€",
          period: "/mois",
          features: [
            "3 comptes Google Ads",
            "Requêtes illimitées",
            "Rapports & insights IA complets",
            "Tableau de bord temps réel",
            "Support prioritaire",
          ],
          cta: "Choisir ce plan",
          highlighted: true,
        },
        {
          name: "Agence",
          price: "149",
          currency: "€",
          period: "/mois",
          features: [
            "Comptes illimités",
            "Rapports white-label",
            "Accès multi-utilisateurs",
            "Accès API",
            "Support dédié",
          ],
          cta: "Choisir ce plan",
          highlighted: false,
        },
      ],
      enterprise:
        "Entreprise : Besoin de limites personnalisées, SSO ou infrastructure dédiée ? Contactez-nous pour un plan sur mesure.",
    },

    // FAQ
    faq: {
      title: "Questions fréquentes",
      items: [
        {
          question: "Comment AdPilote se connecte-t-il à mon compte Google Ads ?",
          answer:
            "AdPilote utilise l'API Google Ads officielle avec OAuth2. Vous autorisez un accès lecture seule (ou lecture-écriture si vous voulez des imports en un clic). Nous ne stockons jamais vos identifiants de connexion, et vous pouvez révoquer l'accès à tout moment depuis les paramètres de votre compte Google.",
        },
        {
          question: "Mes données de campagne sont-elles sécurisées ?",
          answer:
            "Oui. Toutes les données sont chiffrées en transit (TLS) et au repos. Nous sommes conformes SOC 2 Type II et suivons les standards RGPD. Vos données ne sont jamais partagées avec des tiers ni utilisées pour entraîner des modèles publics.",
        },
        {
          question: "Puis-je annuler à tout moment ?",
          answer:
            "Absolument. Annulez en un clic depuis votre tableau de bord. Pas de contrat long terme, pas de frais d'annulation. Si vous annulez, vous conservez l'accès jusqu'à la fin de votre période de facturation.",
        },
        {
          question: "Proposez-vous un essai gratuit des plans payants ?",
          answer:
            "Oui ! Commencez avec notre plan Freemium pour tester les fonctionnalités de base. Quand vous passez à Pro ou Agence, vous bénéficiez d'une garantie satisfait ou remboursé de 14 jours — si vous n'êtes pas satisfait, nous vous remboursons, sans question.",
        },
      ],
    },

    // Footer
    footer: {
      tagline: "AdPilote — Le copilote IA pour Google Ads.",
      year: "2025",
      email: "hello@adpilote.com",
      links: {
        privacy: "Confidentialité",
        terms: "Conditions",
      },
    },
  },
} as const;
