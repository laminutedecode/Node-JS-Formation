const http = require('http')
const fs = require('fs')
const handlebars = require('handlebars')

const PORT = 3000
const JSON_FILE_PATH = 'data.json'
const TEMPLATE_FILE_PATH= 'template.html'


const server = http.createServer((req, res)=> {
  fs.readFile(JSON_FILE_PATH, 'utf8', (err, jsonData) => {
    if(err){
      res.writeHead(500, {"Content-Type": "text/plain"})
      res.end('Une erreur est survenue')
      return;
    }
    fs.readFile(TEMPLATE_FILE_PATH, 'utf8', (err, templateData)=> {
      if(err){
        res.writeHead(500, {"Content-Type": "text/plain"})
        res.end('Une erreur est survenue')
        return;
      }
      const template = handlebars.compile(templateData);
      const data = JSON.parse(jsonData);
      const html = template(data);

      res.writeHead(200, {"Content-Type": "text/html"})
      res.end(html)
    })
  })
})



server.listen(PORT, ()=> {
  console.log(`Le port est à l'écoute sur le port ${PORT}`);
})