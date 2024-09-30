const http = require('http')
const fs = require('fs')


const PORT = 3000
const FILE_PATH = 'index.html'

const server = http.createServer((req, res)=> {
  fs.readFile(FILE_PATH, 'utf8', (err, data)=> {
    if(err){
      res.writeHead(500, {'Content-Type': 'text/plain'})
      res.end('Erreur interne dans le serveur')
    }
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(data)
  })
})


server.listen(PORT, ()=> {
  console.log(`Le port est à l'écoute sur le port ${PORT}`);
})