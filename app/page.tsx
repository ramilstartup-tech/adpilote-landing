export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-8">
        
        <h1 className="text-5xl font-semibold tracking-tight">
          AdPilote
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          The AI copilot for digital marketers.  
          Clean. Fast. Insight-driven.  
          Built for agencies, freelancers, and in-house teams.
        </p>

        <p className="text-base text-gray-500">
          Automate keyword grouping, search term cleaning, insights,  
          trends — and make better decisions 10× faster.
        </p>

        <div className="pt-4">
          <a
            href="#"
            className="px-6 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
          >
            Join Early Access
          </a>
        </div>

        <div className="pt-8 border-t border-gray-200 text-xs text-gray-400">
          © {new Date().getFullYear()} AdPilote — Made for performance marketers.
        </div>

      </div>
    </main>
  );
}