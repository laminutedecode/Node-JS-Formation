Mocha et Chai sont des frameworks de test unitaire populaires pour JavaScript, souvent utilisés conjointement pour tester des applications Node.js et des applications côté client. Mocha est un framework de test qui fournit une structure pour organiser vos tests et Chai est une bibliothèque d'assertions qui permet d'écrire des assertions de manière expressive.

Voici une explication générale sur la manière d'écrire et d'exécuter des tests unitaires avec Mocha et Chai :

Installation :

npm install --save-dev mocha chai

Créer test.js
mocha
faire mathoperations.js

On peut egalement Configurer les scripts npm :
Ajoutez des scripts dans votre fichier package.json :

"scripts": {
  "test": "mocha"
}

et vous pourrez  maintenant exécuter les tests avec npm test.