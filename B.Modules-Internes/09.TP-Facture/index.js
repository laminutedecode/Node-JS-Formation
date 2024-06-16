const fs = require('fs')

function genererFacture(){
  const facture = {
    client: 'Nom du client',
    articles: [
      {nom: "Article 1", quantite: 2, prixUnitaire: 10},
      {nom: "Article 2", quantite: 1, prixUnitaire: 20},
    ],
    montantTotal : 0,
  };
  facture.montantTotal = facture.articles.reduce((total, article) => total + (article.quantite * article.prixUnitaire), 0);

  sauvegarderFacture('facture.json', facture)
}

function sauvegarderFacture(monFichier, facture){
  fs.writeFile(monFichier, JSON.stringify(facture, null, 2), (err)=> {
    if(err){
      console.error(`Une erreur est survenue ${err}`)
    }else {
      console.log(`Fichier enregistrer sous le nom ${monFichier}`);
    }
  })
}

genererFacture()