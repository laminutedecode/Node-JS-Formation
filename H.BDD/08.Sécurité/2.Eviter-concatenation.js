// Évitez l'concaténation de chaînes pour construire des requêtes :

// Ne concaténez pas manuellement des chaînes pour construire des requêtes SQL. Utilisez plutôt des paramètres ou des placeholders. Voici un exemple avec mysql :


const nomUtilisateur = "John";
const queryString = 'SELECT * FROM utilisateurs WHERE nom = ?';
connection.query(queryString, [nomUtilisateur], (error, results) => {
  if (error) throw error;
  console.log(results);
});