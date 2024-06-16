


const crypto = require('crypto');



const dataToHash = 'Hello, World!';

// Fonction pour hacher les données de manière asynchrone
function hashDataAsync(data, callback) {
    // Utilisation de la méthode `crypto.pbkdf2` pour générer un hachage asynchrone
    crypto.pbkdf2(data, '', 100000, 64, 'sha256', (err, derivedKey) => {
        if (err) {
            callback(err);
        } else {
            callback(null, derivedKey.toString('hex'));
        }
    });
}

hashDataAsync(dataToHash, (err, hashedData) => {
    if (err) {
        console.error('Erreur lors du hachage :', err);
    } else {
        console.log('Données hachées :', hashedData);
    }
});
