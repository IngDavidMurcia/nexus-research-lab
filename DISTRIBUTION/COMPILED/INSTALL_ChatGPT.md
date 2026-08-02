# Instalación de NEXUS Research Lab
## Guía Optimizada para ChatGPT (OpenAI)

NEXUS funciona perfectamente en ChatGPT, especialmente en modelos GPT-4o o superiores. Tienes dos formas de usarlo: la **forma manual (chats regulares)** y la **forma pro (ChatGPT Projects / Custom GPTs)**.

---

### Método 1: Usando "ChatGPT Projects" (Recomendado si tienes plan Plus/Team/Pro)

ChatGPT Projects (o GPTs) te permite pre-cargar los archivos para no tener que copiar y pegar todo el texto cada vez.

**A. Crear el GPT del Director:**
1. Ve a "Explore GPTs" -> "Create".
2. En la pestaña "Configure", nómbralo "NEXUS Director".
3. Desactiva "Web Browsing" y "DALL-E" para evitar distracciones.
4. En "Instructions", copia y pega el contenido de `DIRECTOR_Runtime.md` y `SHARED_Runtime.md`. (Alternativamente, súbelos en "Knowledge" e indica en las instrucciones que los lea rigurosamente).
5. Guarda el GPT para tu uso personal.

**B. Crear los GPTs de Especialistas:**
1. Crea un GPT separado para cada uno: "NEXUS Writer", "NEXUS Reviewer", etc.
2. En las "Instructions" de cada uno, pega el contenido de su respectivo archivo `_Runtime.md`.

**C. Flujo de Trabajo:**
- Empieza chateando con tu "NEXUS Director".
- Cuando te entregue el Project Snapshot YAML, ve al GPT del especialista requerido.
- Pega el YAML, recibe el nuevo YAML, y vuelve al Director.

---

### Método 2: Chats Regulares (Para cualquier usuario)

Si prefieres no crear GPTs, usa la memoria de contexto larga del chat normal.

1. Abre un **Nuevo Chat**.
2. Sube los archivos `DIRECTOR_Runtime.md` y `SHARED_Runtime.md` como adjuntos (o pégalos en el primer mensaje).
3. Escribe:
   > "Lee estos documentos. Inicializa NEXUS Research Lab. Mi proyecto es: [Tu idea]"
4. El Director te dará tu **Project Snapshot (YAML)**.
5. Cuando te pida activar un especialista (ej. Scientific Writer), abre un **Nuevo Chat** diferente.
6. Sube el archivo `Scientific_Writer_Runtime.md` y escribe:
   > "Lee este documento e inicializa como especialista. Project Snapshot:"
   > [Pega el YAML del Director aquí]
7. Copia el YAML de respuesta del escritor y pégalo de vuelta en el chat del Director.

---

### ⚠️ Advertencia Importante para ChatGPT
ChatGPT a veces intenta "resumir" los YAML largos para ahorrar espacio. 
Si notas que un especialista devuelve un YAML incompleto (faltan secciones), dile: 
> "Genera el bloque YAML completo, sin resumir ni omitir ninguna sección."
