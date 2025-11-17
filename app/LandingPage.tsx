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

        {/* How It Works */}
        <section id="how-it-works" className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-24 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                {t.howItWorks.title}
              </h2>
              <p className="text-xl text-slate-600">{t.howItWorks.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.howItWorks.steps.map((step, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-8 space-y-6 shadow-sm hover:shadow-md transition"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                    {step.icon === "download" && (
                      <svg
                        className="w-6 h-6 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                        />
                      </svg>
                    )}
                    {step.icon === "sparkles" && (
                      <svg
                        className="w-6 h-6 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    )}
                    {step.icon === "chart" && (
                      <svg
                        className="w-6 h-6 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Mini illustration with pseudo-UI */}
                  <div className="space-y-2 pt-4">
                    <div className="h-2 bg-slate-200 rounded" style={{ width: "100%" }}></div>
                    <div className="h-2 bg-slate-200 rounded" style={{ width: "80%" }}></div>
                    <div className="h-2 bg-indigo-200 rounded" style={{ width: "60%" }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section id="before-after" className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-24 space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              {t.beforeAfter.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* BEFORE */}
              <div className="rounded-2xl border border-slate-200 bg-slate-100 p-8 space-y-6">
                <h3 className="text-2xl font-bold text-slate-700">
                  {t.beforeAfter.before.title}
                </h3>
                <div className="space-y-3">
                  {t.beforeAfter.before.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 bg-slate-200/60 rounded text-sm text-slate-600 border border-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 italic">
                  Unstructured, time-consuming, error-prone
                </p>
              </div>

              {/* AFTER */}
              <div className="rounded-2xl border border-indigo-200 bg-white p-8 space-y-6 shadow-md">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {t.beforeAfter.after.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium">
                    {t.beforeAfter.after.badge}
                  </span>
                </div>

                {/* Table-like structure */}
                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-2 text-xs font-medium text-slate-500 pb-2 border-b border-slate-200">
                    <div>Intent</div>
                    <div>Volume</div>
                    <div>Negatives</div>
                  </div>
                  {t.beforeAfter.after.clusters.map((cluster, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded text-sm"
                    >
                      <div className="font-medium text-slate-900">
                        {cluster.intent}
                      </div>
                      <div className="text-slate-600">{cluster.volume}</div>
                      <div className="text-indigo-600 font-medium">
                        {cluster.negatives}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 italic">
                  Organized, automated, actionable
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Insights */}
        <section id="ai-insights" className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-24 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                {t.aiInsights.title}
              </h2>
              <p className="text-xl text-slate-600">{t.aiInsights.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {t.aiInsights.cards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 shadow-sm"
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium">
                    {card.type}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mini Dashboard Block */}
        <section id="dashboard" className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-24 space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              {t.dashboardPreview.title}
            </h2>

            <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
              <div className="grid md:grid-cols-2 gap-10">
                {/* Left: Pseudo line chart */}
                <div className="space-y-4">
                  <div className="flex items-end justify-between h-48 gap-2 border-b border-l border-slate-200 pb-2 pl-2">
                    {[65, 70, 75, 68, 80, 85, 90, 88, 95, 92, 98, 100].map(
                      (height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-indigo-200 rounded-t hover:bg-indigo-300 transition"
                          style={{ height: `${height}%` }}
                        ></div>
                      )
                    )}
                  </div>
                  <p className="text-sm text-slate-500 text-center">
                    Performance trend (last 12 weeks)
                  </p>
                </div>

                {/* Right: Metrics */}
                <div className="space-y-6">
                  {t.dashboardPreview.metrics.map((metric, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">
                          {metric.label}
                        </span>
                        {"change" in metric && (
                          <span
                            className={`text-xs font-medium ${
                              metric.change.startsWith("+")
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {metric.change}
                          </span>
                        )}
                      </div>
                      <div className="text-2xl font-bold text-slate-900">
                        {metric.value}
                      </div>
                      {"progress" in metric && (
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-indigo-500 rounded-full"
                            style={{ width: `${metric.progress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Teams Love */}
        <section id="why-teams-love" className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-24 space-y-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              {t.whyTeamsLove.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {t.whyTeamsLove.cards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-10 space-y-4 hover:shadow-md transition"
                >
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-500 text-xl font-bold">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="bg-slate-50">
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
