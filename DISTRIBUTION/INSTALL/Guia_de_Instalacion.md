# 🚀 NEXUS Research Lab - Guía de Inicio Rápido

Bienvenido a NEXUS Research Lab. Esta guía te ayudará a configurar y comenzar a utilizar la arquitectura en minutos.

## 📥 1. Preparar el Entorno

La arquitectura NEXUS se basa en una estructura de carpetas locales para simular un entorno multi-agente utilizando tu Modelo de Lenguaje (LLM) preferido (ej. ChatGPT, Claude, Gemini).

1. Clona o descarga el repositorio a tu máquina local.
2. Localiza la carpeta `DISTRIBUTION/COMPILED`. Este es tu directorio de trabajo principal.
3. Abre la interfaz web de tu LLM preferido.

## 🧠 2. Inicializar el Director NEXUS

El Director es el orquestador central del sistema. Maneja el estado, rastrea el progreso y te instruye sobre cuándo llamar a los Especialistas.

1. Abre una **nueva ventana de chat** en tu LLM.
2. Copia todo el contenido del archivo `DISTRIBUTION/COMPILED/Nexus_Director.md`.
3. Pégalo en el chat y envía el mensaje.
4. El Director confirmará su inicialización y te pedirá los detalles de tu proyecto de investigación.
5. **Mantén esta ventana abierta.** Es tu centro de orquestación principal.

## 👥 3. Llamar a Especialistas Bajo Demanda

A medida que avanza tu proyecto, el Director te instruirá consultar a Especialistas específicos (ej. Redactor Científico, Analista de Datos).

1. Cuando recibas la instrucción, abre una **ventana de chat separada y nueva** en tu LLM.
2. Navega a `DISTRIBUTION/COMPILED/SPECIALISTS/` en tu carpeta local.
3. Abre el archivo markdown del Especialista solicitado (ej. `Scientific_Writer.md`) y copia su contenido.
4. Pégalo en la nueva ventana de chat.
5. El Especialista ahora está activo en esa ventana. Puedes transmitir instrucciones y datos del Director al Especialista y viceversa.

## 🔄 4. Mantener el "Snapshot YAML"

Para asegurar que todas las ventanas estén sincronizadas, el Director mantiene un "Snapshot YAML" que representa el estado actual del proyecto.

- **Siempre** copia el último Snapshot YAML generado por el Director y provéelo a un Especialista cuando le pidas que realice una tarea.
- Esto garantiza que el Especialista tenga el contexto completo del proyecto sin necesitar el historial completo de la conversación.

---
**¡Feliz Investigación!** Para flujos de trabajo más avanzados, consulta la documentación completa en la raíz del repositorio.
