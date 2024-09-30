
function asynchronousOperation(callback) {
  setTimeout(() => {
      console.log("Opération asynchrone terminée.");
      callback(); 
  }, 2000);  
}

function callbackFunction() {
  console.log("Callback exécuté.");
}

console.log("Début de l'exécution du code.");


asynchronousOperation(callbackFunction);

console.log("Fin de l'exécution du code.");

