// Importation du module 'express' pour créer une application Express.
const express = require('express'),
// Création de l'application Express.
app = express(),
 bodyparser = require('body-parser');

require('express-async-errors')

// Importation du module 'db' depuis le fichier './db' pour accéder à la base de données.
const db = require('./db.js');

// Importation des routes relatives aux employés depuis le fichier './controlers/employes.controlers.js'.
const employesRoutes = require('./controlers/emp.controlers.js');


app.use(bodyparser.json())
// Utilisation des routes liées aux employés sous le préfixe '/api/employes'.
app.use('/api/employes', employesRoutes);

app.use((err, req, res, next)=> {
    console.log(err);
    res.status(err.status || 500).send('Il y a eu une erreur')
})

// Exécution d'une requête de test à la base de données.
db.query("SELECT 1")
    .then(() => {
        // En cas de succès de la connexion à la base de données, démarrage du serveur.
        console.log("Connexion à la base de données réussie.");
        app.listen(3000, () => console.log('Le serveur démarre sur le port 3000.'));
    })
    .catch(err => console.log('Échec de la connexion à la base de données. \n' + err));
