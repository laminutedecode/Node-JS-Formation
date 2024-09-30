// Importation du module 'express' pour la création d'une application Express.
const express = require('express');

// Création d'un routeur Express qui va gérer les différentes routes pour ce module.
const router = express.Router();

// Importation du service 'emp.service' depuis le répertoire '../services' pour gérer la logique métier.
const service = require('../services/emp.service');

// Route pour gérer les requêtes GET sur l'URL 'https://localhost:3000/api/employes'.
// Cette route renvoie la liste des employés en utilisant la fonction asynchrone.
router.get('/', async (req, res) => {
    // Appel à la fonction 'getAllEmployes' du service pour récupérer la liste des employés.
    const employes = await service.getAllEmployes();
    // Envoi de la liste des employés en réponse à la requête.
    res.send(employes);
});

router.get('/:id', async (req, res) => {
    const employe = await service.getEmployeById(req.params.id);
    if(employe == undefined){
        res.status(404).json(`Il n'y a aucun enregistrement qui possède l'ID:  ${req.params.id}`)
    }else {
        res.send(employe);
    }
});
router.delete('/:id', async (req, res) => {
    const affectedRows = await service.deleteEmploye(req.params.id);
    if(affectedRows == 0){
        res.status(404).json(`Il n'y a aucun enregistrement qui possède l'ID:  ${req.params.id}`)
    }else {
        console.log(affectedRows);
        res.send('Supression réussit');
    }
});

router.post('/', async (req, res) => {
await service.addOrEditEmployee(req.body);
res.status(201).send('Enregistrement réussit')
});


router.put('/:id', async (req, res) => {
const affectedRows = await service.addOrEditEmployee(req.body, req.params.id);
if(affectedRows == 0){
    res.status(404).json(`Il n'y a aucun enregistrement qui possède l'ID:  ${req.params.id}`)
}else {
    console.log(affectedRows);
    res.send('Modifications comfirmées')
}
})

// Exportation du routeur pour pouvoir l'utiliser dans d'autres fichiers.
module.exports = router;
