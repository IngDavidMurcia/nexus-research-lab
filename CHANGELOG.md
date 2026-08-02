# Changelog - NEXUS Research Lab

## [1.0.1] - 2026-08-02
### Añadido
- **NACP Implementation**: Archivos Runtime completamente separados para implementar la arquitectura multi-ventana prometida por el protocolo (Director + 5 Especialistas).
- **Project Snapshot Protocol**: Se introdujo el sistema de persistencia basado en YAML para garantizar la trazabilidad stateless entre sesiones de chat.
- **Install Guides**: Añadidas guías de instalación multiplataforma para Gemini, ChatGPT, Claude y formato Universal.
- **Plugin Standard**: Definición fundacional de `PLUGIN_STANDARD.md` para desarrolladores externos.
- **Catálogo de Especialistas**: Creación de `SPECIALISTS_CATALOG.md` como registro centralizado.

### Cambiado
- **Refactorización MASIVA de Runtime**: Los extensos y densos documentos Source (`01_CORE`, `02_DIRECTOR`, `03_SPECIALISTS`, `04_SHARED_KNOWLEDGE`) se comprimieron y compilaron en 8 archivos ejecutables `.md` optimizados para ingestión en ventanas de contexto LLM (>70% densidad semántica).
- **UX & Branding**: Nuevo archivo `POR_QUÉ_NEXUS.md` para justificar filosóficamente ante los usuarios finales la necesidad del cambio de ventana como garantía de rigor científico en lugar de "fricción técnica".

## [1.0.0] - 2026-07-28
### Añadido
- Initial Release de toda la documentación arquitectónica (Source docs).
- Especificación de Roles, RBAC, SQI (Scientific Quality Index), Protocolo NACP y Flujos de Trabajo.
