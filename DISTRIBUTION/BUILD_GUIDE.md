---
document_id: NRL-BUILD-001
title: NEXUS Runtime Build Guide & Standard
short_title: BUILD_GUIDE
version: 1.0.1
status: Active
classification: Distribution Standard
language: English (technical) / Spanish (user instructions)
applies_to: All NEXUS Runtime Documents
maintained_by: NEXUS Architect
last_updated: 2026-08-02
---

# NEXUS Research Lab
# Runtime Build Guide & Standard

Versión 1.0.1

---

> "Un documento Runtime no es una copia del Source. Es su representación ejecutable."

---

## Propósito de este documento

Este documento define el estándar oficial de construcción para todos los **Runtime Documents** de NEXUS Research Lab.

Todo documento Runtime generado para la capa `DISTRIBUTION/COMPILED/` DEBE cumplir con las reglas definidas aquí antes de ser publicado.

Este documento es la referencia canónica para el proceso de compilación Source → Runtime.

---

## Índice

1. Fundamentos del Runtime Standard
2. Estructura Canónica de un Runtime Document
3. Convención de Idioma
4. Métricas de Calidad Runtime
5. Project Snapshot — Esquema YAML Portátil
6. Protocolo de Carga Condicional de Recursos
7. Módulos del Sistema Runtime
8. Reglas de Versionado
9. Proceso de Compilación
10. Checklist de Publicación

---

# 1. Fundamentos del Runtime Standard

## 1.1 Diferencia entre Source y Runtime

| Dimensión | Source Document | Runtime Document |
|-----------|----------------|------------------|
| Propósito | Documentar el framework | Ejecutar el framework |
| Audiencia | Arquitectos, desarrolladores | LLM + Usuario |
| Contenido | Especificación completa | Instrucciones accionables |
| Tono | Formal, exhaustivo | Imperativo, conciso |
| Longitud | Sin restricción | Tokens objetivo definidos |
| Modificable | Solo por arquitectos | Compilado desde Source |
| Idioma | Inglés técnico | Bilingüe (ver Sección 3) |

Los Source Documents NO se modifican para distribución.
Los Runtime Documents se compilan FROM Source.
Nunca al revés.

## 1.2 Principios del Runtime

**P1 — Densidad Semántica**
Cada token del Runtime Document debe contribuir a la ejecución del framework. El overhead (índices, metadatos de versión, narrativa histórica) se elimina o comprime al mínimo funcional.

**P2 — Instrucción Imperativa**
Toda regla de comportamiento comienza con un verbo imperativo en inglés:
- ✅ `Always initialize the Project Object before activating any specialist.`
- ❌ `The Director is responsible for initializing the Project Object.`

**P3 — Jerarquía de Prioridad Explícita**
Cuando dos reglas pueden entrar en conflicto, la de mayor prioridad está listada primero y marcada con su nivel.

**P4 — Autocontención Funcional**
Un Runtime Document debe poder ejecutar su función primaria sin requerir otro archivo, excepto los declarados explícitamente en su Resource Manifest.

**P5 — Estado Transportable**
Todo Runtime Document que maneja estado de proyecto incluye el Project Snapshot Protocol: instrucciones para generar y consumir el snapshot YAML portátil.

**P6 — Carga Condicional Declarada**
Si un Runtime Document necesita recursos adicionales bajo ciertas condiciones, lo declara explícitamente en la sección `RESOURCE MANIFEST` usando el formato estándar definido en la Sección 6.

---

# 2. Estructura Canónica de un Runtime Document

Todo Runtime Document DEBE seguir esta estructura en el mismo orden.
Las secciones marcadas [REQUIRED] son obligatorias. Las marcadas [CONDITIONAL] aplican solo si el módulo las necesita.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEXUS RUNTIME HEADER          [REQUIRED]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IDENTITY                      [REQUIRED]

MISSION                       [REQUIRED]

ACTIVATION PROTOCOL           [REQUIRED]

BEHAVIORAL RULES              [REQUIRED]

WORKFLOW ENGINE               [REQUIRED — Director, Specialists]
                              [OMIT — CORE, SHARED]

DECISION FRAMEWORK            [REQUIRED — Director]
                              [CONDITIONAL — Specialists]

OUTPUT PROTOCOL               [REQUIRED]

ESCALATION RULES              [REQUIRED — Specialists]
                              [CONDITIONAL — Director]

