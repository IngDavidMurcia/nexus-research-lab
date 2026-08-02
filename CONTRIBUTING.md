# NEXUS Research Lab
## Contributing Guidelines

Thank you for your interest in contributing to **NEXUS Research Lab**! 

Since NEXUS is an architecture (a set of protocols and executable prompts) rather than a traditional codebase, contributing looks a bit different. This guide is for developers, researchers, and prompt engineers who want to expand the framework.

---

## 1. How to Contribute

There are three main ways you can contribute to NEXUS:

### A. Creating Custom Specialists (Plugins)
The easiest and most impactful way to contribute is by creating a **Custom Specialist** for a specific scientific domain (e.g., `Bioinformatics_Analyst`, `Statistical_Modeler`).
- Read the [PLUGIN_STANDARD.md](DISTRIBUTION/COMPILED/PLUGIN_STANDARD.md).
- Create your specialist following the standard 4-section format (`Identity`, `Rules`, `Workflow`, `Output Protocol`).
- Submit a Pull Request adding your specialist to a new `DISTRIBUTION/PLUGINS` folder.

### B. Improving CORE Specialists
If you find a logic flaw or hallucination trigger in the existing 5 CORE Specialists:
- Do **not** edit the files in `DISTRIBUTION/COMPILED/` directly. 
- You must edit the original source files in `Source/03_SPECIALISTS/`.
- Once edited, you must run the build process (or simulate it) to update the compiled version.

### C. Enhancing Shared Knowledge (RAG)
If you want to add new citation standards, ethical guidelines, or methodology types:
- Edit the corresponding module in `Source/04_SHARED_KNOWLEDGE/`.
- Ensure it does not contradict existing absolute rules (like the ban on AI hallucinations).

---

## 2. Pull Request Process

1. **Fork** the repository and create your branch from `main`.
2. Ensure your changes align with the **NEXUS Philosophy**: AI is an assistant, the human is the researcher. The architecture must enforce strict isolation between roles (multi-window).
3. If you add a new Specialist, test it locally first (e.g., in ChatGPT or Gemini) to ensure it correctly parses and returns the **Project Snapshot YAML**.
4. Issue that PR with a clear description of the problem solved or feature added.

---

## 3. The YAML Persistence Standard

Any contribution that modifies the workflow MUST respect the YAML persistence model.
- Agents must never omit existing YAML data to "save space".
- The `workflow.current_state` can only be altered by the Director.
- Specialists can only change their specific keys inside the `specialists` block or data blocks.

## 4. Visual Design Contributions

If you are contributing diagrams or UI mockups, please adhere to our [Brand Book](Source/07_BRANDING/Brand_Book.md). Use flat vector graphics (SVG) with our official color palette (Deep Navy `#0F172A`, Blue `#2563EB`, Emerald `#10B981`).

Thank you for helping us build a more rigorous AI-assisted scientific future!
