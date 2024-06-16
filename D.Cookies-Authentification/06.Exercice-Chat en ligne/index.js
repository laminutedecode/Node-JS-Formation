
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);


app.use(express.static('public'));


io.on('connection', (socket) => {
  console.log('Nouvelle connexion');


  socket.on('set pseudo', (pseudo) => {
    socket.pseudo = pseudo;
  });

  socket.on('chat message', (message) => {
    console.log(`Message reçu : ${message}`);
  

    const pseudo = socket.pseudo || 'Anonyme';


    io.emit('chat message', { pseudo: pseudo, message: message });
  });

  socket.on('disconnect', () => {
    console.log('Utilisateur déconnecté');
  });
});




const PORT = process.env.PORT ||3000;
server.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
