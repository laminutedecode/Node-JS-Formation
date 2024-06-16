const http = require('http');
const fs = require('fs');

const PORT = 3000;
const FILE_PATH = 'data.json'

const server = http.createServer((req, res)=> {
  fs.readFile(FILE_PATH, 'utf8', (err, data)=> {
    if(err){
      res.writeHead(500, {"Content-Type": 'text/plain'});
      res.end("Erreur interne du serveur");
      return;
    }
    const jsonData = JSON.parse(data);
    res.writeHead(200, {"Content-Type" : 'application/json'});
    res.end(JSON.stringify(jsonData));
  })
})

server.listen(PORT, ()=> {
  console.log(`Le serveur est à l'écoute sur le port ${PORT}`);
})