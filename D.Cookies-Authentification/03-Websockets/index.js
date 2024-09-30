
const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('Un client s\'est connecté');

});

server.listen(3000, () => {
  console.log('Serveur écoutant sur le port 3000');
});



const socket = io('http://localhost:3000'); // Remplacez l'URL par celle de votre 
io.on('connection', (socket) => {
    socket.on('chat message', (message) => {
      io.emit('chat message', message); // Diffusez le message à tous les clients connectés
    });
  });

socket.on('chat message', (message) => {
  console.log('Message reçu:', message);
});


socket.emit('chat message', 'Bonjour, monde !');
  

io.on('connection', (socket) => {
    console.log('Un client s\'est connecté');
  
    socket.on('disconnect', () => {
      console.log('Un client s\'est déconnecté');
    });
  });