
const http = require('http');

const server = http.createServer((req, res) => {

    res.end('Hello World!');
});

server.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
});


function closeServer() {
    console.log('Fermeture du serveur...');
    server.close(() => {
        console.log('Serveur fermé.');
    });
}

process.on('SIGINT', () => {
    closeServer();
});

