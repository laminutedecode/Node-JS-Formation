// Importer Chai pour les assertions
const chai = require('chai');
const expect = chai.expect;

// Importer le module ou la fonction à tester
const { additionner } = require('./mathOperations');

// Décrire les tests avec Mocha
describe('Tests pour la fonction additionner', () => {
    it('Devrait retourner la somme de deux nombres', () => {
      // Utiliser Chai pour écrire des assertions
      expect(additionner(2, 3)).to.equal(5);
      expect(additionner(-1, 1)).to.equal(0);
      expect(additionner(0, 0)).to.equal(0);
    });
  
    it('Devrait gérer les nombres négatifs', () => {
      expect(additionner(-5, 3)).to.equal(-2);
    });
  
    // Ajouter d'autres tests au besoin
  });


//   Ensuite, vous pouvez exécuter ces tests en utilisant la commande npx mocha test.js ou en ajoutant un script dans votre fichier package.json comme décrit dans la réponse précédente.

//   Assurez-vous d'ajuster ces exemples en fonction de vos besoins spécifiques et des fonctionnalités que vous souhaitez tester.

// faire npx mocha test