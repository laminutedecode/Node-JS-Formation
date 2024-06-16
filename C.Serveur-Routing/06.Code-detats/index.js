const express = require('express')
const app = express()
const PORT = 3000


app.use((err, req, res, next)=> {
  console.error(err.stack)
  res.status(500).send('traitement erreur')
})

app.get('/', (req, res)=> {
  try {
    const result = 10 / 0
    res.status(200).send(`Resultat: ${result}`)
  }catch(error){
    res.status(500).send(`Une erreur est survenue`)
  }
})

app.listen(PORT, ()=> {
  console.log(`Le serveur est à l'écoute sur le port ${PORT}`);
})