PROJECT SNAPSHOT PROTOCOL     [REQUIRED — Director]
                              [CONDITIONAL — Specialists]

SPECIALIST REGISTRY           [REQUIRED — Director only]

RESOURCE MANIFEST             [REQUIRED]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## 2.1 NEXUS RUNTIME HEADER

Bloque de metadatos compacto. Siempre al inicio. No genera tokens de instrucción.

```markdown
---
NEXUS_RUNTIME: [MODULE_NAME]
role: [DIRECTOR | CORE | SHARED | SPECIALIST | CATALOG]
version: 1.0.1
source_modules: [lista de archivos Source compilados]
tokens_estimated: [número]
language: bilingual
last_compiled: [YYYY-MM-DD]
---
```

## 2.2 IDENTITY

Una sola oración en inglés que define la identidad del agente.
Sin narrativa. Sin contexto histórico. Solo identidad funcional.

Formato:
```
You are the NEXUS [ROLE], the [FUNCTION] of the NEXUS Research Lab.
```

## 2.3 MISSION

Tres partes obligatorias, máximo 3 oraciones cada una:

1. **What you do** — responsabilidades primarias
2. **What you do NOT do** — límites de autoridad
3. **Your authority scope** — sobre qué tienes autoridad de decisión

## 2.4 ACTIVATION PROTOCOL

Instrucciones de activación en español para el usuario + instrucciones técnicas de inicialización en inglés.

Incluye:
- Qué debe escribir el usuario para activar el agente
- Qué hace el agente al recibir la primera activación
- Cómo verifica que tiene el contexto mínimo necesario
- Qué pregunta si falta información

## 2.5 BEHAVIORAL RULES

Lista numerada de reglas en inglés. Formato estricto:

```
RULE [N] — [PRIORITY: CRITICAL | HIGH | STANDARD]
[Verbo imperativo]. [Condición si aplica]. [Consecuencia si aplica].
```

Ordenadas de mayor a menor prioridad. CRITICAL siempre primero.

Máximo 20 reglas por módulo. Si se necesitan más, hay demasiada complejidad en ese módulo.

## 2.6 WORKFLOW ENGINE

Tabla comprimida de estados y transiciones. Reemplaza las descripciones narrativas del Source.

Formato:

```
| State Code | State Name | Trigger | Next State | Responsible |
|------------|-----------|---------|------------|-------------|
| WF-001 | CREATED | Project initialized | WF-002 | Director |
```

Incluye también la tabla de Quality Gates (umbrales SQI mínimos por transición).

## 2.7 DECISION FRAMEWORK

Árboles de decisión comprimidos para los casos más frecuentes (regla 80/20).
Formato condicional:

```
IF [condición A] → [acción A]
IF [condición B] → [acción B]
IF [condición C] AND [condición D] → [acción C]
ELSE → [acción por defecto / escalar]
```

## 2.8 OUTPUT PROTOCOL

Define la estructura exacta de cada tipo de output que produce este módulo.
El LLM no improvisa el formato — lo sigue exactamente.

Para cada tipo de output, especifica:
- Nombre del output
- Cuándo se genera
- Estructura obligatoria (plantilla)
- Campos opcionales

## 2.9 ESCALATION RULES

Cuándo y cómo escalar. Qué recursos cargar. A quién notificar.

```
ESCALATE TO DIRECTOR when:
- [condición 1]
- [condición 2]

LOAD ADDITIONAL RESOURCE when:
- [condición] → [nombre del archivo]
```

## 2.10 PROJECT SNAPSHOT PROTOCOL

Define cuándo generar el snapshot, el formato exacto, y las instrucciones al usuario.

Ver Sección 5 de este BUILD_GUIDE para el esquema canónico del Project Snapshot.

**Instrucción al usuario** (siempre en español):
```
📋 NEXUS ha generado tu Project Snapshot.
Copia el bloque YAML completo que aparece abajo.
Cuando abras una nueva ventana para [ESPECIALISTA],
pégalo al inicio de tu primera instrucción.
```

## 2.11 SPECIALIST REGISTRY

**Solo en DIRECTOR_Runtime.md.**

Micro-perfil de cada especialista oficial (5 perfiles en v1).

Por especialista:
- Identidad (1 oración)
- Scope (qué hace / qué NO hace)
- Triggers (cuándo activarlo según el workflow state)
- Input esperado
- Output producido

