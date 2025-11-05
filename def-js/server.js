const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const puerto = 3000;

// Crear servidor HTTP y conectar socket.io
const server = http.createServer(app);
const io = socketIo(server);

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Escuchar conexiones de socket.io
io.on('connection', (socket) => {
    console.log('Cliente conectado');
});

// Iniciar el servidor
server.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});

// Emitir un evento de recarga cuando el servidor se reinicie
process.once('SIGUSR2', () => {
    io.emit('recargar'); // Emitir el evento a todos los clientes conectados
    process.kill(process.pid, 'SIGUSR2'); // Permitir que nodemon reinicie el servidor
});