"use client";

import { landingContent, Lang } from "./landingContent";

type Props = {
  lang: Lang;
};

export function LandingPage({ lang }: Props) {
  const t = landingContent[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-xl font-bold text-slate-900">
            {t.header.logo}
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#product"
              className="text-sm text-slate-600 hover:text-slate-900 transition"
            >
              {t.header.nav.product}
            </a>
            <a
              href="#pricing"
              className="text-sm text-slate-600 hover:text-slate-900 transition"
            >
              {t.header.nav.pricing}
            </a>
            <a
              href="#faq"
              className="text-sm text-slate-600 hover:text-slate-900 transition"
            >
              {t.header.nav.faq}
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-600 hover:text-slate-900 transition"
            >
              {t.header.nav.contact}
            </a>
          </nav>
          <a
            href="#pricing"
            className="px-6 py-2.5 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition shadow-sm"
          >
            {t.header.cta}
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                  {t.hero.title}
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {t.hero.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#pricing"
                    className="px-7 py-3.5 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition shadow-sm"
                  >
                    {t.hero.primaryCta}
                  </a>
                  <a
                    href="#product"
                    className="px-7 py-3.5 rounded-full border border-slate-300 hover:border-slate-400 text-slate-700 font-medium transition bg-white"
                  >
                    {t.hero.secondaryCta}
                  </a>
                </div>
              </div>

              {/* Dashboard Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-sm font-medium text-slate-500 mb-6">
                  {t.hero.dashboardCard.title}
                </h3>
                <div className="space-y-5">
                  {t.hero.dashboardCard.stats.map((stat, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">
                        {stat.label}
                      </span>
                      <span className="text-3xl font-bold text-indigo-500">
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
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-6 py-24 space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold">{t.problem.title}</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              {t.problem.intro}
            </p>
            <ul className="space-y-4">
              {t.problem.pains.map((pain, i) => (
                <li key={i} className="flex gap-4 text-lg text-slate-600">
                  <span className="text-indigo-500 mt-1 flex-shrink-0">•</span>
                  <span>{pain}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl text-slate-600 italic leading-relaxed">
              {t.problem.closer}
            </p>
          </div>
        </section>

        {/* Promise Section */}
        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-24 space-y-16">
            <div className="max-w-4xl space-y-10">
              <h2 className="text-4xl md:text-5xl font-bold">{t.promise.title}</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {t.promise.intro}
              </p>
              <ul className="space-y-4">
                {t.promise.benefits.map((benefit, i) => (
                  <li key={i} className="flex gap-4 text-lg text-slate-600">
                    <span className="text-indigo-500 mt-1 flex-shrink-0">✓</span>
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
                  className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold">{part.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {part.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product: Search Terms Intelligence */}
        <section id="product" className="bg-white">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 md:p-14 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t.productSearchTerms.title}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {t.productSearchTerms.intro}
              </p>
              <ul className="space-y-4">
                {t.productSearchTerms.features.map((feature, i) => (
                  <li key={i} className="flex gap-4 text-lg text-slate-600">
                    <span className="text-indigo-500 mt-1 flex-shrink-0">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Product: AI Reports */}
        <section className="bg-slate-50">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 md:p-14 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t.productReports.title}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {t.productReports.intro}
              </p>
              <ul className="space-y-4">
                {t.productReports.features.map((feature, i) => (
                  <li key={i} className="flex gap-4 text-lg text-slate-600">
                    <span className="text-indigo-500 mt-1 flex-shrink-0">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Product: Real-Time Dashboard */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 md:p-14 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t.productDashboard.title}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {t.productDashboard.intro}
              </p>
              <ul className="space-y-4">
                {t.productDashboard.features.map((feature, i) => (
                  <li key={i} className="flex gap-4 text-lg text-slate-600">
                    <span className="text-indigo-500 mt-1 flex-shrink-0">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-24 space-y-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              {t.whoItsFor.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {t.whoItsFor.cards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-10 space-y-6 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                  <ul className="space-y-3">
                    {card.benefits.map((benefit, j) => (
                      <li key={j} className="flex gap-3 text-slate-600">
                        <span className="text-indigo-500">✓</span>
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
        <section id="pricing" className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-24 space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                {t.pricing.title}
              </h2>
              <p className="text-xl text-slate-600">{t.pricing.note}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.pricing.plans.map((plan, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border p-10 space-y-8 transition ${
                    plan.highlighted
                      ? "border-indigo-500 bg-indigo-50/50 shadow-lg shadow-indigo-100"
                      : "border-slate-200 bg-white shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold">
                        {plan.price}
                        {plan.currency}
                      </span>
                      <span className="text-slate-600">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex gap-3 text-slate-600">
                        <span className="text-indigo-500 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`block w-full text-center px-6 py-3.5 rounded-full font-medium transition ${
                      plan.highlighted
                        ? "bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm"
                        : "border border-slate-300 hover:border-slate-400 text-slate-700 bg-white"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t.pricing.enterprise}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-slate-50">
          <div className="max-w-4xl mx-auto px-6 py-24 space-y-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              {t.faq.title}
            </h2>
            <div className="space-y-6">
              {t.faq.items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 shadow-sm"
                >
                  <h3 className="text-xl font-semibold">{item.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
            <div className="text-center space-y-6">
              <p className="text-xl font-medium text-slate-900">
                {t.footer.tagline}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600">
                <a
                  href={`mailto:${t.footer.email}`}
                  className="hover:text-slate-900 transition"
                >
                  {t.footer.email}
                </a>
                <span className="text-slate-300">•</span>
                <a href="#" className="hover:text-slate-900 transition">
                  {t.footer.links.privacy}
                </a>
                <span className="text-slate-300">•</span>
                <a href="#" className="hover:text-slate-900 transition">
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
