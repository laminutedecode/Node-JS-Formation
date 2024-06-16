const data = require('./data.json')

data.produits.forEach(produit => {
  console.log(`ID : ${produit.id}, Nom: ${produit.nom}, Prix: ${produit.prix}, Stock: ${produit.stock}`);
})