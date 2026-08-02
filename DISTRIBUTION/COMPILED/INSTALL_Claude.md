# Instalación de NEXUS Research Lab
## Guía Optimizada para Anthropic Claude

Claude (especialmente la familia Claude 3.5 Sonnet / Opus) destaca enormemente en redacción científica y seguimiento estricto de instrucciones, lo que lo hace excelente para la arquitectura NEXUS.

La mejor forma de utilizar NEXUS en Claude es aprovechando la función **"Projects"**.

---

### Método 1: Usando "Claude Projects" (Recomendado para usuarios Pro)

La función de Proyectos de Claude te permite anclar conocimiento de fondo (Project Knowledge) que el modelo siempre tendrá presente.

**A. Preparar el Entorno:**
1. Crea un nuevo Proyecto en Claude llamado "Laboratorio NEXUS".
2. En la sección "Project Knowledge" (Archivos del proyecto), sube el archivo `SHARED_Runtime.md`. Este documento de conocimientos éticos y editoriales estará siempre disponible para todos los roles.

**B. Usar al Director:**
1. Dentro de tu proyecto, abre un chat.
2. Pega en el primer mensaje el archivo `DIRECTOR_Runtime.md`.
3. Dile: *"Lee las instrucciones del Director. Inicializa NEXUS Research Lab. Mi proyecto es..."*
4. El Director te entregará tu YAML.

**C. Usar a los Especialistas:**
1. Cuando el Director asigne una tarea, NO continúes en ese mismo chat.
2. Haz clic en **"New Chat"** *dentro del mismo Proyecto*. (Esto mantendrá el acceso al `SHARED_Runtime.md` pero aislará la conversación).
3. Pega el archivo del especialista (ej. `Scientific_Reviewer_Runtime.md`) junto con el YAML.
   > *"Sigue este documento como tu rol. Project Snapshot: [YAML]"*
4. Devuelve el YAML resultante al chat original del Director.

---

### Método 2: Chats Individuales Regulares

Si usas la versión gratuita de Claude sin acceso a Projects:

1. Abre un nuevo chat.
2. Sube como archivos adjuntos (o pega el texto) `DIRECTOR_Runtime.md` y `SHARED_Runtime.md`.
3. Inicia el proyecto para recibir el YAML.
4. Para cada especialista, abre un chat 100% nuevo. Sube su archivo `_Runtime.md` y pégale el YAML.
5. Sé estricto manteniendo los chats separados para que Claude no empiece a mezclar su tono de Director con el de Escritor.

---

### 💡 Tip Exclusivo para Claude
Claude es excepcional manejando formato Markdown (incluyendo tablas y código estructurado). Cuando el *Scientific Writer* te entregue el borrador, pídele que utilice las capacidades de "Artifacts" (si lo tienes activado) para renderizar el manuscrito en una ventana lateral separada. Esto mantendrá el chat principal limpio para intercambiar los bloques YAML.