## 2.12 RESOURCE MANIFEST

Lista todos los recursos adicionales que existen en el ecosistema NEXUS y cuándo cargarlos.

```
RESOURCE: [nombre del archivo]
PURPOSE: [para qué sirve]
LOAD WHEN: [condición de carga]
REQUIRED: [YES | NO]
```

---

# 3. Convención de Idioma

## 3.1 Regla general

| Tipo de contenido | Idioma |
|-------------------|--------|
| Instrucciones técnicas al LLM (behavioral rules, decision trees, output protocols) | **Inglés** |
| Instrucciones al usuario humano | **Español** |
| Encabezados de sección | **Español** (con código inglés cuando aplique) |
| Nombres de módulos y códigos | **Inglés** (NRL-DIR-001, WF-003, etc.) |
| Project Snapshot YAML — claves (keys) | **Inglés** |
| Project Snapshot YAML — valores (values) | **Español** si es contenido del usuario |
| Mensajes de error y alertas al usuario | **Español** |
| Analogías y explicaciones en POR_QUÉ_NEXUS.md | **Español** |
| Source Documents (01_CORE a 07_BRANDING) | **Inglés** (sin cambios) |

## 3.2 Marcadores de idioma

Para delimitar bloques de idioma en secciones mixtas:

```markdown
<!-- INSTRUCCIÓN AL USUARIO — ESPAÑOL -->
[Texto en español]
<!-- FIN INSTRUCCIÓN USUARIO -->
```

## 3.3 Terminología preservada en inglés

Los siguientes términos permanecen en inglés incluso en texto en español porque son nombres propios del framework:

- NEXUS Director / NEXUS Research Lab
- Project Object / Project Snapshot
- Runtime Document / Source Document
- SQI (Scientific Quality Index)
- NACP (NEXUS Agent Communication Protocol)
- Workflow states (WF-001, RESEARCH_DESIGN, etc.)
- Decision Gates (DG-01, etc.)

---

# 4. Métricas de Calidad Runtime

## 4.1 Densidad Semántica

**Definición**: Porcentaje de tokens del documento que son instrucciones directamente accionables por el LLM.

**Umbral mínimo**: 70%

**Tokens que NO cuentan como accionables**:
- Encabezados de sección (H1, H2, H3)
- Metadatos del header
- Texto narrativo de contexto histórico
- Referencias cruzadas a otros documentos
- Separadores horizontales (`---`)

**Cómo verificarlo**: Leer el documento e identificar cada párrafo. Si el párrafo responde "¿qué debe hacer el LLM?" cuenta como accionable. Si responde "¿por qué existe esto?" no cuenta.

## 4.2 Tokens objetivo por módulo

| Runtime Module | Tokens Objetivo | Tokens Máximos |
|----------------|---------------:|---------------:|
| NEXUS_START.md | 600 | 800 |
| POR_QUÉ_NEXUS.md | 1,200 | 1,500 |
| CORE_Runtime.md | 9,000 | 11,000 |
| DIRECTOR_Runtime.md | 13,000 | 15,000 |
| SHARED_Runtime.md | 7,000 | 9,000 |
| SPECIALISTS_CATALOG.md | 3,500 | 4,500 |
| [Specialist]_Runtime.md (cada uno) | 4,500 | 6,000 |
| INSTALL_[Platform].md (cada uno) | 800 | 1,200 |
| PLUGIN_STANDARD.md | 2,000 | 3,000 |

*Estimación: 1 token ≈ 0.75 palabras en inglés / 0.65 palabras en español*

## 4.3 Criterios de completitud

Un Runtime Document está listo para publicación cuando:

- [ ] Todas las secciones [REQUIRED] están presentes y completas
- [ ] Densidad semántica ≥ 70%
- [ ] Tokens dentro del rango objetivo
- [ ] Todas las reglas usan verbo imperativo
- [ ] El RESOURCE MANIFEST lista todos los archivos externos referenciados
- [ ] El Project Snapshot Protocol está presente (si aplica al módulo)
- [ ] No contiene referencias cruzadas rotas a otros Runtime Documents
- [ ] Probado en al menos una plataforma LLM (ChatGPT, Gemini, o Claude)

---

# 5. Project Snapshot — Esquema YAML Portátil

## 5.1 Propósito

El Project Snapshot es la solución de persistencia de NEXUS para entornos multi-sesión.

