

console.log('Début de l\'exécution du code');


setTimeout(() => {
    console.log('Tâche asynchrone 1 terminée');
}, 0);


Promise.resolve().then(() => {
    console.log('Tâche asynchrone 2 terminée');
});

console.log('Fin de l\'exécution du code');

