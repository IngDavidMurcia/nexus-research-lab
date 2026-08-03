# NEXUS Automation Guide (Zero Friction)

NEXUS Research Lab Está diseñado para que el ser humano actúe como el orquestador activo a través de múltiples ventanas de chat. Esto garantiza la ausencia de contaminación cruzada por alucinaciones
Sin embargo, **para equipos técnicos, desarrolladores y power users** que buscan automatizar el flujo (fricción cero), existen alternativas robustas que mantienen la separación de roles mediante código o webhooks.

## 1. Arquitectura Conceptual de Automatización

Para automatizar NEXUS, debes reemplazar el "copiar y pegar" del humano por un **bus de eventos** o un orquestador que pase el archivo YAML (Project Snapshot) de un Agente (API) a otro.

- **Nodo Orquestador (El Director)**: Un script o webhook que lee el estado del YAML y decide a qué Especialista llamar a continuación.
- **Nodos Especialistas (Workers)**: APIs independientes de LLMs (con system prompts aislados) que reciben el YAML, realizan su tarea y devuelven el YAML modificado.

---

## 2. Alternativa A: n8n + Ollama (Local & Open Source)

**n8n** es un framework de automatización visual de flujos de trabajo. **Ollama** te permite correr modelos de lenguaje localmente (Llama 3, Mistral) gratis y con privacidad total.

### Cómo configurarlo en n8n:
1. **Trigger Node**: Inicia con un nodo Webhook o un "Chat Trigger" (si usas la UI de chat de n8n).
2. **Director Router**: Un nodo `Switch` o `AI Agent` en n8n que hace las veces del Director. Lee el campo `current_state` del JSON/YAML y enruta el flujo.
3. **Specialist Nodes**: Ramificaciones del Switch que envían un prompt a Ollama. 
   - *Ejemplo*: Si el Director dice "Llamar a SPC-01", el nodo de n8n activa una llamada API a Ollama con el **System Prompt** de `03_SPECIALISTS/SPC-01_Research_Architect.md` inyectándole el estado actual.
4. **Merge Node**: Recibe la respuesta del Especialista, extrae el nuevo YAML generado y actualiza la variable global en n8n, regresando al Director.

*(Ejemplo visual de estructura n8n: Webhook -> Switch (Director) -> Ollama (SPC-X) -> Code Node (Update YAML) -> Loop).*

---

## 3. Alternativa B: Desarrollo Propio (Python + LangChain / OpenAI API)

Si prefieres código, puedes construir un orquestador en Python usando **LangChain** o **CrewAI**. Aquí el truco es **NO usar un solo agente conversacional**, sino instanciar clientes separados para garantizar ventanas de contexto vacías (aislamiento).

### Código de Ejemplo (Arquitectura Python)

```python
import openai
import yaml

# 1. Definir los System Prompts compilados
DIRECTOR_PROMPT = open("DISTRIBUTION/COMPILED/02_DIRECTOR.md").read()
ARCHITECT_PROMPT = open("DISTRIBUTION/COMPILED/03_SPC-01_Research_Architect.md").read()

def call_agent(system_prompt, user_input):
    """Llama a la API creando un contexto TOTALMENTE NUEVO y aislado"""
    response = openai.ChatCompletion.create(
        model="gpt-4o",
        temperature=0.0, # Rigurosidad científica
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_input}
        ]
    )
    return response.choices[0].message.content

# 2. El Loop de Automatización
yaml_snapshot = open("Project_Snapshot.yaml").read()

while True:
    print("--- Llamando al Director ---")
    director_response = call_agent(DIRECTOR_PROMPT, f"Evalúa este estado:\n{yaml_snapshot}")
    
    # Lógica simple de enrutamiento basado en la respuesta del Director
    if "ACTION: CALL SPC-01" in director_response:
        print("--- Llamando al Research Architect ---")
        yaml_snapshot = call_agent(ARCHITECT_PROMPT, f"Avanza el diseño metodológico:\n{yaml_snapshot}")
        
    elif "ACTION: FINISH" in director_response:
        print("Proyecto Completado.")
        break
        
    # Guardar estado persistente
    with open("Project_Snapshot.yaml", "w") as f:
        f.write(yaml_snapshot)
```

## 4. El Futuro (NEXUS Web / SaaS)
La meta final a largo plazo es proveer este framework como una interfaz web *frictionless*, donde toda esta arquitectura de microservicios esté abstraída, permitiendo al usuario final simplemente chatear y aprobar/rechazar las decisiones que toman los especialistas en el background.