Permite transportar el estado completo de un proyecto entre ventanas de chat sin infraestructura externa.

Generado por: NEXUS Director (al final de cada sesión)
Consumido por: NEXUS Director y todos los Especialistas (al inicio de cada sesión nueva)

## 5.2 Esquema Canónico

```yaml
# ═══════════════════════════════════════════════════════
# NEXUS PROJECT SNAPSHOT v1.0.1
# Copia este bloque completo a tu próxima sesión de chat
# ═══════════════════════════════════════════════════════
nexus_snapshot:
  schema_version: "1.0.1"
  generated_by: "NEXUS Director"
  generated_at: "[YYYY-MM-DD HH:MM]"
  session_number: [N]

# ── IDENTIDAD DEL PROYECTO ──────────────────────────────
project:
  id: "NRL-[YYYY]-[XXXXXX]"           # Ejemplo: NRL-2026-000001
  title: "[Título completo del proyecto]"
  type: "[Research Article | Conference Paper | Thesis | Technical Report | Grant Proposal | Other]"
  language: "[es | en | other]"
  domain: "[Área de investigación]"
  research_line: "[Línea de investigación específica]"
  authors:
    - name: "[Nombre del investigador principal]"
      role: "Principal Investigator"
  institution: "[Institución si aplica, o null]"

# ── DISEÑO CIENTÍFICO ───────────────────────────────────
research:
  problem: "[Enunciado del problema de investigación]"
  motivation: "[Por qué es relevante este problema]"
  objectives:
    general: "[Objetivo general]"
    specific:
      - "[Objetivo específico 1]"
      - "[Objetivo específico 2]"
  research_questions:
    - "[Pregunta de investigación 1]"
  hypotheses:
    - "[Hipótesis 1 si aplica, o null]"
  contributions:
    - "[Contribución esperada 1]"

# ── METODOLOGÍA ─────────────────────────────────────────
methodology:
  design: "[Experimental | Observacional | Descriptivo | Revisión Sistemática | Mixto | TBD]"
  approach: "[Cuantitativo | Cualitativo | Mixto | TBD]"
  population: "[Descripción de población/muestra o null]"
  instruments: "[Instrumentos de recolección o null]"
  statistical_methods: "[Métodos estadísticos o null]"

# ── PUBLICACIÓN ─────────────────────────────────────────
publication:
  target_journal: "[Nombre del journal o null]"
  journal_requirements: "[Requisitos específicos o null]"
  citation_style: "[APA | IEEE | Vancouver | Chicago | Other | TBD]"
  word_limit: "[Límite de palabras o null]"

# ── ESTADO DEL WORKFLOW ─────────────────────────────────
workflow:
  current_state: "[WF-001 | WF-002 | WF-003 | WF-004 | WF-005 | WF-006 | WF-007 | WF-008]"
  current_state_name: "[CREATED | RESEARCH_DESIGN | WRITING | REVIEW | REVISION | PUBLICATION | INTEGRITY_AUDIT | SUBMISSION_READY]"
  execution_status: "[Active | Waiting | Under Review | Blocked | Completed]"
  next_recommended_state: "[WF-XXX]"
  next_specialist: "[Research Architect | Scientific Writer | Scientific Reviewer | Publication Specialist | Integrity Auditor | null]"
  active_gate: "[DG-01 | DG-02 | ... | null]"
  blocking_issues:
    - "[Descripción del bloqueo si existe, o null]"

# ── CALIDAD (SQI) ───────────────────────────────────────
quality:
  sqi_total: 0                         # 0–100
  sqi_dimensions:
    scientific_architecture: 0         # SQD-01 (20%)
    methodological_quality: 0          # SQD-02 (20%)
    scientific_writing: 0              # SQD-03 (15%)
    critical_review: 0                 # SQD-04 (15%)
    publication_readiness: 0           # SQD-05 (10%)
    research_integrity: 0              # SQD-06 (20%)
  integrity_status: "[PENDING | PASS | FAIL | null]"
  publication_readiness: "[NOT_READY | NEAR_READY | READY | null]"

# ── ESPECIALISTAS ───────────────────────────────────────
specialists:
  research_architect:
    status: "[NOT_STARTED | IN_PROGRESS | COMPLETED | null]"
    last_action: "[Descripción o null]"
    report_summary: "[Resumen breve del reporte o null]"
  scientific_writer:
    status: "[NOT_STARTED | IN_PROGRESS | COMPLETED | null]"
    last_action: "[Descripción o null]"
    report_summary: "[Resumen breve del reporte o null]"
  scientific_reviewer:
    status: "[NOT_STARTED | IN_PROGRESS | COMPLETED | null]"
    last_action: "[Descripción o null]"
    report_summary: "[Resumen breve del reporte o null]"
  publication_specialist:
    status: "[NOT_STARTED | IN_PROGRESS | COMPLETED | null]"
    last_action: "[Descripción o null]"
    report_summary: "[Resumen breve del reporte o null]"
  integrity_auditor:
    status: "[NOT_STARTED | IN_PROGRESS | COMPLETED | null]"
    last_action: "[Descripción o null]"
    report_summary: "[Resumen breve del reporte o null]"

# ── ENTREGABLES ─────────────────────────────────────────
deliverables:
  current_draft_version: "[v0.1 | null]"
  draft_sections_completed:
    - "[Abstract | Introduction | Methodology | Results | Discussion | Conclusions | References]"
  pending_sections:
    - "[sección pendiente]"

# ── ISSUES Y DECISIONES ─────────────────────────────────
issues:
  open:
    - id: "ISS-001"
      description: "[Descripción del issue]"
      severity: "[CRITICAL | HIGH | MEDIUM | LOW]"
      assigned_to: "[Especialista o null]"
  resolved:
    - id: "ISS-000"
      description: "[Descripción]"
      resolution: "[Cómo se resolvió]"

decisions:
  - id: "DEC-001"
    description: "[Decisión tomada]"
    rationale: "[Justificación]"
    made_by: "[Director | User]"
    timestamp: "[YYYY-MM-DD]"

# ── HISTORIAL ───────────────────────────────────────────
history:
  - session: 1
    date: "[YYYY-MM-DD]"
    agent: "Director"
    action: "Project initialization"
    state_before: "null"
    state_after: "WF-001"
    sqi_before: 0
    sqi_after: 0
# ═══════════════════════════════════════════════════════
# FIN DEL NEXUS PROJECT SNAPSHOT
# ═══════════════════════════════════════════════════════
```

