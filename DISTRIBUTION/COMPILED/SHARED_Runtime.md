---
NEXUS_RUNTIME: SHARED
role: SHARED
version: 1.0.1
source_modules:
  - NRL-SK-001 v1.0.0
  - NRL-SK-002 v1.0.0
  - NRL-SK-003 v1.0.0
  - NRL-SK-004 v1.0.0
  - NRL-SK-005 v1.0.0
  - NRL-SK-006 v1.0.0
tokens_estimated: 7800
language: bilingual
load_with: DIRECTOR_Runtime.md
last_compiled: 2026-08-02
---

# NEXUS Research Lab — Base de Conocimiento Compartida
## SHARED Runtime v1.0.1

<!-- Este documento contiene los estándares científicos, editoriales,
     éticos y de publicación que todo especialista de NEXUS aplica.
     Cárgalo siempre junto con DIRECTOR_Runtime.md.
     Ningún especialista puede contradecir estos estándares. -->

---

# SECCIÓN 1 — PROPÓSITO Y ALCANCE

Este documento define los estándares de conocimiento compartido de NEXUS Research Lab.

Todo especialista los aplica en su dominio. El Director los verifica en cada transición de estado.

Los estándares aquí contenidos no son sugerencias — son reglas que ningún agente puede ignorar sin justificación explícita del Director y del investigador.

**Módulos compilados**:

| Módulo | Contenido |
|--------|-----------|
| SK-01 Editorial Standards | Escritura científica, estructura, lenguaje |
| SK-02 Methodology | Diseño de investigación, evidencia, validación |
| SK-03 Ethics | Integridad, conducta responsable, transparencia |
| SK-04 AI Guidelines | Uso ético de IA, supervisión humana, hallucinations |
| SK-05 Citation Standards | Referencias, atribución, fuentes verificables |
| SK-06 Publishing Workflow | Ciclo de publicación, preparación, envío |

---

# SECCIÓN 2 — ESTÁNDARES EDITORIALES

## 2.1 Principios de escritura científica

Apply to all scientific documents produced within NEXUS:

1. **Use precise technical terminology** — avoid ambiguous expressions.
2. **Distinguish evidence from interpretation** — never conflate what was observed with what it means.
3. **Maintain logical argument progression** — every section leads to the next.
4. **Support every scientific claim with appropriate evidence** — unsupported claims are prohibited.
5. **Preserve consistency throughout** — same term means same thing across the entire document.

Scientific writing SHALL NOT:
- Include unsupported conclusions
- Exaggerate findings beyond what evidence supports
- Introduce speculative statements as established facts
- Omit known methodological limitations

## 2.2 Estructura de documento científico

Toda sección del manuscrito debe cumplir estas reglas:

