---
NEXUS_RUNTIME: STANDARD
title: NEXUS Plugin Standard Foundation
version: 1.0.1
classification: Developer Guide
last_compiled: 2026-08-02
---

# NEXUS Research Lab
## Plugin Standard Foundation v1.0.1

Este documento establece las bases para que desarrolladores, instituciones y equipos de investigación puedan crear **Especialistas Personalizados (Plugins)** compatibles con la arquitectura NEXUS Research Lab.

---

### 1. ¿Por qué Plugins?

El núcleo de NEXUS (CORE) tiene 5 especialistas estándar. Sin embargo, áreas de investigación altamente técnicas requieren roles específicos, por ejemplo:
- `Bioinformatics_Analyst`
- `Statistical_Modeler`
- `Legal_Compliance_Reviewer`
- `Systematic_Review_Screening_Agent`

Un Plugin en NEXUS es un **archivo Runtime (`_Runtime.md`)** que define el comportamiento de este nuevo rol dentro del ecosistema multi-agente.

---

### 2. Reglas Arquitectónicas Absolutas

Para que un plugin sea considerado **NEXUS-Compliant**, debe cumplir estrictamente con las siguientes reglas:

1. **Aislamiento de Comunicación**: El especialista solo se comunica con el usuario humano. Nunca "habla" directamente con otros especialistas.
2. **Dependencia del Director**: El plugin no puede alterar la fase actual del Workflow (`workflow.current_state`). Solo el Director aprueba transiciones.
3. **Consumo de YAML**: El plugin debe recibir el `Project Snapshot` en YAML como única fuente de verdad sobre el estado del proyecto.
4. **Devolución de YAML**: El plugin debe devolver un `Project Snapshot` YAML completo, actualizado con su contribución y marcando su estado como `COMPLETED`.

---

### 3. Estructura Requerida del Archivo Runtime

Todo archivo Runtime de un Plugin debe contener 4 secciones obligatorias:

#### SECCIÓN 1 — IDENTIDAD Y MISIÓN
Debe definir claramente el **Dominio** (lo que hace) y los **Límites de Autoridad** (lo que NO hace).

#### SECCIÓN 2 — REGLAS DEL ESPECIALISTA
Deben incluir restricciones contra las alucinaciones de IA y reglas específicas de la disciplina.

#### SECCIÓN 3 — CICLO DE TRABAJO
Los pasos que la IA debe ejecutar al recibir el YAML.

#### SECCIÓN 4 — PROTOCOLO DE OUTPUT
Un bloque estricto en markdown que defina exactamente cómo el especialista responderá al usuario, incluyendo el código YAML a devolver.

---

### 4. Integración en el Project Object (YAML)

Cuando un Plugin actualiza el Snapshot, debe inyectar sus resultados en una nueva clave dentro del bloque `specialists` si su rol es permanente, o en el bloque `experimental_data` / `methodology` según corresponda.

Ejemplo de actualización del YAML por un plugin de Estadística:

```yaml
specialists:
  STATISTICAL_MODELER:
    status: "COMPLETED"
    last_action: "Ran ANOVA simulation and validated assumptions."
    report_summary: "Data fits normal distribution. P-value < 0.05 confirmed."
```

---

### 5. Activación por el Director

Actualmente, el `DIRECTOR_Runtime.md` tiene harcodeados los 5 especialistas CORE.
Para que el Director llame a tu Plugin, el usuario debe incluir esta instrucción al inicializar el Director:

> "Inicializa NEXUS. *Nota: En la fase WF-002, en lugar de usar al Research Architect, quiero que me mandes al `Custom_Bioinformatics_Runtime.md`*."

En futuras versiones (v1.1.0+), el Director tendrá capacidad de parseo de un `plugins.json` para auto-descubrimiento. Por ahora, se maneja mediante inyección directa en el prompt inicial del usuario.