## 5.3 Reglas del Project Snapshot

**RULE S-01** — Generate a Project Snapshot at the end of every Director session.

**RULE S-02** — Generate a Project Snapshot when a specialist completes their work and returns control to the Director.

**RULE S-03** — Never truncate the snapshot. All fields must be present. Use `null` for empty fields.

**RULE S-04** — Always increment `session_number` by 1 for each new session.

**RULE S-05** — Always append a new entry to `history` when the workflow state changes.

**RULE S-06** — When receiving a snapshot from a specialist, validate that `workflow.current_state` matches the expected state before proceeding.

**RULE S-07** — If a snapshot contains `blocking_issues`, address them before recommending the next specialist.

## 5.4 Instrucción al usuario (en español)

Cuando el Director genere un snapshot, SIEMPRE muestra este mensaje antes del bloque YAML:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 NEXUS PROJECT SNAPSHOT — Sesión [N]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tu Project Snapshot está listo.

PRÓXIMO PASO:
1. Copia el bloque YAML completo de abajo.
2. Abre una nueva ventana de chat.
3. Carga el archivo: [NOMBRE_ESPECIALISTA]_Runtime.md
4. Escribe: "Inicializa como [ROL]. Project Snapshot:"
   y pega el YAML a continuación.

El especialista retomará el proyecto desde donde lo dejamos.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

# 6. Protocolo de Carga Condicional de Recursos

## 6.1 Formato estándar de declaración en RESOURCE MANIFEST

```
RESOURCE: [nombre_del_archivo.md]
PURPOSE: [para qué sirve en 1 oración]
LOAD WHEN: [condición exacta que dispara la carga]
REQUIRED: [YES — el módulo no puede funcionar sin él | NO — mejora funcionalidad]
SIZE: [tokens estimados]
```

## 6.2 Ejemplo de RESOURCE MANIFEST para DIRECTOR_Runtime.md

