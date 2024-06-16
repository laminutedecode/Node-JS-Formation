// Assurez-vous d'avoir Node.js installé sur votre machine, puis installez le module MySQL à l'aide de npm (Node Package Manager) en exécutant la commande suivante dans votre terminal :

// npm install mysql

// Configurer la connexion à la base de données :
// Dans votre fichier JavaScript (par exemple, app.js), importez le module mysql et configurez la connexion à la base de données en fournissant les détails appropriés (nom d'utilisateur, mot de passe, hôte, nom de la base de données, etc.) :

const mysql = require('mysql');

// Configurer la connexion à la base de données
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'votre_utilisateur_mysql',
    password: 'votre_mot_de_passe_mysql',
    database: 'nom_de_votre_base_de_donnees'
});

// Établir la connexion à la base de données
connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
        return;
    }
    console.log('Connexion à la base de données réussie');
});
