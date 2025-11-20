import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merci | AdPilote - Copilote IA pour Google Ads",
  description: "Vous êtes sur la liste d'attente pour l'accès bêta à AdPilote.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-lg text-center space-y-6">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Vous êtes sur la liste d'attente !
          </h1>

          {/* Message */}
          <div className="space-y-4 text-slate-600">
            <p className="text-lg">
              Merci pour votre intérêt pour AdPilote. Nous vous préviendrons dès
              que l'accès bêta sera disponible.
            </p>
            <p>
              En attendant, n'hésitez pas à nous suivre sur LinkedIn pour rester
              informé de nos progrès.
            </p>
          </div>

          {/* LinkedIn Button */}
          <div className="pt-4">
            <a
              href="https://www.linkedin.com/company/adpilote/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white font-medium px-6 py-3 rounded-full transition shadow-sm"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Suivez-nous sur LinkedIn
            </a>
          </div>

          {/* Back to home link */}
          <div className="pt-4 border-t border-slate-200">
            <a
              href="/fr"
              className="text-indigo-500 hover:text-indigo-600 font-medium transition"
            >
              ← Retour à l'accueil
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
