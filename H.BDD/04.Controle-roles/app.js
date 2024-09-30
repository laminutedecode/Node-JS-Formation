// Le contrôle d'accès basé sur les rôles est une pratique courante dans le développement d'applications pour garantir que les utilisateurs ont uniquement accès aux ressources autorisées en fonction de leurs rôles. Voici un exemple simple de contrôle d'accès basé sur les rôles avec Node.js, en utilisant Express et un middleware personnalisé.

// Assumons que vous ayez déjà Node.js installé, ainsi que le gestionnaire de packages npm.

// Commencez par créer un nouveau projet Node.js et installez les dépendances nécessaires :

// mkdir controle-acces-based-roles
// cd controle-acces-based-roles
// npm init -y
// npm install express body-parser


// Importation du module 'express' qui simplifie la création de serveurs web en Node.js
const express = require('express');

// Importation du module 'body-parser' qui permet d'analyser le corps des requêtes HTTP, notamment les données JSON
const bodyParser = require('body-parser');

// Création d'une application Express
const app = express();

// Définition du port sur lequel le serveur écoutera les requêtes
const PORT = 3000;

// Utilisation du middleware 'body-parser' pour analyser les données JSON dans les requêtes
app.use(bodyParser.json());

// Exemple de base de données d'utilisateurs avec des rôles
const users = [
  { id: 1, username: 'admin', role: 'admin' },
  { id: 2, username: 'user', role: 'user' },
];

// Middleware de contrôle d'accès basé sur les rôles
const checkRole = (role) => {
  return (req, res, next) => {
    // Recherche de l'utilisateur dans la base de données en fonction de son ID dans la requête
    const user = users.find(u => u.id === req.userId);

    // Vérification si l'utilisateur a le rôle requis
    if (user && user.role === role) {
      next(); // L'utilisateur a le rôle requis, passez à la prochaine middleware/route
    } else {
      // Réponse avec un statut 403 (Accès refusé) si l'utilisateur n'a pas le rôle requis
      res.status(403).json({ error: 'Accès refusé' });
    }
  };
};

// Middleware pour simuler l'authentification
app.use((req, res, next) => {
  // Simulons un utilisateur authentifié avec un certain rôle (ID 1 pour l'admin)
  req.userId = 1;
  next();
});

// Définition de routes avec contrôle d'accès basé sur les rôles
app.get('/admin', checkRole('admin'), (req, res) => {
  // Réponse JSON indiquant l'accès autorisé à la zone d'administration
  res.json({ message: 'Accès autorisé à la zone d\'administration' });
});

app.get('/user', checkRole('user'), (req, res) => {
  // Réponse JSON indiquant l'accès autorisé à la zone utilisateur
  res.json({ message: 'Accès autorisé à la zone utilisateur' });
});

// Lancement du serveur Express et écoute des requêtes sur le port spécifié
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});



