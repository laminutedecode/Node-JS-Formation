// Utilisez des requêtes préparées avec des paramètres :

// Utilisez les requêtes préparées fournies par votre bibliothèque SQL pour éviter l'injection SQL. Voici un exemple avec la bibliothèque mysql :


const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ma_base_de_donnees'
});

// Utilisation d'une requête préparée
const userId = 1;
const queryString = 'SELECT * FROM utilisateurs WHERE id = ?';
connection.query(queryString, [userId], (error, results) => {
  if (error) throw error;
  console.log(results);
});

connection.end();