"use client";

import { landingContent, Lang } from "./landingContent";

type Props = {
  lang: Lang;
};

export function LandingPage({ lang }: Props) {
  const t = landingContent[lang];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-indigo-400">
            {t.header.logo}
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#product"
              className="text-sm text-slate-300 hover:text-slate-50 transition"
            >
              {t.header.nav.product}
            </a>
            <a
              href="#pricing"
              className="text-sm text-slate-300 hover:text-slate-50 transition"
            >
              {t.header.nav.pricing}
            </a>
            <a
              href="#faq"
              className="text-sm text-slate-300 hover:text-slate-50 transition"
            >
              {t.header.nav.faq}
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-300 hover:text-slate-50 transition"
            >
              {t.header.nav.contact}
            </a>
          </nav>
          <a
            href="#pricing"
            className="px-5 py-2.5 rounded-full bg-indigo-500 hover:bg-indigo-400 text-sm font-medium transition"
          >
            {t.header.cta}
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {t.hero.title}
                </h1>
                <p className="text-lg text-slate-300">{t.hero.subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#pricing"
                    className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-400 text-sm font-medium transition"
                  >
                    {t.hero.primaryCta}
                  </a>
                  <a
                    href="#product"
                    className="px-6 py-3 rounded-full border border-slate-600 hover:border-slate-400 text-sm font-medium transition"
                  >
                    {t.hero.secondaryCta}
                  </a>
                </div>
              </div>

              {/* Dashboard Card */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
                <h3 className="text-sm font-medium text-slate-400">
                  {t.hero.dashboardCard.title}
                </h3>
                <div className="space-y-3">
                  {t.hero.dashboardCard.stats.map((stat, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">
                        {stat.label}
                      </span>
                      <span className="text-2xl font-bold text-indigo-400">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 py-20 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">{t.problem.title}</h2>
            <p className="text-lg text-slate-300">{t.problem.intro}</p>
            <ul className="space-y-3">
              {t.problem.pains.map((pain, i) => (
                <li key={i} className="flex gap-3 text-slate-300">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span>{pain}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-slate-300 italic">{t.problem.closer}</p>
          </div>
        </section>

        {/* Promise Section */}
        <section className="border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 py-20 space-y-10">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">{t.promise.title}</h2>
              <p className="text-lg text-slate-300">{t.promise.intro}</p>
              <ul className="space-y-3">
                {t.promise.benefits.map((benefit, i) => (
                  <li key={i} className="flex gap-3 text-slate-300">
                    <span className="text-indigo-400 mt-1">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Parts Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {t.promise.productParts.map((part, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3"
                >
                  <h3 className="text-lg font-semibold">{part.title}</h3>
                  <p className="text-sm text-slate-400">{part.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product: Search Terms Intelligence */}
        <section id="product" className="border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 py-20">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 md:p-10 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t.productSearchTerms.title}
              </h2>
              <p className="text-lg text-slate-300">
                {t.productSearchTerms.intro}
              </p>
              <ul className="space-y-3">
                {t.productSearchTerms.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-slate-300">
                    <span className="text-indigo-400 mt-1">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Product: AI Reports */}
        <section className="border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 py-20">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 md:p-10 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t.productReports.title}
              </h2>
              <p className="text-lg text-slate-300">{t.productReports.intro}</p>
              <ul className="space-y-3">
                {t.productReports.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-slate-300">
                    <span className="text-indigo-400 mt-1">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Product: Real-Time Dashboard */}
        <section className="border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 py-20">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 md:p-10 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t.productDashboard.title}
              </h2>
              <p className="text-lg text-slate-300">
                {t.productDashboard.intro}
              </p>
              <ul className="space-y-3">
                {t.productDashboard.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-slate-300">
                    <span className="text-indigo-400 mt-1">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 py-20 space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              {t.whoItsFor.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {t.whoItsFor.cards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 space-y-4"
                >
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="text-slate-300">{card.description}</p>
                  <ul className="space-y-2">
                    {card.benefits.map((benefit, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-400">
                        <span className="text-indigo-400">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 py-20 space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t.pricing.title}
              </h2>
              <p className="text-slate-300">{t.pricing.note}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.pricing.plans.map((plan, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border p-8 space-y-6 ${
                    plan.highlighted
                      ? "border-indigo-500 bg-slate-900/80 shadow-lg shadow-indigo-500/20"
                      : "border-slate-800 bg-slate-900/60"
                  }`}
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">
                        {plan.price}
                        {plan.currency}
                      </span>
                      <span className="text-slate-400">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-300">
                        <span className="text-indigo-400 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`block w-full text-center px-5 py-3 rounded-full text-sm font-medium transition ${
                      plan.highlighted
                        ? "bg-indigo-500 hover:bg-indigo-400"
                        : "border border-slate-600 hover:border-slate-400"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-slate-400 max-w-3xl mx-auto">
              {t.pricing.enterprise}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 py-20 space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              {t.faq.title}
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {t.faq.items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3"
                >
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <p className="text-slate-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
            <div className="text-center space-y-4">
              <p className="text-lg font-medium">{t.footer.tagline}</p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
                <a href={`mailto:${t.footer.email}`} className="hover:text-slate-50 transition">
                  {t.footer.email}
                </a>
                <span>•</span>
                <a href="#" className="hover:text-slate-50 transition">
                  {t.footer.links.privacy}
                </a>
                <span>•</span>
                <a href="#" className="hover:text-slate-50 transition">
                  {t.footer.links.terms}
                </a>
              </div>
              <p className="text-sm text-slate-500">
                © {t.footer.year} AdPilote. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
