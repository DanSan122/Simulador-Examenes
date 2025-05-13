# 🧠 Simulador de Exámenes

Simulador de exámenes interactivo desarrollado con **Node.js** y **HTML**, ideal para prácticas académicas. Presenta preguntas de opción múltiple tomadas desde un archivo JSON, con temporizador, evaluación automática y retroalimentación visual de las respuestas.

## 📦 Estructura del Proyecto

SIMULADOR-EXAMENES/
├── backend/
│ └── server.js
├── frontend/
│ └── public/
│ ├── main.html
│ ├── preguntas.json
│ └── assets/
├── scripts/
├── package.json
└── README.md


## 🚀 Cómo ejecutar el proyecto

### 1. Instala dependencias
```bash
npm install
```
2. Ejecuta el servidor
```bash
node backend/server.js
```
3. Accede desde el navegador
   
http://localhost:8000

📋 Funcionalidades
  🎯 Selección aleatoria de 20 preguntas
  ⏱ Temporizador con cuenta regresiva
  ✅ Evaluación automática
  📊 Retroalimentación inmediata
  📁 Archivo JSON para gestionar preguntas fácilmente

📁 Archivos clave
frontend/public/main.html: Interfaz web principal
frontend/public/preguntas.json: Preguntas del examen
backend/server.js: Servidor Express para servir archivos

🤝 Autor
Desarrollado por [Daniel Sanchez Gutierrez]
📧 Contacto: [daniel.sanchez.guti@gmail.com]

📝 Licencia
Este proyecto está bajo la licencia MIT.
```bash
¿Quieres que incluya una sección para desplegar en plataformas como Vercel o Render más adelante?
```
