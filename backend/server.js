const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

// Servir archivos estáticos desde frontend/public
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public', 'main.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
