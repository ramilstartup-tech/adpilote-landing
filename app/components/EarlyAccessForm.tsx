"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

type EarlyAccessFormProps = {
  language: "en" | "fr";
  title: string;
  subtitle: string;
  ctaLabel: string;
  emailLabel: string;
  emailPlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  roleLabel: string;
  rolePlaceholder: string;
  loadingText: string;
  errorText: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

const roleOptions = {
  en: [
    { value: "", label: "Select your role..." },
    { value: "Freelancer", label: "Freelancer" },
    { value: "Agency", label: "Agency" },
    { value: "In-house", label: "In-house team" },
    { value: "Other", label: "Other" },
  ],
  fr: [
    { value: "", label: "Sélectionnez votre rôle..." },
    { value: "Freelancer", label: "Freelance" },
    { value: "Agency", label: "Agence" },
    { value: "In-house", label: "Équipe interne" },
    { value: "Other", label: "Autre" },
  ],
};

export function EarlyAccessForm(props: EarlyAccessFormProps) {
  const {
    language,
    title,
    subtitle,
    ctaLabel,
    emailLabel,
    emailPlaceholder,
    companyLabel,
    companyPlaceholder,
    roleLabel,
    rolePlaceholder,
    loadingText,
    errorText,
  } = props;

  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    role: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          company: formData.company || undefined,
          role: formData.role || undefined,
          language,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit");
      }

      setStatus("success");
      // Redirect to thank-you page
      router.push(`/${language}/thank-you`);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  const isLoading = status === "loading";
  const hasError = status === "error";

  return (
    <div className="max-w-xl mx-auto rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-lg">
      <div className="space-y-5">
        {/* Header */}
        <div className="space-y-1.5 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            {title}
          </h2>
          <p className="text-sm text-slate-600">{subtitle}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Email Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700"
            >
              {emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder={emailPlaceholder}
              disabled={isLoading}
              className="w-full border border-slate-200 rounded-xl px-4 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-slate-50 disabled:cursor-not-allowed transition"
            />
          </div>

          {/* Company Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-slate-700"
            >
              {companyLabel}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              placeholder={companyPlaceholder}
              disabled={isLoading}
              className="w-full border border-slate-200 rounded-xl px-4 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-slate-50 disabled:cursor-not-allowed transition"
            />
          </div>

          {/* Role Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-slate-700"
            >
              {roleLabel}
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              disabled={isLoading}
              className="w-full border border-slate-200 rounded-xl px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-slate-50 disabled:cursor-not-allowed transition"
            >
              {roleOptions[language].map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Error Message */}
          {hasError && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
              <p className="text-sm text-red-700">{errorText}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-6 py-2.5 rounded-full transition shadow-sm disabled:bg-indigo-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>{loadingText}</span>
              </>
            ) : (
              ctaLabel
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