```
RESOURCE: CORE_Runtime.md
PURPOSE: Constitutional rules and governance principles
LOAD WHEN: User requests formal governance reference or compliance verification
REQUIRED: NO (Director embeds essential rules)
SIZE: ~9,000 tokens

RESOURCE: SHARED_Runtime.md
PURPOSE: Methodological, editorial and ethics standards
LOAD WHEN: Activate alongside DIRECTOR_Runtime.md at session start
REQUIRED: YES — load at initialization
SIZE: ~7,000 tokens

RESOURCE: SPECIALISTS_CATALOG.md
PURPOSE: Registry of custom/additional specialists (plugins)
LOAD WHEN: User has custom specialists OR requests plugin capabilities
REQUIRED: NO (5 default specialists are embedded in SPECIALIST REGISTRY)
SIZE: ~3,500 tokens

RESOURCE: [Specialist]_Runtime.md
PURPOSE: Full specialist activation for domain-specific work
LOAD WHEN: Director assigns specialist task in current workflow state
REQUIRED: CONDITIONAL — required when specialist work begins
SIZE: ~4,500 tokens each
```

## 6.3 Cómo el Director solicita la carga de un recurso

Cuando el Director necesita que el usuario cargue un archivo, usa este formato estandarizado:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📂 NEXUS — CARGA DE RECURSO REQUERIDA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Archivo: [nombre_del_archivo.md]
Motivo: [por qué se necesita ahora]
Instrucción: Abre una nueva ventana → carga este archivo
              → pega el Project Snapshot actual.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

# 7. Módulos del Sistema Runtime

## 7.1 Mapa de módulos v1.0.1

```
DISTRIBUTION/COMPILED/
│
├── NEXUS_START.md              ← Punto de entrada único para el usuario
│   Fuente: Redacción nueva (no compilado desde Source)
│   Role: USER_GUIDE
│
├── POR_QUÉ_NEXUS.md            ← Justificación filosófica del framework
│   Fuente: Redacción nueva
│   Role: USER_EDUCATION
│
├── CORE_Runtime.md             ← Constitución ejecutable del framework
│   Fuente: 01_CORE/ (todos los módulos)
│   Role: CORE
│
├── DIRECTOR_Runtime.md         ← Orquestador principal
│   Fuente: 02_DIRECTOR/ (todos los módulos)
│   Role: DIRECTOR
│   Incluye: SPECIALIST REGISTRY (5 especialistas embebidos)
│
├── SHARED_Runtime.md           ← Base de conocimiento compartida
│   Fuente: 04_SHARED_KNOWLEDGE/ (todos los módulos)
│   Role: SHARED
│
├── SPECIALISTS_CATALOG.md      ← Catálogo de extensiones (opcional en v1)
│   Fuente: Template nuevo + formato de plugin
│   Role: CATALOG
│
└── specialists/
    ├── Research_Architect_Runtime.md
    │   Fuente: 03_SPECIALISTS/Research_Architect.md
    │   Role: SPECIALIST
    │
    ├── Scientific_Writer_Runtime.md
    │   Fuente: 03_SPECIALISTS/Scientific_Writer.md
    │   Role: SPECIALIST
    │
    ├── Scientific_Reviewer_Runtime.md
    │   Fuente: 03_SPECIALISTS/Scientific_Reviewer.md
    │   Role: SPECIALIST
    │
    ├── Publication_Specialist_Runtime.md
    │   Fuente: 03_SPECIALISTS/Publication_Specialist.md
    │   Role: SPECIALIST
    │
    └── Integrity_Auditor_Runtime.md
        Fuente: 03_SPECIALISTS/Research_Integrity_Auditor.md
        Role: SPECIALIST
```

## 7.2 Carga inicial recomendada para el usuario

**Sesión principal (Director)**:
```
DIRECTOR_Runtime.md + SHARED_Runtime.md
```

**Sesión de especialista**:
```
[Specialist]_Runtime.md + [Project Snapshot pegado en el prompt]
```

**Sesión de gobernanza/referencia**:
```
CORE_Runtime.md
```

---

# 8. Reglas de Versionado

## 8.1 Esquema de versión

```
[NEXUS_VERSION].[RUNTIME_VERSION]

Ejemplo: 1.0.1
         │ │ │
         │ │ └── Patch: correcciones menores, typos, clarificaciones
         │ └──── Minor: nuevas secciones, nuevos especialistas, ampliaciones
         └────── Major: cambios arquitectónicos de Source que afectan Runtime
```

## 8.2 Sincronización Source ↔ Runtime

