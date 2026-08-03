<p align="center">
  <img src="Source/07_BRANDING/Assets/Banner/github_banner.svg" alt="NEXUS Research Lab Banner" width="100%"/>
</p>

<p align="center">
  <b>Llevando gobernanza científica a la investigación asistida por IA.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-v1.0.1-blue" alt="Version">
  <img src="https://img.shields.io/badge/status-Stable-success" alt="Status">
  <img src="https://img.shields.io/badge/license-MIT-success" alt="License">
  <img src="https://img.shields.io/badge/category-Scientific_Framework-darkblue" alt="Category">
</p>

---

## 🌐 Idiomas
- 🇺🇸 [English](README.md)
- 🇪🇸 Español (Actual)

---

## ¿Qué es NEXUS Research Lab?

**NEXUS Research Lab** es un framework estructural diseñado para investigadores académicos que desean utilizar Inteligencia Artificial (LLMs como ChatGPT, Gemini o Claude) para asistir su investigación, sin sacrificar **rigor científico, trazabilidad o integridad ética.**

En lugar de tratar a la IA como un "chat mágico" que escribe un paper en un solo clic (lo cual genera alucinaciones y mala metodología), NEXUS obliga a la IA a operar como un **laboratorio de especialistas estrictos y aislados**.

### El Problema Principal
Cuando le pides a una IA que "escriba un artículo científico", esta mezcla roles: intenta ser el investigador, el redactor y el revisor al mismo tiempo. Esto degrada su capacidad de atención y conduce a referencias inventadas y ciencia débil.

### La Solución NEXUS: Arquitectura Multi-Ventana
NEXUS resuelve esto imponiendo un **Protocolo Multi-Ventana**. El investigador humano actúa como puente entre agentes de IA aislados.

<p align="center">
  <img src="Source/07_BRANDING/Assets/Diagrams/architecture_diagram_es.svg" alt="Diagrama de Arquitectura NEXUS" width="80%"/>
</p>

1. **El Director**: Orquesta el proyecto, valida reglas y mantiene el estado del proyecto en un archivo YAML.
2. **Los 5 Especialistas**: Realizan el trabajo real (Metodología, Redacción, Revisión, Publicación, Auditoría). Se cargan *solo cuando se necesitan* en ventanas de chat completamente separadas.

---

## Cómo Funciona (El Flujo de Trabajo)

NEXUS no requiere que instales código Python ni bases de datos locales. Está impulsado enteramente por *prompts* y se ejecuta directamente en tu interfaz de chat de IA favorita. Logra la persistencia del estado pasando un **Project Snapshot (YAML)** de un lado a otro.

<p align="center">
  <img src="Source/07_BRANDING/Assets/Diagrams/workflow_diagram_es.svg" alt="Diagrama de Flujo de Trabajo NEXUS" width="100%"/>
</p>

1. **Inicializar**: Cargas al Director en la Ventana 1.
2. **Delegar**: El Director te indica consultar al Arquitecto de Investigación (Research Architect).
3. **Ejecutar**: Abres la Ventana 2, cargas al Arquitecto y pegas el YAML.
4. **Retornar**: El Arquitecto te da un YAML actualizado, el cual copias y pegas de vuelta al Director en la Ventana 1.

---

## Guía de Inicio

Puedes ejecutar NEXUS en cualquier LLM moderno (GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro). Hemos compilado toda la arquitectura en 8 archivos Markdown fáciles de usar ubicados en la carpeta `DISTRIBUTION/COMPILED/`.

Elige tu plataforma de IA preferida para ver la guía de instalación:
- 📘 [Guía de Instalación para ChatGPT](DISTRIBUTION/COMPILED/INSTALL_ChatGPT.md)
- 📙 [Guía de Instalación para Claude](DISTRIBUTION/COMPILED/INSTALL_Claude.md)
- 📗 [Guía de Instalación para Gemini](DISTRIBUTION/COMPILED/INSTALL_Gemini.md)
- 📓 [Guía Universal (Otros LLMs)](DISTRIBUTION/COMPILED/INSTALL_Universal.md)

O descarga el paquete completo listo para usar:  
📦 [**Descargar Release Bundle NEXUS v1.0.1**](DISTRIBUTION/NEXUS_Runtime_v1.0.1.zip)

---

## Los Especialistas

El paquete compilado incluye los siguientes roles:

| ID | Rol | Función |
|---|---|---|
| **DIR** | `Director` | Orquesta el flujo de trabajo y mantiene el estado en YAML. |
| **SPC-01** | `Research Architect` | Diseña la metodología, hipótesis y variables. |
| **SPC-02** | `Scientific Writer` | Redacta el manuscrito siguiendo estrictamente la arquitectura. |
| **SPC-03** | `Scientific Reviewer` | Simula una revisión por pares rigurosa (Aceptar/Rechazar/Revisar). |
| **SPC-04** | `Publication Specialist` | Da formato para journals específicos y crea paquetes de envío. |
| **SPC-05** | `Integrity Auditor` | Verifica alucinaciones, ética y transparencia en el uso de IA. |

---

## 🤝 Cómo Contribuir

NEXUS es una iniciativa de código abierto para mejorar la calidad de la ciencia asistida por IA a nivel global.

Si eres un **desarrollador técnico**, **ingeniero de prompts**, o **investigador especializado** que desea añadir nuevos especialistas personalizados (ej., un plugin de Modelado Estadístico), por favor consulta nuestra [**Guía de Contribución**](CONTRIBUTING.md) y el [**Estándar de Plugins**](DISTRIBUTION/COMPILED/PLUGIN_STANDARD.md).

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.
