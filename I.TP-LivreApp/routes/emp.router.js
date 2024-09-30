// Importation du module 'express' pour la création d'une application Express.
const express = require('express');
// Création d'un routeur Express qui va gérer les différentes routes pour ce module.
const router = express.Router();
// Importation du service 'emp.service' depuis le répertoire '../services' pour gérer la logique métier.
const requests = require('../requests/emp_requests');




  

// ###############
// Route Affichage livres
// ###############
// Route pour gérer les requêtes GET sur l'URL 'https://localhost:3000/api/books'.
// Cette route renvoie la liste des employés en utilisant la fonction asynchrone.
router.get('/', async (req, res) => {
    // Appel à la fonction 'allBooks' du service pour récupérer la liste des livres.
    const books = await requests.allBooks();
    // Envoi de la liste des livres en réponse à la requête.
    res.send(books);
});


// ###############
// Route Affichage livre
// ###############
router.get('/:id', async (req, res) => {
    const book = await requests.singleBook(req.params.id);
    if(book == undefined){
        res.status(404).json(`Il n'y a aucun enregistrement qui possède l'ID:  ${req.params.id}`)
    }else {
        res.send(book);
    }
});

// ###############
// Route Supprimer livre
// ###############
router.delete('/:id', async (req, res) => {
    const affectedRows = await requests.deleteBook(req.params.id);
    if(affectedRows == 0){
        res.status(404).json(`Il n'y a aucun enregistrement qui possède l'ID:  ${req.params.id}`)
    }else {
        console.log(affectedRows);
        res.send('Supression réussit');
    }
});

// ###############
// Route Ajouter livre
// ###############
router.post('/', async (req, res) => {
await requests.addOrEditBook(req.body);
res.status(201).send('Enregistrement réussit')
});


// ###############
// Route Modifier livre
// ###############
router.put('/:id', async (req, res) => {
const affectedRows = await requests.addOrEditBook(req.body, req.params.id);
if(affectedRows == 0){
    res.status(404).json(`Il n'y a aucun enregistrement qui possède l'ID:  ${req.params.id}`)
}else {
    console.log(affectedRows);
    res.send('Modifications comfirmées')
}
})


module.exports = router;
