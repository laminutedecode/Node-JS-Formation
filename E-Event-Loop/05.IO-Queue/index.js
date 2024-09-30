
const fs = require('fs');

console.log('Début de l\'exécution du code');


fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erreur lors de la lecture du fichier :', err);
        return;
    }
    console.log('Contenu du fichier :', data);
});

console.log('Fin de l\'exécution du code');

