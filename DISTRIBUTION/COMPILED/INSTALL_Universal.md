# Instalación de NEXUS Research Lab
## Guía Universal para cualquier IA / LLM

Esta guía explica cómo ejecutar NEXUS Research Lab en cualquier interfaz de chat de Inteligencia Artificial que soporte contexto de texto (ej. Llama, Mistral, xAI Grok, etc.).

---

### Requisito Fundamental: Arquitectura Multi-Ventana

NEXUS **NO DEBE** ejecutarse en una sola ventana de chat. Para garantizar que los especialistas no alucinen ni mezclen roles, debes mantener chats separados.

Necesitarás:
1. **Una ventana principal** para el Director.
2. **Ventanas bajo demanda** para los Especialistas, abriéndolas solo cuando el Director lo indique.

---

### Paso 1: Configurar la Ventana del Director (La Principal)

Esta es la única ventana que permanecerá abierta durante todo el proyecto.

1. Abre un nuevo chat en tu IA.
2. Copia y pega el contenido completo de `SHARED_Runtime.md`.
3. En el mismo mensaje (o en el siguiente si hay límite de caracteres), copia y pega el contenido completo de `DIRECTOR_Runtime.md`.
4. Envía el siguiente mensaje para iniciar:
   > "Inicializa NEXUS Research Lab. Mi proyecto es: [describe tu idea o tema aquí]"

El Director te responderá confirmando la creación del proyecto y te entregará el primer **Project Snapshot** en formato YAML.

---

### Paso 2: Ejecutar el Flujo de Trabajo

1. El Director analizará tu proyecto y te indicará qué especialista activar.
2. Te dará instrucciones exactas y el YAML del Snapshot.

### Paso 3: Activar un Especialista

Cuando el Director te asigne una tarea para un especialista (ej. Research Architect):

1. Abre un **NUEVO CHAT completamente nuevo y separado** en tu IA.
2. Copia y pega el contenido completo del archivo del especialista (ej. `Research_Architect_Runtime.md`).
3. Copia el **Project Snapshot YAML** que te dio el Director.
4. Envía un mensaje juntando ambas cosas:
   > "Inicializa como [Rol]. Project Snapshot:"
   > [Pega el YAML aquí]

El especialista analizará el YAML, hará su trabajo, y te devolverá un **NUEVO Project Snapshot YAML actualizado**.

### Paso 4: Retornar al Director

1. Copia el YAML actualizado que te dio el especialista.
2. Vuelve a la **ventana principal del Director**.
3. Pega el YAML actualizado.
   > "El especialista terminó. Aquí está el Project Snapshot actualizado:"
   > [Pega el YAML aquí]

El Director evaluará el trabajo (Quality Score), aprobará el avance y te indicará el siguiente paso.

---

### Cierre de Proyecto
Repite los Pasos 2 a 4 hasta que el Director indique que el manuscrito ha superado todas las auditorías y alcance el estado `SUBMISSION_READY`.
