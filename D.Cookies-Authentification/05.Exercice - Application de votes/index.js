const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = 4000;

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('utilisateur connecté');


  socket.on('vote', (option) => {
    io.emit('Modification vote', option);
  });

  socket.on('disconnect', () => {
    console.log('utilisateur déconnecté');
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