| Cambio en Source | Acción en Runtime |
|-----------------|-------------------|
| Corrección editorial menor | Patch en Runtime correspondiente |
| Nuevo especialista base | Nueva versión Minor de DIRECTOR_Runtime + nuevo [Specialist]_Runtime |
| Cambio en Workflow States | Minor en CORE_Runtime + DIRECTOR_Runtime |
| Cambio arquitectónico mayor | Major en todos los Runtime afectados |
| Nuevo módulo de Shared Knowledge | Minor en SHARED_Runtime |

## 8.3 Rastreo de compilación

Cada Runtime Document registra en su header:
```yaml
source_modules:
  - NRL-CORE-001 v1.0.0
  - NRL-DIR-001 v1.0.0
  - NRL-WF-001 v1.0.0
```

Esto permite saber exactamente qué versión de Source se usó para compilar cada Runtime.

---

# 9. Proceso de Compilación

## 9.1 Pipeline SOURCE → RUNTIME

```
PASO 1 — Selección de módulos fuente
    Identificar todos los archivos Source relevantes para el módulo Runtime.
    No incluir Source Documents no relevantes.

PASO 2 — Análisis de contenido
    Leer cada Source Document completo.
    Identificar qué información es ejecutable vs. narrativa/histórica.

PASO 3 — Destilación
    Extraer SOLO las reglas accionables, máquinas de estado,
    matrices de decisión y protocolos operativos.
    Eliminar: índices, frontmatter completo, secciones "Purpose",
    secciones "Scope" narrativas, referencias cruzadas redundantes.

PASO 4 — Transformación a formato imperativo
    Convertir descripciones a instrucciones.
    Convertir narrativa a tablas comprimidas.
    Convertir listas de responsabilidades a reglas numeradas con verbo.

PASO 5 — Adición de elementos Runtime-only
    Project Snapshot Protocol (no existe en Source).
    Resource Manifest (no existe en Source).
    Activation Protocol con instrucciones al usuario en español.
    Specialist Registry (embebido, no existe como sección en Source).

PASO 6 — Validación de calidad
    Verificar densidad semántica ≥ 70%.
    Verificar tokens dentro del rango objetivo.
    Verificar que todas las secciones [REQUIRED] estén presentes.
    Verificar que el Runtime funciona sin requerir leer el Source.

PASO 7 — Prueba en plataforma
    Cargar el Runtime en un chat LLM limpio.
    Ejecutar el flujo de activación.
    Verificar comportamiento esperado.
```

---

# 10. Checklist de Publicación

Antes de mover cualquier Runtime Document a `DISTRIBUTION/RELEASES/`, verificar:

## Checklist de contenido

- [ ] Header NEXUS_RUNTIME presente con todos los campos
- [ ] Sección IDENTITY: una sola oración
- [ ] Sección MISSION: tres partes (what you do / don't do / authority)
- [ ] Sección ACTIVATION PROTOCOL: instrucciones en español + lógica en inglés
- [ ] Sección BEHAVIORAL RULES: numeradas, verbo imperativo, ordenadas por prioridad
- [ ] Sección OUTPUT PROTOCOL: estructura exacta de cada output
- [ ] Sección RESOURCE MANIFEST: todos los recursos externos declarados
- [ ] Secciones condicionales presentes o correctamente omitidas

## Checklist de calidad

- [ ] Densidad semántica ≥ 70% (verificado manualmente o con contador)
- [ ] Tokens dentro del rango objetivo para el módulo (ver Sección 4.2)
- [ ] Sin referencias cruzadas rotas
- [ ] Sin secciones narrativas sin función ejecutable
- [ ] Convención de idioma respetada (Sección 3)

## Checklist de integración

- [ ] Project Snapshot Protocol compatible con el esquema canónico (Sección 5)
- [ ] Resource Manifest usa el formato estándar (Sección 6)
- [ ] Probado en ≥1 plataforma LLM con prompt de activación real
- [ ] Source modules referenciados en el header con versión exacta

## Checklist de release

- [ ] Archivo nombrado según convención: `[MODULE]_Runtime.md`
- [ ] Ubicado en `DISTRIBUTION/COMPILED/` (o `DISTRIBUTION/COMPILED/specialists/`)
- [ ] VERSION.md actualizado si es primer release del módulo
- [ ] Incluido en el bundle `nexus-runtime-v[X.Y.Z].zip`

---

*NEXUS Research Lab — BUILD_GUIDE v1.0.1*
*Documento de referencia para el proceso de compilación Runtime.*
*Fuente de verdad para el formato y estándar de todos los Runtime Documents.*
