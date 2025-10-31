# Mini Tutorial: Iniciar un Servidor Básico con Node.js y Express

Este tutorial te guiará a través de los pasos para configurar un servidor básico utilizando Node.js y el framework Express.

## Requisitos Previos

- Tener [Node.js](https://nodejs.org/) instalado en tu máquina.
- Tener un editor de texto o IDE para escribir tu código.

## Pasos para Configurar el Servidor

1. **Crea un nuevo directorio para tu proyecto** (si aún no lo has hecho):

    ```bash
    mkdir mi-servidor
    cd mi-servidor
    ```

2. **Inicializa un nuevo proyecto de Node.js**:

    ```bash
    npm init -y
    ```

3. **Instala Express**:

    ```bash
    npm install express
    ```

4. **Crea un archivo llamado `server.js`** en el directorio del proyecto y agrega el siguiente código:

    ```javascript
    const express = require('express');
    const app = express();
    const PORT = 3000;

    app.get('/', (req, res) => {
         res.send('¡Hola, mundo!');
    });

    app.listen(PORT, () => {
         console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
    ```

5. **Inicia el servidor**:

    ```bash
    node server.js
    ```

6. **Abre tu navegador** y ve a `http://localhost:3000`. Deberías ver el mensaje "¡Hola, mundo!".

## Conclusión

Has creado y ejecutado un servidor básico utilizando Node.js y Express. Puedes expandir este servidor agregando más rutas y funcionalidades según tus necesidades.