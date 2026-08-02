import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo placeholder - using a div with styling for now */}
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center transform rotate-45">
              <div className="w-4 h-4 bg-emerald-500 rounded-sm -rotate-45" />
            </div>
            <span className="font-bold text-xl tracking-tight">NEXUS<span className="text-blue-500">_</span>Lab</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-emerald-400 transition-colors">Architecture</a>
            <a href="#workflow" className="hover:text-emerald-400 transition-colors">Workflow</a>
            <a href="#specialists" className="hover:text-emerald-400 transition-colors">Specialists</a>
            <a 
              href="https://github.com/IngDavidMurcia/nexus-research-lab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-emerald-400 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            v1.1.0-alpha Release
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Scientific Governance for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              AI-Assisted Research
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            A zero-friction, multi-window prompt architecture that prevents LLM hallucination and enforces strict role separation. Built for rigorous academic workflows.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#setup"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold rounded-full transition-all hover:scale-105 active:scale-95"
            >
              Get Started (Zero Install)
            </a>
            <a 
              href="#docs"
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-full border border-slate-700 transition-all"
            >
              Read the Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Feature / Architecture Section */}
      <section id="features" className="py-24 px-6 bg-slate-900/50 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The End of the "Magic Chat"</h2>
              <p className="text-slate-400 mb-6 text-lg leading-relaxed">
                When you ask a single AI to "write a paper," it blends the roles of researcher, writer, and reviewer. This causes loss of context, hallucinations, and fabricated references.
              </p>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                NEXUS introduces a <strong>Multi-Window Protocol</strong>. You load specific "Specialist" prompts into completely isolated chat windows. They communicate through a strictly structured YAML Project Snapshot that you manually pass between them (or automate via n8n).
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center shrink-0 border border-blue-800">1</div>
                  <div>
                    <h4 className="font-bold text-slate-200">Total Isolation</h4>
                    <p className="text-sm text-slate-400">Agents never share context windows, preventing cross-contamination.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-900/50 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-800">2</div>
                  <div>
                    <h4 className="font-bold text-slate-200">YAML State Persistence</h4>
                    <p className="text-sm text-slate-400">The project data acts as a blockchain-like immutable state passed between nodes.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-2xl bg-slate-800 border border-slate-700 p-8 shadow-2xl flex items-center justify-center min-h-[400px]">
              {/* Architecture visual placeholder */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 rounded-2xl"></div>
              <div className="text-center relative z-10">
                <div className="text-slate-500 mb-4">[ Architecture Diagram Rendered Here ]</div>
                <p className="text-sm text-slate-400">The Director orchestrates 5 isolated Specialists via YAML state files.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© 2026 NEXUS Research Lab. Open Source (MIT License).</p>
      </footer>
    </div>
  );
}
