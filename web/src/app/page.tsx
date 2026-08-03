"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const PlexusBackground = dynamic(() => import("./PlexusBackground"), { ssr: false });

// --- Translations Dictionary ---
const CITE_LINK = "https://openreview.net/forum?id=L5fZHoaUCF";

const t = {
  es: {
    title: "Gobernanza Científica para",
    subtitle: "Investigación Asistida por IA",
    desc: "Un framework de fricción cero con arquitectura multi-ventana que previene las alucinaciones de los LLM e impone una estricta separación de roles. Diseñado para flujos académicos rigurosos.",
    getStarted: "Descargar Framework (Zero Install)",
    readDocs: "Leer la Documentación",
    navArch: "Arquitectura",
    navWork: "Flujo de Trabajo",
    navSpec: "Especialistas",
    navDocs: "Quick Start",
    disclaimer: "Nota: Estos enlaces dirigen al código fuente arquitectónico en GitHub para fines de estudio de la lógica interna de los Prompts Maestros. No son interfaces de ejecución web.",
    endMagicChat: "El Fin del 'Chat Mágico'",
    problemDesc1: "Cuando le pides a una sola IA que 'escriba un artículo', ésta mezcla los roles de investigador, redactor y revisor. Esto causa pérdida de contexto, alucinaciones y referencias inventadas. Incluso si especificas estos roles en la misma ventana de chat (un prompt tipo 'El experto universal'), este fenómeno se conoce técnicamente como sobrecarga de roles o falacia de sobrecarga de prompts (prompt overloading), donde la IA pierde precisión al diluir su atención. No es efectivo porque dispersa los vectores de atención del modelo en demasiados patrones opuestos",
    problemDesc2: "NEXUS introduce el Protocolo Multi-Ventana. Cargas prompts 'Especialistas' en ventanas de chat completamente aisladas. Se comunican mediante un estado inmutable (YAML Project Snapshot) que transfieres manualmente o automatizas.",
    isoTitle: "Aislamiento Total",
    isoDesc: "Los agentes nunca comparten ventanas de contexto, previniendo la contaminación cruzada.",
    yamlTitle: "Persistencia YAML",
    yamlDesc: "Los datos del proyecto actúan como un estado inmutable tipo blockchain entre nodos.",
    workflowTitle: "Flujo de Trabajo (Workflow)",
    workflowDesc: "NEXUS no requiere código para funcionar. Se ejecuta directamente en tu interfaz de chat LLM favorita (ChatGPT, Claude, Gemini) pasando un archivo YAML de estado.",
    specialistsTitle: "El Ecosistema de Especialistas",
    specialistsDesc: "El paquete compilado incluye roles altamente rigurosos que interactúan con el orquestador principal.",
    btnCode: "Repositorio GitHub",
    footer: "© 2026 NEXUS Research Lab. Open Source (MIT License).",
    qsTitle: "Inicio Rápido",
    qsDesc: "Configura tu entorno y comienza a investigar en 3 simples pasos.",
    qsStep1Title: "1. Preparar Entorno",
    qsStep1Desc: "Descarga NEXUS Lab (botón superior o desde GitHub) y ubica la carpeta COMPILED.",
    qsStep2Title: "2. Inicializar Director",
    qsStep2Desc: "Copia DIRECTOR_Runtime.md y SHARED_Runtime.md en una ventana nueva de tu chat IA de preferencia.",
    qsStep3Title: "3. Llamar Especialistas",
    qsStep3Desc: "Cuando el Director te lo indique, carga el archivo del especialista solicitado (siempre una ventana única por cada especialista requerido) junto al entregable que te da el Director (archivo YAML).",
    qsReadFull: "Leer la Guía Completa",
    modules: {
      core: "CORE Rules",
      dir: "Director",
      arch: "Research Architect",
      writ: "Scientific Writer",
      rev: "Scientific Reviewer",
      pub: "Publication Specialist",
      aud: "Integrity Auditor"
    }
  },
  en: {
    title: "Scientific Governance for",
    subtitle: "AI-Assisted Research",
    desc: "A zero-friction, multi-window prompt architecture that prevents LLM hallucination and enforces strict role separation. Built for rigorous academic workflows.",
    getStarted: "Download Framework (Zero Install)",
    readDocs: "Read the Documentation",
    navArch: "Architecture",
    navWork: "Workflow",
    navSpec: "Specialists",
    navDocs: "Quick Start",
    disclaimer: "Note: These links direct to the architectural source code on GitHub for studying the internal logic of the Master Prompts. They are not web execution interfaces.",
    endMagicChat: "The End of the 'Magic Chat'",
    problemDesc1: "When you ask a single AI to 'write a paper', it blends the roles of researcher, writer, and reviewer. This causes loss of context, hallucinations, and fabricated references. Even if you specify these roles in the same chat window (a 'universal expert' prompt), this phenomenon is technically known as role overload or the prompt overloading fallacy, where the AI loses precision by diluting its attention. It is ineffective because it scatters the model's attention vectors across too many opposing patterns",
    problemDesc2: "NEXUS introduces a Multi-Window Protocol. You load specific 'Specialist' prompts into completely isolated chat windows. They communicate through an immutable YAML Project Snapshot that you manually pass between them (or automate).",
    isoTitle: "Total Isolation",
    isoDesc: "Agents never share context windows, preventing cross-contamination.",
    yamlTitle: "YAML State Persistence",
    yamlDesc: "The project data acts as an immutable blockchain-like state passed between nodes.",
    workflowTitle: "How it Works (Workflow)",
    workflowDesc: "NEXUS requires no code to run. It executes directly in your favorite LLM chat interface (ChatGPT, Claude, Gemini) by passing a state YAML file.",
    specialistsTitle: "The Ecosystem of Specialists",
    specialistsDesc: "The compiled package includes highly rigorous roles that interact with the main orchestrator.",
    btnCode: "GitHub Repository",
    footer: "© 2026 NEXUS Research Lab. Open Source (MIT License).",
    qsTitle: "Quick Start",
    qsDesc: "Set up your environment and start researching in 3 simple steps.",
    qsStep1Title: "1. Setup Environment",
    qsStep1Desc: "Download NEXUS Lab (top button or from GitHub) and locate the COMPILED folder.",
    qsStep2Title: "2. Initialize Director",
    qsStep2Desc: "Copy DIRECTOR_Runtime.md and SHARED_Runtime.md into a new window of your preferred AI chat.",
    qsStep3Title: "3. Call Specialists",
    qsStep3Desc: "When the Director instructs you, load the requested specialist file (always one unique window per specialist) along with the deliverable the Director gives you (YAML file).",
    qsReadFull: "Read the Full Guide",
    modules: {
      core: "CORE Rules",
      dir: "Director",
      arch: "Research Architect",
      writ: "Scientific Writer",
      rev: "Scientific Reviewer",
      pub: "Publication Specialist",
      aud: "Integrity Auditor"
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Effect to toggle dark mode on the HTML element
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  const dic = t[lang];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img src="/Assets/logo.svg" alt="NEXUS Logo" className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-xl tracking-tight">NEXUS<span className="text-blue-600 dark:text-blue-500">_</span>Lab</span>
          </a>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">{dic.navArch}</a>
            <a href="#workflow" className="text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">{dic.navWork}</a>
            <a href="#specialists" className="text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">{dic.navSpec}</a>
            <a href="#quick-start" className="text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors font-bold">{dic.navDocs}</a>

            {/* Controls */}
            <div className="flex items-center gap-3 border-l border-slate-300 dark:border-slate-700 pl-6 h-10">
              <button
                type="button"
                onClick={() => {
                  console.log("Language button clicked! Current:", lang);
                  setLang(lang === "es" ? "en" : "es");
                }}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-bold text-xs"
              >
                {lang === "es" ? "EN" : "ES"}
              </button>
              <button
                type="button"
                onClick={() => {
                  console.log("Theme button clicked! Current:", theme);
                  setTheme(theme === "dark" ? "light" : "dark");
                }}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-lg"
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
            </div>

            <a
              href="https://github.com/IngDavidMurcia/nexus-research-lab"
              target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] ml-4"
            >
              {dic.btnCode}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
        <PlexusBackground theme={theme} />
        {/* Abstract Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] -z-10" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-sm text-emerald-600 dark:text-emerald-400 mb-8 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            v1.1.0-alpha Release
          </div>

          <img src="/Assets/Banner/github_banner.svg" alt="NEXUS Banner" className="w-full max-w-2xl mx-auto mb-10 shadow-2xl rounded-2xl border border-slate-200 dark:border-slate-800" />

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
            {dic.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">
              {dic.subtitle}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            {dic.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/downloads/NEXUS_Runtime_v1.0.1.zip"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              {dic.getStarted}
            </a>
            <a
              href="https://github.com/IngDavidMurcia/nexus-research-lab#readme"
              target="_blank" rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium rounded-full border border-slate-300 dark:border-slate-700 transition-all shadow-md"
            >
              {dic.readDocs}
            </a>
            <a
              href="#quick-start"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold rounded-full transition-all hover:bg-emerald-50 dark:hover:bg-emerald-900/30 shadow-md"
            >
              {dic.navDocs}
            </a>
          </div>
        </div>
      </section>

      {/* Feature / Architecture Section */}
      <section id="features" className="py-24 px-6 bg-slate-100 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">{dic.endMagicChat}</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed text-justify">
                {dic.problemDesc1}{" "}
                <a href={CITE_LINK} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline whitespace-nowrap">[1]</a>.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed text-justify">
                {dic.problemDesc2}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-800 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-slate-200">{dic.isoTitle}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{dic.isoDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-slate-200">{dic.yamlTitle}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{dic.yamlDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2 shadow-2xl flex items-center justify-center transition-colors duration-300">
              <img key={`arch-${lang}`} src={`/Assets/Diagrams/architecture_diagram_${lang}.svg?v=2`} alt="Architecture" className="w-full h-auto rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">{dic.workflowTitle}</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-16 text-lg max-w-3xl mx-auto leading-relaxed">
            {dic.workflowDesc}
          </p>

          <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl transition-colors duration-300">
            <img key={`flow-${lang}`} src={`/Assets/Diagrams/workflow_diagram_${lang}.svg?v=2`} alt="Workflow" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section id="specialists" className="py-24 px-6 bg-slate-100 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">{dic.specialistsTitle}</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg max-w-2xl mx-auto">
            {dic.specialistsDesc}
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-16 max-w-3xl mx-auto text-sm text-blue-700 dark:text-blue-300 text-left flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <p>{dic.disclaimer}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 relative z-10">
            {/* Core */}
            <a href="https://github.com/IngDavidMurcia/nexus-research-lab/tree/main/Source/01_CORE" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 w-32 group hover:-translate-y-2 transition-transform">
              <img src="/Assets/Modules/logo_core.svg" alt="Core" className="w-20 h-20 drop-shadow-md group-hover:drop-shadow-xl transition-all" />
              <span className="font-medium text-sm text-slate-700 dark:text-slate-300 group-hover:text-emerald-500 transition-colors">{dic.modules.core}</span>
            </a>
            {/* Director */}
            <a href="https://github.com/IngDavidMurcia/nexus-research-lab/tree/main/Source/02_DIRECTOR" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 w-32 group hover:-translate-y-2 transition-transform">
              <img src="/Assets/Modules/logo_director.svg" alt="Director" className="w-20 h-20 drop-shadow-md group-hover:drop-shadow-xl transition-all" />
              <span className="font-medium text-sm text-slate-700 dark:text-slate-300 group-hover:text-emerald-500 transition-colors">{dic.modules.dir}</span>
            </a>
            {/* Specialists */}
            <a href="https://github.com/IngDavidMurcia/nexus-research-lab/tree/main/Source/03_SPECIALISTS/Research_Architect.md" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 w-32 group hover:-translate-y-2 transition-transform">
              <img src="/Assets/Modules/logo_specialist.svg" alt="Specialist" className="w-20 h-20 drop-shadow-md group-hover:drop-shadow-xl transition-all" />
              <span className="font-medium text-sm text-slate-700 dark:text-slate-300 group-hover:text-emerald-500 transition-colors">{dic.modules.arch}</span>
            </a>
            <a href="https://github.com/IngDavidMurcia/nexus-research-lab/tree/main/Source/03_SPECIALISTS/Scientific_Writer.md" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 w-32 group hover:-translate-y-2 transition-transform">
              <img src="/Assets/Modules/logo_specialist.svg" alt="Specialist" className="w-20 h-20 drop-shadow-md group-hover:drop-shadow-xl transition-all" />
              <span className="font-medium text-sm text-slate-700 dark:text-slate-300 group-hover:text-emerald-500 transition-colors">{dic.modules.writ}</span>
            </a>
            <a href="https://github.com/IngDavidMurcia/nexus-research-lab/tree/main/Source/03_SPECIALISTS/Scientific_Reviewer.md" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 w-32 group hover:-translate-y-2 transition-transform">
              <img src="/Assets/Modules/logo_specialist.svg" alt="Specialist" className="w-20 h-20 drop-shadow-md group-hover:drop-shadow-xl transition-all" />
              <span className="font-medium text-sm text-slate-700 dark:text-slate-300 group-hover:text-emerald-500 transition-colors">{dic.modules.rev}</span>
            </a>
            <a href="https://github.com/IngDavidMurcia/nexus-research-lab/tree/main/Source/03_SPECIALISTS/Publication_Specialist.md" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 w-32 group hover:-translate-y-2 transition-transform">
              <img src="/Assets/Modules/logo_specialist.svg" alt="Specialist" className="w-20 h-20 drop-shadow-md group-hover:drop-shadow-xl transition-all" />
              <span className="font-medium text-sm text-slate-700 dark:text-slate-300 group-hover:text-emerald-500 transition-colors">{dic.modules.pub}</span>
            </a>
            <a href="https://github.com/IngDavidMurcia/nexus-research-lab/tree/main/Source/03_SPECIALISTS/Integrity_Auditor.md" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 w-32 group hover:-translate-y-2 transition-transform">
              <img src="/Assets/Modules/logo_specialist.svg" alt="Specialist" className="w-20 h-20 drop-shadow-md group-hover:drop-shadow-xl transition-all" />
              <span className="font-medium text-sm text-slate-700 dark:text-slate-300 group-hover:text-emerald-500 transition-colors">{dic.modules.aud}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quick-start" className="py-24 px-6 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{dic.qsTitle}</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-16 text-lg max-w-2xl mx-auto">
            {dic.qsDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl transition-all hover:-translate-y-2 group text-left">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center mb-6 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-3">{dic.qsStep1Title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{dic.qsStep1Desc}</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl transition-all hover:-translate-y-2 group text-left relative">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mb-6 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-3">{dic.qsStep2Title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{dic.qsStep2Desc}</p>

              {/* Arrow connector */}
              <div className="hidden md:block absolute top-1/2 -left-6 w-4 h-0.5 bg-slate-300 dark:bg-slate-700"></div>
            </div>

            {/* Step 3 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl transition-all hover:-translate-y-2 group text-left relative">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mb-6 border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-3">{dic.qsStep3Title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{dic.qsStep3Desc}</p>

              {/* Arrow connector */}
              <div className="hidden md:block absolute top-1/2 -left-6 w-4 h-0.5 bg-slate-300 dark:bg-slate-700"></div>
            </div>
          </div>

          <a
            href="https://github.com/IngDavidMurcia/nexus-research-lab/tree/main/DISTRIBUTION/INSTALL"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            {dic.qsReadFull}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-center text-slate-500 text-sm border-t border-slate-800">
        <p>{dic.footer}</p>
        <p className="mt-4 text-xs opacity-50 font-light">Diseñado y desarrollado por <a href="https://www.linkedin.com/in/ingdavidmurcia/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 hover:underline transition-colors">Ing David Murcia</a></p>
      </footer>
    </div>
  );
}