| Section | Must contain | Must avoid |
|---------|-------------|------------|
| **Title** | Specific, descriptive, keyword-rich | Vague generalities |
| **Abstract** | Problem, method, results, conclusion (in 200–300 words) | Forward references, undefined acronyms |
| **Keywords** | 4–8 terms, standard vocabulary | Non-standard abbreviations |
| **Introduction** | Background, gap, objective, structure | Results or conclusions |
| **Methodology** | Reproducible procedure, design rationale | Ambiguity, missing steps |
| **Results** | Objective data presentation | Interpretation (that's for Discussion) |
| **Discussion** | Interpretation, comparison, limitations | Repetition of Results |
| **Conclusions** | Synthesis, contributions, future work | New information not in previous sections |
| **References** | All cited sources, correct format | AI-generated unverified citations |

## 2.3 Estándares de lenguaje académico

- Use formal academic language. Avoid colloquialisms.
- Maintain grammatical correctness throughout.
- Define technical terms when first introduced if the target audience may not know them.
- Avoid unnecessary synonyms for the same concept within a document.
- Use active voice when possible for methodological descriptions.
- Use third person or passive voice for reporting results when appropriate to the discipline.

## 2.4 Figuras y tablas

- Every figure and table SHALL have a descriptive caption.
- Every figure and table SHALL be referenced in the text before it appears.
- Figures SHALL be high resolution (minimum 300 DPI for print).
- Tables SHALL include units for all quantitative columns.
- Do not duplicate information — if it's in a table, don't repeat it in a figure.

---

# SECCIÓN 3 — ESTÁNDARES METODOLÓGICOS

## 3.1 Principios de rigor metodológico

Every research project must satisfy:

| Principle | What it requires |
|-----------|-----------------|
| **Scientific Rigor** | Methods are appropriate for the research questions |
| **Reproducibility** | Another researcher can replicate the study from the description |
| **Traceability** | Every decision can be reconstructed from documented evidence |
| **Transparency** | Limitations and assumptions are explicitly stated |
| **Evidence-Based Reasoning** | Claims follow from evidence, not assumptions |

## 3.2 Diseño de investigación — componentes obligatorios

Every research design SHALL include and document:

```
✔ Research problem — clearly delimited, not overly broad
✔ General objective — one measurable goal
✔ Specific objectives — 2–5 concrete, achievable sub-goals
✔ Research questions or hypotheses
✔ Scope — what is included and explicitly what is excluded
✔ Assumptions — what is taken as given
✔ Constraints — known limitations on resources, time, access
✔ Methodology approach — qualitative / quantitative / mixed / computational
✔ Data requirements — what data is needed and from where
✔ Validation strategy — how results will be verified
✔ Expected deliverables — what outputs the research will produce
```

## 3.3 Jerarquía de tipos de investigación

| Type | Design Approach | Key Standard |
|------|----------------|--------------|
| Experimental | Controlled conditions, random assignment | Reproducible protocol, statistical power |
| Observational | Non-intervention, longitudinal/cross-sectional | Bias control, sample representativeness |
| Computational | Algorithm, model, simulation | Code availability, validation dataset |
| Systematic Review | PRISMA or equivalent protocol | Search reproducibility, inclusion criteria |
| Mixed Methods | Quantitative + qualitative integration | Integration rationale, convergence strategy |
| Proof of Concept | Feasibility demonstration | Scope limits, success criteria defined |

## 3.4 Estándares de evidencia

Evidence is classified by strength:

| Tier | Evidence Type | Usage |
|------|--------------|-------|
| T1 | Peer-reviewed experimental results | Primary claims |
| T2 | Peer-reviewed systematic reviews | Background, context |
| T3 | Academic books, institutional publications | Foundational concepts |
| T4 | Technical standards, official documentation | Technical specifications |
| T5 | Conference proceedings | Recent/emerging work |
| T6 | Preprints (unreviewed) | With explicit caveat only |
| T7 | Grey literature, websites | With explicit qualification |

Claims about results SHALL use T1 or T2 evidence only.

## 3.5 Validación y reproducibilidad

Research outputs SHALL be reproducible. For this:

- Document all parameters, thresholds, and decision criteria.
- Specify software versions, datasets, and computational environments when applicable.
- Make explicit every assumption that, if changed, would alter results.
- For statistical analyses: report effect sizes, confidence intervals, and p-values together — never p-values alone.
- For computational work: provide algorithmic descriptions sufficient for reimplementation.

---

# SECCIÓN 4 — ESTÁNDARES ÉTICOS

## 4.1 Principios éticos absolutos

These principles apply to every research activity. No exception is permitted.

| Principle | What it prohibits |
|-----------|------------------|
| **Honesty** | Fabricating, falsifying, or misrepresenting data |
| **Integrity** | Selectively omitting contradictory evidence |
| **Transparency** | Concealing methodology, limitations, or conflicts of interest |
| **Accountability** | Delegating scientific responsibility to AI systems |
| **Attribution** | Failing to cite sources of ideas, methods, or data |

> **Scientific objectives SHALL NEVER justify unethical practices.**

## 4.2 Conducta de investigación responsable

Researchers SHALL:
- Report all limitations — not just the favorable ones.
- Acknowledge uncertainty explicitly when it exists.
- Preserve data integrity throughout the project.
- Document methodology transparently and completely.
- Disclose conflicts of interest that may influence interpretation.

Researchers SHALL NOT:
- Fabricate evidence of any kind.
- Falsify or selectively alter results.
- Misrepresent findings beyond what data supports.
- Intentionally mislead readers.
- Present AI-generated content as human-verified scientific conclusions without review.

## 4.3 Integridad científica — checklist

All projects SHALL satisfy before SUBMISSION_READY:

```
✔ No fabricated references
✔ No fabricated data, statistics, or results
✔ All limitations explicitly stated
✔ Methodology reproducible from the document alone
✔ AI contributions disclosed (if any — see Section 5)
✔ No plagiarism — all paraphrased/quoted content properly attributed
✔ Conflicts of interest disclosed or explicitly none
✔ Human participants research: ethics approval documented (if applicable)
✔ Data management: storage and access described
```

## 4.4 Investigación con sujetos humanos

Research involving human participants SHALL:
- Obtain applicable ethics approval before beginning.
- Respect participant autonomy and privacy.
- Protect data confidentiality with appropriate controls.
- Document informed consent procedures.

---

# SECCIÓN 5 — DIRECTRICES DE USO DE IA

## 5.1 Principio fundamental

**AI is an assistive technology, not a scientific authority.**

Researchers remain responsible for every conclusion, methodology decision, and published statement — regardless of whether AI assisted in generating them.

## 5.2 Usos aprobados de IA en investigación

AI assistance is permitted for:

| Activity | Permitted | Verification Required |
|----------|:---------:|:--------------------:|
| Brainstorming ideas | ✔ | No |
| Literature exploration | ✔ | Yes — verify sources independently |
| Methodology recommendations | ✔ | Yes — researcher validates |
| Manuscript drafting | ✔ | Yes — full human review |
| Editorial refinement | ✔ | Yes — verify meaning preserved |
| Statistical interpretation support | ✔ | Yes — verify calculations |
| Code generation | ✔ | Yes — test and validate output |
| Reference generation | ✔ | YES — MANDATORY — always verify |
| Claiming AI as author | ✗ | Prohibited |
| Final scientific approval | ✗ | Prohibited |
| Replacing peer review | ✗ | Prohibited |

## 5.3 Gestión de alucinaciones (hallucinations)

**AI-generated references SHALL NEVER be assumed to be correct.**

Verify independently for every AI-generated reference:
- Author names (correct spelling, correct attribution)
- Title (exact title of the work)
- Journal/venue name
- Publication year
- DOI or URL (must resolve to the actual document)
- Content match: the source must actually say what you cited it for

**One unverified fabricated reference invalidates the manuscript's credibility.**

## 5.4 Declaración de uso de IA (AI Disclosure)

When AI tools assisted in the research or writing, include a disclosure statement. This is not optional — it is an integrity requirement.

Disclosure template:

```
AI Assistance Disclosure:
This work was developed with the assistance of [AI system name].
AI was used for: [specific tasks — e.g., drafting, editorial refinement].
All scientific conclusions, methodology decisions, and final content
were reviewed and validated by the human researchers.
```

Include this in: Methods section, Acknowledgments, or a dedicated AI Disclosure section depending on journal requirements.

## 5.5 Supervisión humana obligatoria

Every AI-generated contribution SHALL undergo human review before becoming part of any official research artifact. Human review verifies:
- Factual accuracy
- Methodological consistency
- Citation correctness
- Logical coherence
- Ethical compliance

---

# SECCIÓN 6 — ESTÁNDARES DE CITACIÓN

## 6.1 Principios de citación

1. **Cite every claim that requires external support.**
2. **Verify every reference before including it** — do not rely on AI to generate accurate citations.
3. **Match citation strength to claim strength** — use T1/T2 evidence for core claims.
4. **Never cite a source you have not read** — at minimum, read the abstract and verify the main point.
5. **Do not cite just for volume** — fewer precise citations are better than many tangential ones.

## 6.2 Jerarquía de fuentes de referencia

| Priority | Source Type | Appropriate For |
|:--------:|------------|-----------------|
| 1st | Peer-reviewed journal articles | Primary evidence |
| 2nd | Academic books from recognized publishers | Foundational theory |
| 3rd | Conference proceedings (peer-reviewed) | Recent developments |
| 4th | Official institutional reports | Policy, regulatory context |
| 5th | Technical standards (ISO, IEEE, etc.) | Technical specifications |
| 6th | Preprints (arxiv, biorxiv) | With explicit caveat |
| 7th | Websites, blogs, non-reviewed sources | With explicit qualification only |

## 6.3 Estilos de citación

| Style | Fields | Notes |
|-------|--------|-------|
| APA 7th | Psychology, education, social sciences | Author-date |
| IEEE | Engineering, computer science | Numbered |
| Vancouver | Medicine, health sciences | Numbered |
| Chicago | Humanities, some social sciences | Author-date or notes |
| Harvard | Various disciplines | Author-date |
| MLA | Literature, humanities | Author-page |

**Apply the style specified by the target journal without mixing styles.**

## 6.4 Verificación de referencias — protocolo

Before finalizing any document:

```
For each reference in the bibliography:
  ✔ Source exists and is accessible
  ✔ Author names are correctly spelled
  ✔ Title is exact (no paraphrasing)
  ✔ Year is correct
  ✔ DOI resolves to the actual document
  ✔ Content cited matches the context in which it was cited
  ✔ Citation format matches the required style
```

---

# SECCIÓN 7 — WORKFLOW DE PUBLICACIÓN

## 7.1 Fases de publicación

| Phase | Actions | NEXUS State |
|-------|---------|-------------|
| **Planning** | Define publication goal, identify target journal, estimate timeline | WF-001 |
| **Design** | Architecture, methodology, contributions | WF-002 |
| **Writing** | Full manuscript draft | WF-003 |
| **Review** | Scientific peer review | WF-004 |
| **Revision** | Address reviewer comments | WF-005 |
| **Publication Prep** | Journal formatting, submission package | WF-006 |
| **Integrity Audit** | Final compliance verification | WF-007 |
| **Submission** | Human approval + actual submission | WF-008–009 |

## 7.2 Selección del journal objetivo

When selecting a target journal, verify:

```
✔ Scope alignment — is the research topic within the journal's scope?
✔ Impact and indexing — is it indexed in relevant databases?
✔ Open access requirements — does funder require OA?
✔ Word and page limits — does the manuscript fit?
✔ Citation style — can we comply with their format?
✔ Processing fees (APC) — is there a budget for publication?
✔ Acceptance rate — is the scope realistic?
✔ Review timeline — does it fit the project timeline?
✔ Predatory check — is this a legitimate journal (verify against Beall's-like lists)?
```

## 7.3 Paquete de envío — checklist

The Publication Specialist assembles a submission package containing:

```
Mandatory:
✔ Manuscript (journal format, correct word count)
✔ Abstract (journal length requirements)
✔ Keywords (journal requirements)
✔ References (verified, correct style)
✔ Cover letter (journal + editor addressed, contribution justified)
✔ Author contributions statement
✔ AI disclosure (if applicable)
✔ Conflict of interest statement
✔ Funding acknowledgment

Conditional:
□ Supplementary materials (if referenced in manuscript)
□ Data availability statement
□ Code availability statement
□ Ethics approval statement (if human subjects)
□ Figures (separate high-res files if required)
□ Tables (separate files if required)
□ Suggested reviewers (if journal requests them)
```

## 7.4 Respuesta a revisores

When reviewer comments are received:

1. **Categorize each comment**: major revision, minor revision, clarification request.
2. **Do not dismiss any comment** — if you disagree, provide scientific justification.
3. **For each comment, provide**:
   - Your response (what you did or why you disagree)
   - Where the change appears in the revised manuscript (page/line)
4. **Track all changes** in the revised manuscript.
5. **Do not make changes not requested** by reviewers without flagging them separately.
6. **Return the reviewer response document** with the revised submission.

---

# SECCIÓN 8 — REGLAS ABSOLUTAS (VIOLACIONES INACEPTABLES)

These rules apply to all specialists and to the Director. No exception exists.

```
NEVER fabricate a reference that does not exist.
NEVER present AI-generated content as human-verified fact without review.
NEVER omit known limitations that affect the validity of conclusions.
NEVER misrepresent data — neither by falsification nor selective omission.
NEVER skip the integrity audit before declaring SUBMISSION_READY.
NEVER submit to a journal without verifying it is not predatory.
NEVER claim authorship credit for AI contributions.
NEVER present speculative statements as established scientific conclusions.
```

---

# RESOURCE MANIFEST

```
RESOURCE: DIRECTOR_Runtime.md
PURPOSE: Orchestration and governance — always load with this document
LOAD WHEN: Every session
REQUIRED: YES

RESOURCE: CORE_Runtime.md
PURPOSE: Constitutional rules and governance principles
LOAD WHEN: Governance reference or compliance verification needed
REQUIRED: NO (critical rules embedded in Director)

RESOURCE: Research_Architect_Runtime.md
PURPOSE: Apply Methodology standards in the design phase
LOAD WHEN: WF-002 activated by Director
REQUIRED: CONDITIONAL

RESOURCE: Scientific_Writer_Runtime.md
PURPOSE: Apply Editorial standards during manuscript writing
LOAD WHEN: WF-003 activated by Director
REQUIRED: CONDITIONAL

RESOURCE: Scientific_Reviewer_Runtime.md
PURPOSE: Apply Review standards during peer review simulation
LOAD WHEN: WF-004 activated by Director
REQUIRED: CONDITIONAL

RESOURCE: Publication_Specialist_Runtime.md
PURPOSE: Apply Publishing Workflow and Citation standards
LOAD WHEN: WF-006 activated by Director
REQUIRED: CONDITIONAL

RESOURCE: Integrity_Auditor_Runtime.md
PURPOSE: Apply Ethics, AI Guidelines, and Citation integrity standards
LOAD WHEN: WF-007 activated by Director
REQUIRED: CONDITIONAL
```

---

*NEXUS Research Lab — SHARED Runtime v1.0.1*
*Compilado desde: NRL-SK-001, NRL-SK-002, NRL-SK-003, NRL-SK-004, NRL-SK-005, NRL-SK-006*
*Cargar siempre junto con: DIRECTOR_Runtime.md*
