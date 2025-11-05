const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const chokidar = require('chokidar');

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
    
    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

// Observar cambios en archivos del cliente usando chokidar
const watcher = chokidar.watch(['index.js', 'index.html', '*.css'], {
    ignored: /node_modules/,
    persistent: true,
    ignoreInitial: true
});

watcher.on('change', (path) => {
    console.log(`Archivo cambiado: ${path}`);
    console.log('Enviando señal de recarga a los clientes...');
    io.emit('recargar');
});

watcher.on('error', (error) => {
    console.log(`Error del watcher: ${error}`);
});

// Iniciar el servidor
server.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
    console.log('Observando cambios en archivos del cliente...');
});

// Manejar cierre limpio
process.on('SIGINT', () => {
    console.log('Cerrando servidor...');
    watcher.close();
    server.close(() => {
        process.exit(0);
    });
});

// Emitir un evento de recarga cuando el servidor se reinicie (para nodemon)
process.once('SIGUSR2', () => {
    console.log('Servidor reiniciándose...');
    // Dar tiempo para que se envíe el evento antes de cerrar
    setTimeout(() => {
        io.emit('recargar');
        setTimeout(() => {
            process.kill(process.pid, 'SIGUSR2');
        }, 100);
    }, 100);
});
