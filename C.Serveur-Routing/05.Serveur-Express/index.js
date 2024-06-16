const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req, res)=> {
  res.send('Bienvenue sur le serveur express')
})

app.listen(PORT, ()=> {
  console.log(`Le serveur est à l'écoute sur le port ${PORT}`);
})