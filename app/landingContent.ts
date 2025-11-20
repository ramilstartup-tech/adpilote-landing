// Типизированный контент лендинга для EN и FR
// Вынесен в отдельный файл для удобства локализации и масштабирования

export type Lang = "en" | "fr";

export const landingContent = {
  en: {
    meta: {
      title: "AdPilote — AI Copilot for Google Ads",
      description:
        "AdPilote cleans and clusters search terms, monitors your Google Ads accounts daily, and generates simple executive reports — so you never miss issues or opportunities.",
    },

    header: {
      logo: "AdPilote",
      nav: {
        product: "Features",
        pricing: "Pricing",
        faq: "FAQ",
        contact: "Contact",
      },
      cta: "Start 14-day Trial",
    },

    hero: {
      title: "Your AI Copilot for Google Ads.",
      subtitle:
        "Clean and cluster search terms, catch issues early, and send clear reports — without spending hours in spreadsheets.",
      primaryCta: "Start 14-day Trial",
      secondaryCta: "Watch Demo",
      visual: {
        title: "Search Terms Intelligence",
        stats: [
          { label: "Cleaned queries", value: "1.47M" },
          { label: "Clusters", value: "132" },
          { label: "Wasted spend saved", value: "€4,920" },
        ],
      },
    },

    problem: {
      title: "Google Ads moves fast — and it's easy to miss important signals.",
      bullets: [
        "Search terms explode faster than you can review them.",
        "Small performance drops stay hidden until it's too late.",
        "Competitors change bids and steal traffic without warning.",
        "Reports take hours and still miss the bigger picture.",
      ],
      visualHint:
        "Infographic: chaos of search terms → missed insights → frustrated marketer.",
    },

    solution: {
      title: "AdPilote gives you clarity, speed, and control.",
      subtitle:
        "Three powerful features make Google Ads easier to manage — and harder to mess up.",
      bullets: [
        "Clean and cluster search terms with AI.",
        "Daily account monitoring with actionable summaries.",
        "Executive reports for managers and clients — generated automatically.",
      ],
      visualHint: "Three cards: Search Terms • Daily Check • Reports.",
    },

    features: {
      title: "Everything you need to stay ahead.",
      list: [
        {
          id: "feature1",
          title: "Search Term & Keyword Intelligence",
          subtitle:
            "Transform search term chaos into structured insights in minutes.",
          bullets: [
            "AI-powered cleaning for irrelevant and low-quality queries.",
            "Clusters by intent, theme, or funnel stage.",
            "Suggested negative keywords ready for approval.",
            "Highlight costly queries driving spend without results.",
            "Export cleaned lists back into Google Ads.",
          ],
          visualHint:
            "Before/After table: messy list → organized clusters with colored tags.",
        },
        {
          id: "feature2",
          title: "Daily Account Check & Smart Summary",
          subtitle:
            "Your accounts scanned every morning — so you never miss problems.",
          bullets: [
            "Detect sudden drops in conversions or CTR.",
            "Catch competitor bid changes early.",
            "Identify issues with landing pages or tracking.",
            "Spot anomalies in CPA, ROAS, spend pacing, and more.",
            "Receive one concise daily summary instead of dozens of reports.",
          ],
          exampleSummary:
            "\"Yesterday conversions on 'Invisalign Barcelona' dropped 42% after the landing page update. CPA is now 2.1× above target. Suggest: revert page, lower bids 15% until stable.\"",
          visualHint:
            "Mini-dashboard with alerts, red/green trend lines, and a short text summary.",
        },
        {
          id: "feature3",
          title: "Executive Reports for Clients & Managers",
          subtitle:
            "Clear, simple reports in natural language — generated in seconds.",
          bullets: [
            "Weekly or monthly reports summarizing key results.",
            "Plain-language insights anyone can understand.",
            "Include actions taken and next steps.",
            "Customize sections and KPIs per stakeholder.",
            "Export to PDF or Slides, or share via link.",
          ],
          visualHint:
            "Report preview: KPIs at top, timeline, comment blocks with bullets.",
        },
      ],
    },

    howItWorks: {
      title: "How AdPilote works",
      subtitle: "From data chaos to clarity — in three simple steps.",
      steps: [
        {
          title: "1. Connect your Google Ads",
          text: "Secure OAuth connection. Read-only by default. No passwords stored.",
          visualHint: "OAuth popup + simple flow diagram with a checkmark.",
        },
        {
          title: "2. AdPilote analyzes everything",
          text: "Search terms, keywords, anomalies, competitor moves, performance trends.",
          visualHint:
            "Search terms flowing into clusters, alert icons, and report icons.",
        },
        {
          title: "3. You act with confidence",
          text: "Review summaries, approve reports, export clean keywords. You stay in control.",
          visualHint: "UI mock: approve/reject buttons, export button.",
        },
      ],
    },

    pricing: {
      title: "Simple pricing for every team",
      subtitle: "14-day free trial. No credit card required.",
      toggle: {
        monthly: "Monthly",
        yearly: "Yearly (Save 35%)",
      },
      plans: [
        {
          name: "Freelancer",
          monthly: "€39",
          yearly: "€299",
          credits: "100 Credits / month (1M queries)",
          accounts: "1 Google Ads account",
          bullets: [
            "Daily check: up to 2,000 keywords.",
            "AI summaries.",
            "3 executive reports per month.",
          ],
          cta: "Start Trial",
          highlighted: false,
        },
        {
          name: "Team",
          monthly: "€199",
          yearly: "€1599",
          credits: "2,000 Credits / month (20M queries)",
          accounts: "Up to 10 accounts",
          bullets: [
            "Daily check: up to 10,000 keywords.",
            "Advanced, customizable reports.",
            "3 users included.",
          ],
          cta: "Start Trial",
          highlighted: true,
        },
        {
          name: "Agency",
          monthly: "€429",
          yearly: "€3499",
          credits: "10,000 Credits / month (100M queries)",
          accounts: "Unlimited accounts",
          bullets: [
            "Daily check: up to 50,000 keywords.",
            "White-label reports with your branding.",
            "API access and 10 users included.",
          ],
          cta: "Start Trial",
          highlighted: false,
        },
      ],
      extraCredits: {
        title: "Need more Credits?",
        text: "Buy extra Credits anytime as your accounts grow.",
        bullets: [
          "100 Credits → €9",
          "1,000 Credits → €29",
          "5,000 Credits → €59",
        ],
        visualHint: "Simple bar chart / tokens showing different credit packs.",
      },
    },

    faq: {
      title: "FAQ",
      items: [
        {
          q: "How does AdPilote connect to Google Ads?",
          a: "We use the official Google Ads API with secure OAuth. You stay in control and can revoke access anytime.",
        },
        {
          q: "What does the daily check look at?",
          a: "Conversions, CPA, ROAS, budget pacing, landing page changes, competitor bids, and anomalies in key metrics.",
        },
        {
          q: "Can I customize reports for my clients or managers?",
          a: "Yes. You can edit text, add or remove sections, and choose which KPIs to highlight for each stakeholder.",
        },
        {
          q: "Is my data secure?",
          a: "All data is encrypted in transit and at rest. We never sell your data or use it to train public models.",
        },
        {
          q: "Can I cancel anytime?",
          a: "Yes. You can cancel with one click from your account. Your access continues until the end of your billing period.",
        },
        {
          q: "Do all plans include the 14-day trial?",
          a: "Yes. Every plan starts with a 14-day free trial — no credit card required.",
        },
      ],
    },

    betaSection: {
      title: "Join the AdPilote beta",
      subtitle: "Leave your email to get early access to our AI Google Ads copilot.",
      ctaLabel: "Request early access",
      emailLabel: "Work email",
      emailPlaceholder: "your.email@company.com",
      companyLabel: "Company / website (optional)",
      companyPlaceholder: "acme.com",
      roleLabel: "Your role (optional)",
      rolePlaceholder: "e.g., Freelancer, Agency...",
      loadingText: "Sending...",
      errorText: "Something went wrong. Please try again.",
    },

    footer: {
      tagline: "AdPilote — Your AI Copilot for Google Ads.",
      email: "hello@adpilote.com",
      year: "2025",
      links: {
        privacy: "Privacy",
        terms: "Terms",
      },
    },
  },

  fr: {
    meta: {
      title: "AdPilote — Le copilote IA pour Google Ads",
      description:
        "AdPilote nettoie et regroupe vos requêtes, surveille vos comptes Google Ads chaque jour et génère des rapports clairs pour les décideurs.",
    },

    header: {
      logo: "AdPilote",
      nav: {
        product: "Fonctionnalités",
        pricing: "Tarifs",
        faq: "FAQ",
        contact: "Contact",
      },
      cta: "Essai 14 jours",
    },

    hero: {
      title: "Votre copilote IA pour Google Ads.",
      subtitle:
        "Nettoyez et regroupez les requêtes, détectez les problèmes tôt et envoyez des rapports clairs — sans passer vos soirées dans les tableurs.",
      primaryCta: "Essai gratuit 14 jours",
      secondaryCta: "Voir la démo",
      visual: {
        title: "Intelligence des requêtes",
        stats: [
          { label: "Requêtes nettoyées", value: "1,47M" },
          { label: "Clusters", value: "132" },
          { label: "Budget économisé", value: "4 920€" },
        ],
      },
    },

    problem: {
      title: "Google Ads bouge vite — et il est facile de rater les signaux clés.",
      bullets: [
        "Les rapports de requêtes grossissent plus vite que vous ne pouvez les analyser.",
        "Les petites baisses de performance restent invisibles jusqu'à ce qu'il soit trop tard.",
        "Les concurrents changent leurs enchères et prennent du trafic sans alerte.",
        "Les rapports prennent des heures et ne racontent pas toute l'histoire.",
      ],
      visualHint:
        "Infographie : nuage de requêtes → signaux manqués → spécialiste débordé.",
    },

    solution: {
      title: "AdPilote vous donne clarté, vitesse et contrôle.",
      subtitle:
        "Trois fonctionnalités clés rendent Google Ads plus simple à gérer — et plus difficile à casser.",
      bullets: [
        "Nettoyage et clustering des requêtes par IA.",
        "Contrôle quotidien du compte avec résumés actionnables.",
        "Rapports exécutifs pour managers et clients — générés automatiquement.",
      ],
      visualHint:
        "3 cartes : Requêtes • Check quotidien • Rapports exécutifs.",
    },

    features: {
      title: "Tout ce qu'il faut pour garder une longueur d'avance.",
      list: [
        {
          id: "feature1",
          title: "Intelligence des requêtes et mots-clés",
          subtitle:
            "Transformez le chaos des requêtes en insights structurés en quelques minutes.",
          bullets: [
            "Nettoyage IA des requêtes non pertinentes ou de faible qualité.",
            "Clusters par intention, thème ou étape du funnel.",
            "Suggestions de mots-clés négatifs prêtes à être validées.",
            "Mise en avant des requêtes coûteuses sans résultats.",
            "Export des listes nettoyées vers Google Ads.",
          ],
          visualHint:
            "Tableau Avant/Après : liste chaotique → clusters clairs avec tags colorés.",
        },
        {
          id: "feature2",
          title: "Check quotidien du compte & résumé IA",
          subtitle:
            "Vos comptes scannés chaque matin — pour ne plus rater les problèmes.",
          bullets: [
            "Détection des chutes soudaines de conversions ou CTR.",
            "Repérage des changements d'enchères des concurrents.",
            "Identification des soucis de landing page ou de tracking.",
            "Détection d'anomalies sur CPA, ROAS, rythme budget, etc.",
            "Un résumé concis par jour au lieu de dizaines de rapports.",
          ],
          exampleSummary:
            "« Hier, les conversions sur \"Invisalign Barcelone\" ont chuté de 42 % après la mise en ligne de la nouvelle landing. Le CPA est 2,1× au-dessus de l'objectif. Suggestion : tester l'ancienne page et baisser les enchères de 15 % jusqu'à stabilisation. »",
          visualHint:
            "Mini-dashboard avec alertes, courbes rouge/vert et bloc de texte court.",
        },
        {
          id: "feature3",
          title: "Rapports exécutifs pour clients et direction",
          subtitle:
            "Des rapports clairs, en langage naturel — générés en quelques secondes.",
          bullets: [
            "Rapports hebdomadaires ou mensuels résumant les résultats clés.",
            "Insights rédigés en langage clair, compréhensibles par tous.",
            "Inclut ce qui s'est passé, ce que vous avez fait et les prochaines actions.",
            "Sections et KPI ajustables selon l'interlocuteur.",
            "Export PDF ou Slides, ou partage par lien.",
          ],
          visualHint:
            "Aperçu de rapport : KPI en haut, frise temporelle, blocs de commentaires.",
        },
      ],
    },

    howItWorks: {
      title: "Comment fonctionne AdPilote",
      subtitle:
        "Du chaos des données à la clarté — en trois étapes simples.",
      steps: [
        {
          title: "1. Connectez votre compte Google Ads",
          text: "Connexion sécurisée via OAuth. Accès lecture seule par défaut. Aucun mot de passe stocké.",
          visualHint:
            "Illustration popup OAuth + schéma de flux avec validation.",
        },
        {
          title: "2. AdPilote analyse tout",
          text: "Requêtes, mots-clés, anomalies, mouvements concurrents, tendances de performance.",
          visualHint:
            "Requêtes qui se transforment en clusters, icônes d'alertes et d'icônes de rapport.",
        },
        {
          title: "3. Vous agissez en confiance",
          text: "Vous relisez les résumés, validez les rapports, exportez les mots-clés nettoyés. Vous gardez le contrôle.",
          visualHint:
            "Maquette d'interface avec boutons valider/rejeter et bouton d'export.",
        },
      ],
    },

    pricing: {
      title: "Des tarifs simples pour chaque équipe",
      subtitle: "Essai gratuit 14 jours. Aucune carte bancaire requise.",
      toggle: {
        monthly: "Mensuel",
        yearly: "Annuel (–35 %)",
      },
      plans: [
        {
          name: "Freelance",
          monthly: "39€",
          yearly: "299€",
          credits: "100 Crédits / mois (1M requêtes)",
          accounts: "1 compte Google Ads",
          bullets: [
            "Check quotidien : jusqu'à 2 000 mots-clés.",
            "Résumés IA quotidiens.",
            "3 rapports exécutifs par mois.",
          ],
          cta: "Commencer l'essai",
          highlighted: false,
        },
        {
          name: "Équipe",
          monthly: "199€",
          yearly: "1 599€",
          credits: "2 000 Crédits / mois (20M requêtes)",
          accounts: "Jusqu'à 10 comptes",
          bullets: [
            "Check quotidien : jusqu'à 10 000 mots-clés.",
            "Rapports avancés et personnalisables.",
            "3 utilisateurs inclus.",
          ],
          cta: "Commencer l'essai",
          highlighted: true,
        },
        {
          name: "Agence",
          monthly: "429€",
          yearly: "3 499€",
          credits: "10 000 Crédits / mois (100M requêtes)",
          accounts: "Comptes illimités",
          bullets: [
            "Check quotidien : jusqu'à 50 000 mots-clés.",
            "Rapports white-label avec votre branding.",
            "Accès API et 10 utilisateurs inclus.",
          ],
          cta: "Commencer l'essai",
          highlighted: false,
        },
      ],
      extraCredits: {
        title: "Besoin de plus de Crédits ?",
        text: "Achetez des Crédits additionnels à tout moment selon vos besoins.",
        bullets: [
          "100 Crédits → 9€",
          "1 000 Crédits → 29€",
          "5 000 Crédits → 59€",
        ],
        visualHint: "Diagramme simple montrant différents packs de crédits.",
      },
    },

    faq: {
      title: "Questions fréquentes",
      items: [
        {
          q: "Comment AdPilote se connecte à Google Ads ?",
          a: "Nous utilisons l'API officielle Google Ads avec OAuth sécurisé. Vous gardez le contrôle et pouvez révoquer l'accès à tout moment.",
        },
        {
          q: "Que vérifie le check quotidien ?",
          a: "Conversions, CPA, ROAS, rythme budgétaire, changements de landing page, enchères des concurrents et anomalies sur les métriques clés.",
        },
        {
          q: "Puis-je personnaliser les rapports pour mes clients ou ma direction ?",
          a: "Oui. Vous pouvez éditer le texte, ajouter ou retirer des sections et choisir les KPI à mettre en avant selon l'interlocuteur.",
        },
        {
          q: "Mes données sont-elles sécurisées ?",
          a: "Toutes les données sont chiffrées en transit et au repos. Nous ne vendons jamais vos données et ne les utilisons pas pour entraîner des modèles publics.",
        },
        {
          q: "Puis-je annuler à tout moment ?",
          a: "Oui. Vous pouvez annuler en un clic depuis votre compte. Vous gardez l'accès jusqu'à la fin de votre période de facturation.",
        },
        {
          q: "L'essai 14 jours est-il inclus dans tous les plans ?",
          a: "Oui, chaque offre commence par un essai gratuit de 14 jours — sans carte bancaire.",
        },
      ],
    },

    betaSection: {
      title: "Rejoindre la bêta AdPilote",
      subtitle: "Laissez votre email pour obtenir un accès anticipé à notre copilote IA pour Google Ads.",
      ctaLabel: "Demander l'accès anticipé",
      emailLabel: "Email professionnel",
      emailPlaceholder: "votre.email@entreprise.fr",
      companyLabel: "Entreprise / site web (optionnel)",
      companyPlaceholder: "acme.fr",
      roleLabel: "Votre rôle (optionnel)",
      rolePlaceholder: "ex: Freelance, Agence...",
      loadingText: "Envoi en cours...",
      errorText: "Une erreur s'est produite. Veuillez réessayer.",
    },

    footer: {
      tagline: "AdPilote — Le copilote IA pour Google Ads.",
      email: "hello@adpilote.com",
      year: "2025",
      links: {
        privacy: "Confidentialité",
        terms: "Conditions",
      },
    },
  },
} as const;
