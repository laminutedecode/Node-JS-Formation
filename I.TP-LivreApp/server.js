const express = require('express');
const path = require('path');
const bodyParser =   require('body-parser');
// Importation du module 'db' depuis le fichier './db' pour accéder à la base de données.
const db = require('./db'); 
// Importation des routes relatives aux livres
const booksRoutes = require('./routes/emp.router.js');


const app = express();

const port = 3000;


// Middleware pour servir des fichiers statiques depuis le dossier public
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json())
// Utilisation des routes liées aux livres sous le préfixe '/api/livres'.
app.use('/api/livres', booksRoutes);

app.use((err, req, res, next)=> {
    console.log(err);
    res.status(err.status || 500).send('Il y a eu une erreur')
})
// ########################
// Démarrer le serveur et
// Exécution d'une requête de test à la base de données.
// ########################
db.query("SELECT 1")
    .then(() => {
        // En cas de succès de la connexion à la base de données, démarrage du serveur.
        console.log("Connexion à la base de données réussie.");
        app.listen(port, () => console.log(`Le serveur démarre sur le port http://localhost:${port}.`));
    })
    .catch(err => console.log('Échec de la connexion à la base de données. \n' + err));



