// Utilisez une bibliothèque ORM (Object-Relational Mapping) :

// Les ORM comme Sequelize ou TypeORM peuvent automatiquement gérer les requêtes SQL de manière sécurisée en utilisant des modèles d'objet plutôt que des requêtes brutes.

// Exemple avec Sequelize :

// Sequelize est une bibliothèque JavaScript qui permet de faciliter l'interaction avec les bases de données relationnelles dans des applications Node.js. C'est un ORM (Object-Relational Mapping), ce qui signifie qu'il offre une abstraction au-dessus du langage SQL traditionnel en permettant aux développeurs d'interagir avec la base de données en utilisant des modèles d'objets plutôt que des requêtes SQL brutes.

// npm install sequelize mysql2

// Si vous utilisez PostgreSQL, vous pouvez installer le pilote PostgreSQL avec la commande suivante :

// npm install sequelize pg

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('nom_de_la_base_de_donnees', 'nom_utilisateur', 'mot_de_passe', {
    host: 'localhost',
    dialect: 'mysql', // ou 'postgres', 'sqlite', etc., selon le type de base de données
  });

const Utilisateur = sequelize.define('utilisateur', {
  nom: DataTypes.STRING,
  // ... autres champs
});

// Utilisation de Sequelize pour la recherche
Utilisateur.findOne({
  where: {
    nom: 'John'
  }
}).then((utilisateur) => {
  console.log(utilisateur);
});