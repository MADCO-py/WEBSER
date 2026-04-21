const http = require("http");
const fs = require("fs").promises;
const path = require("path");

const PORT = 3000;

const server = http.createServer(async (req, res) => {

  
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Servidor funcionando correctamente");
    }


    else if (req.url === "/info") {
        const data = {
            mensaje: "Información del servidor",
            curso: "Sistemas y Tecnologías Web",
            tecnologia: "Node.js"
        };

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
    }

    //(texto plano)
    else if (req.url === "/saludo") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hola, bienvenido a mi servidor Node!");
    }

    // (JSON)
    else if (req.url === "/api/status") {
        const status = {
            ok: true,
            status: "running",
            puerto: PORT
        };

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(status));
    }

    // 404 dinámico
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end(`Ruta ${req.url} no encontrada`);
    }
});
