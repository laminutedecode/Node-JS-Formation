const fs = require('fs')

fs.readFile('monFichier.txt', 'utf8', (err, data) => {
  if(err){
    console.error(`Erreur lors de la lecture ${err}`);
    return;
  }
  console.log(`Contenu: ${data}`);
})


fs.writeFile('nouveauFichier.txt', 'contenu a ajouter', (err)=> {
  if(err){
    console.error(`Erreur lors de l'écriture ${err}`);
    return;
  }
  console.log('Ecriture résussi');
})

// fs.unlink('supprimer.txt', (err)=> {
//   if(err){
//     console.error(`Erreur lors de la supression ${err}`);
//     return;
//   }
//   console.log('Supression résussie');
// })

fs.rename('ancienNom.txt', 'NouveauNom.txt', (err)=> {
  if(err){
    console.error(`Erreur lors de la modification ${err}`);
    return;
  }
  console.log('Fichier renommé');
})

fs.mkdir('nouveauDossier', (err)=> {
  if(err){
    console.error(`Erreur lors de la création du dossier ${err}`);
    return;
  }
  console.log('Dossier créé');
})

fs.readdir('.', (err, fichiers)=> {
  if(err){
    console.error(`Erreur lors de la lecture ${err}`);
    return;
  }
  console.log(`Contenu: ${fichiers}`);
})