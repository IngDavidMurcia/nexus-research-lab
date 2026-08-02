---
NEXUS_RUNTIME: CATALOG
version: 1.0.1
classification: Registry
last_compiled: 2026-08-02
---

# NEXUS Research Lab — Catálogo de Especialistas
## SPECIALISTS CATALOG v1.0.1

<!-- Este documento es el registro oficial de todos los especialistas
     soportados por el laboratorio. Incluye los 5 especialistas CORE
     y sirve como punto de extensión para especialistas personalizados. -->

---

# 1. ARQUITECTURA DE ESPECIALISTAS

En NEXUS Research Lab, un **Especialista** no es un prompt suelto. Es un agente encapsulado que cumple con una Especificación Canónica (NRL-SPEC-001).

Todo especialista en este catálogo cumple con:
- Una identidad estricta y un dominio delimitado.
- Un ciclo de vida estándar de 10 pasos (WAITING → INITIALIZE → ... → RETURN).
- Prohibición de comunicación lateral (nunca habla con otro especialista, solo con el Director).
- Incapacidad para alterar el estado del workflow sin aprobación del Director.

---

# 2. ESPECIALISTAS CORE (INCLUIDOS POR DEFECTO)

Los siguientes especialistas forman el núcleo estándar de NEXUS. Su comportamiento y reglas de enrutamiento ya están integrados en el `DIRECTOR_Runtime.md`.

Para activarlos, solo necesitas cargar su archivo Runtime correspondiente en una ventana de chat nueva.

| ID | Rol | Dominio Principal | Archivo Runtime | Fase Típica |
|----|-----|-------------------|-----------------|-------------|
| **SPC-01** | Research Architect | Metodología, diseño, viabilidad | `Research_Architect_Runtime.md` | WF-002 |
| **SPC-02** | Scientific Writer | Escritura, redacción, narrativa | `Scientific_Writer_Runtime.md` | WF-003 |
| **SPC-03** | Scientific Reviewer | Revisión crítica, validación | `Scientific_Reviewer_Runtime.md` | WF-004 |
| **SPC-04** | Publication Spec. | Formato, journal compliance | `Publication_Specialist_Runtime.md` | WF-006 |
| **SPC-05** | Integrity Auditor | Ética, AI disclosure, referencias | `Integrity_Auditor_Runtime.md` | WF-007 |

---

# 3. CREACIÓN DE ESPECIALISTAS CUSTOM (PLUGINS)

NEXUS soporta la adición de especialistas personalizados para dominios específicos (ej. Bioinformático, Analista Estadístico, Especialista Legal).

Para registrar un especialista personalizado:

1. Crea un documento `[Nombre]_Runtime.md` siguiendo la estructura canónica.
2. Añade el especialista a la tabla de abajo.
3. Al iniciar el `DIRECTOR_Runtime.md`, infórmale de la existencia del nuevo especialista en el prompt de inicialización.

## 3.1 Estructura canónica requerida para un Custom Specialist

Todo archivo de especialista DEBE incluir:
- Identidad y Misión
- Entradas requeridas (siempre el Project Snapshot)
- Salidas requeridas (informe + Snapshot actualizado)
- Límites de autoridad (lo que NO puede hacer)
- Dimensión SQI aplicable a su revisión

---

# 4. REGISTRO DE ESPECIALISTAS CUSTOM

*Añade aquí tus especialistas personalizados.*

| ID | Rol | Dominio Principal | Archivo Runtime |
|----|-----|-------------------|-----------------|
| *Ej. C-01* | *Statistical Analyst* | *Análisis cuantitativo de datos* | *Statistical_Analyst_Runtime.md* |

