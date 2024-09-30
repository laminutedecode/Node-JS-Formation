function faireQuelqueChose(callback) {
  setTimeout(function(){
    callback("resultat de l'operation");
  }, 2000)
}


faireQuelqueChose(function(resultat){
  console.log(resultat);
})