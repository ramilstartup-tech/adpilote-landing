"use client";

import { landingContent, Lang } from "./landingContent";
import { useState } from "react";
import { EarlyAccessForm } from "./components/EarlyAccessForm";

type Props = {
  lang: Lang;
};

export function LandingPage({ lang }: Props) {
  const t = landingContent[lang];
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

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
              href="#features"
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
                    href="#features"
                    className="px-7 py-3.5 rounded-full border border-slate-300 hover:border-slate-400 text-slate-700 font-medium transition bg-white"
                  >
                    {t.hero.secondaryCta}
                  </a>
                </div>
              </div>

              {/* Dashboard Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-sm font-medium text-slate-500 mb-6">
                  {t.hero.visual.title}
                </h3>
                <div className="space-y-5">
                  {t.hero.visual.stats.map((stat, i) => (
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
            <ul className="space-y-4">
              {t.problem.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-4 text-lg text-slate-600">
                  <span className="text-indigo-500 mt-1 flex-shrink-0">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solution Section */}
        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-24 space-y-16">
            <div className="max-w-4xl space-y-6 text-center mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold">{t.solution.title}</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {t.solution.subtitle}
              </p>
            </div>

            {/* 3 cards visualization */}
            <div className="grid md:grid-cols-3 gap-6">
              {t.solution.bullets.map((bullet, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 shadow-sm hover:shadow-md transition"
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                    <span className="text-indigo-500 text-xl font-bold">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-slate-900">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-24 space-y-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              {t.features.title}
            </h2>

            {t.features.list.map((feature, index) => (
              <div
                key={feature.id}
                className={`grid md:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Feature Content */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold">{feature.title}</h3>
                    <p className="text-lg text-slate-600">{feature.subtitle}</p>
                  </div>

                  <ul className="space-y-3">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-slate-600">
                        <span className="text-indigo-500 mt-1 flex-shrink-0">
                          →
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {"exampleSummary" in feature && (
                    <div className="mt-6 p-6 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="text-sm italic text-slate-700">
                        {feature.exampleSummary}
                      </p>
                    </div>
                  )}
                </div>

                {/* Visual Hint / Pseudo-graphic */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                  {feature.id === "feature1" && (
                    <div className="space-y-6">
                      <div className="text-sm font-medium text-slate-500">
                        Before → After
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="h-8 bg-slate-200 rounded"
                            ></div>
                          ))}
                        </div>
                        <div className="space-y-2">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className="h-12 bg-indigo-100 rounded border border-indigo-200 flex items-center px-3"
                            >
                              <span className="text-xs text-indigo-700 font-medium">
                                Cluster {i + 1}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.id === "feature2" && (
                    <div className="space-y-6">
                      <div className="flex items-end justify-between h-32 gap-2 border-b border-l border-slate-200 pb-2 pl-2">
                        {[60, 65, 70, 55, 40, 30, 45].map((height, i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded-t ${
                              i === 4 || i === 5
                                ? "bg-red-200"
                                : "bg-green-200"
                            }`}
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <div className="px-3 py-2 bg-red-50 border border-red-200 rounded text-xs text-red-700">
                          ⚠ Alert: Conversions dropped 42%
                        </div>
                        <div className="px-3 py-2 bg-slate-100 rounded text-xs text-slate-600">
                          CPA: 2.1× above target
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.id === "feature3" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-2">
                        {["ROAS", "CPA", "Conv."].map((kpi, i) => (
                          <div
                            key={i}
                            className="p-3 bg-white border border-slate-200 rounded text-center"
                          >
                            <div className="text-xs text-slate-500">{kpi}</div>
                            <div className="text-lg font-bold text-indigo-500">
                              {i === 0 ? "4.2×" : i === 1 ? "€42" : "127"}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="h-2 bg-slate-200 rounded"></div>
                      <div className="space-y-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="space-y-1">
                            <div className="h-3 bg-slate-200 rounded w-full"></div>
                            <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="bg-slate-50">
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
                  className="rounded-2xl border border-slate-200 bg-white p-8 space-y-6 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                    <span className="text-indigo-500 text-xl font-bold">
                      {i + 1}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.text}</p>
                  </div>

                  {/* Pseudo-UI visualization */}
                  <div className="space-y-2 pt-4">
                    <div
                      className="h-2 bg-slate-200 rounded"
                      style={{ width: "100%" }}
                    ></div>
                    <div
                      className="h-2 bg-slate-200 rounded"
                      style={{ width: "80%" }}
                    ></div>
                    <div
                      className="h-2 bg-indigo-200 rounded"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Beta Section */}
        <section id="join-beta" className="bg-slate-50">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
            <EarlyAccessForm
              language={lang}
              title={t.betaSection.title}
              subtitle={t.betaSection.subtitle}
              ctaLabel={t.betaSection.ctaLabel}
              emailLabel={t.betaSection.emailLabel}
              emailPlaceholder={t.betaSection.emailPlaceholder}
              companyLabel={t.betaSection.companyLabel}
              companyPlaceholder={t.betaSection.companyPlaceholder}
              roleLabel={t.betaSection.roleLabel}
              rolePlaceholder={t.betaSection.rolePlaceholder}
              loadingText={t.betaSection.loadingText}
              errorText={t.betaSection.errorText}
            />
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-24 space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                {t.pricing.title}
              </h2>
              <p className="text-xl text-slate-600">{t.pricing.subtitle}</p>
            </div>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  billingPeriod === "monthly"
                    ? "bg-indigo-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {t.pricing.toggle.monthly}
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  billingPeriod === "yearly"
                    ? "bg-indigo-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {t.pricing.toggle.yearly}
              </button>
            </div>

            {/* Pricing Cards */}
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
                        {billingPeriod === "monthly"
                          ? plan.monthly
                          : plan.yearly}
                      </span>
                      <span className="text-slate-600">
                        {billingPeriod === "monthly" ? "/mo" : "/yr"}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{plan.credits}</p>
                    <p className="text-sm text-slate-600">{plan.accounts}</p>
                  </div>

                  <ul className="space-y-4">
                    {plan.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-slate-600">
                        <span className="text-indigo-500 mt-0.5">✓</span>
                        <span>{bullet}</span>
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

            {/* Extra Credits */}
            <div className="max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-slate-50 p-10 space-y-6">
              <h3 className="text-2xl font-bold">{t.pricing.extraCredits.title}</h3>
              <p className="text-slate-600">{t.pricing.extraCredits.text}</p>
              <div className="grid grid-cols-3 gap-4">
                {t.pricing.extraCredits.bullets.map((bullet, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white border border-slate-200 rounded-xl text-center"
                  >
                    <p className="text-sm font-medium text-slate-900">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
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
                  <h3 className="text-xl font-semibold">{item.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.a}</p>
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
