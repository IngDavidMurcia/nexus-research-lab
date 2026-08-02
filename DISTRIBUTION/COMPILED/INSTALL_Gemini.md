# Instalación de NEXUS Research Lab
## Guía Optimizada para Google Gemini

Google Gemini (Gemini Advanced o Gemini 1.5 Pro) es **la plataforma ideal para NEXUS** debido a su ventana de contexto masiva (hasta 2 millones de tokens). Esto garantiza que nunca se olvide de los detalles de tu investigación.

Tienes dos formas de usarlo: mediante **Gems (Recomendado)** o mediante **Chats regulares**.

---

### Método 1: Usando "Gems" (Recomendado para Gemini Advanced)

Los Gems actúan como instancias preconfiguradas que retienen las instrucciones perfectamente.

**A. Crear el Gem del Director:**
1. Ve a "Gestor de Gems" (Gem Manager) -> "Nuevo Gem".
2. Nombre: "NEXUS Director".
3. En las "Instrucciones", copia y pega el contenido completo de `DIRECTOR_Runtime.md` y `SHARED_Runtime.md`.
4. Guarda el Gem.

**B. Crear los Gems Especialistas (Solo hazlo cuando los necesites):**
1. Crea un Gem llamado "NEXUS Architect", otro "NEXUS Writer", etc.
2. Pega el contenido de su respectivo archivo `_Runtime.md` en las instrucciones.

**C. Flujo de Trabajo:**
- Inicia una conversación con tu Gem "NEXUS Director".
- Escribe: *"Inicializa NEXUS Research Lab. Mi idea es..."*
- Toma el YAML que genere, abre el Gem del Especialista indicado, pégale el YAML.
- Trae el YAML actualizado de vuelta al Director.

---

### Método 2: Usando Google AI Studio (Para desarrolladores)

Si usas Google AI Studio (Gemini 1.5 Pro):

1. Crea un **System Instruction** (Instrucción de Sistema).
2. Pega ahí el `DIRECTOR_Runtime.md` y el `SHARED_Runtime.md`.
3. Ajusta la "Temperature" a un valor bajo (0.2 - 0.4) para máxima precisión analítica.
4. Para los especialistas, simplemente crea nuevos prompts con sus archivos Runtime en las System Instructions.
5. Pasa los YAMLs entre las diferentes pestañas.

---

### 💡 Tip Exclusivo para Gemini
A diferencia de otros modelos, Gemini tiene una atención al detalle casi perfecta en documentos largos. Cuando un especialista termine un borrador muy largo (ej. un manuscrito de 10 páginas), en lugar de meter todo el manuscrito dentro del campo `manuscript:` del YAML, puedes pedirle a Gemini que te genere el manuscrito como un archivo de texto o Documento de Google, y en el YAML solo poner un resumen, adjuntando el documento de texto en el siguiente paso.
