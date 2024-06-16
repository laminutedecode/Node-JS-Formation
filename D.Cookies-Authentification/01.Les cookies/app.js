const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Utilisez cookie-parser middleware
app.use(cookieParser());

// Route pour définir le cookie
app.get('/set-cookie', (req, res) => {
  // Définir un cookie avec le nom 'monCookie' et la valeur 'valeurDuCookie'
  // a une durée de vie de 900000 millisecondes, ce qui équivaut à 15 minutes.
  res.cookie('monCookie', 'valeurDuCookie', { maxAge: 900000, httpOnly: true });
  res.send('Cookie défini avec succès');
});

// Route pour obtenir la valeur du cookie
app.get('/get-cookie', (req, res) => {
  // Récupérer la valeur du cookie 'monCookie'
  const valeurDuCookie = req.cookies.monCookie;
  
  if (valeurDuCookie) {
    res.send(`Valeur du cookie : ${valeurDuCookie}`);
  } else {
    res.send('Cookie non trouvé');
  }
});

// Démarrer le serveur sur le port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
