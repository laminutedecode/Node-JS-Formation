// function fonctionSync(){
//   console.log("debut de la fonction synchrone");
//   for(let i = 0; i < 5; i++){
//     console.log(`Traitement des données ${i}`);
//   }
//   console.log("Fin de la fonction synchrone");
// }

// console.log("Avant appel fonction synchrone");
// fonctionSync()
// console.log("Apres appel fonction synchrone");

function fonctionAsync(){
  console.log("Debut de fonction");
  setTimeout(()=> {
    console.log("Traitement 1");
  }, 3000);
  setTimeout(()=> {
    console.log("Traitement 2");
  }, 6000);
  setTimeout(()=> {
    console.log("Traitement 3");
  }, 9000);
  console.log("Fin de la fonction");
}

console.log("Avant appel fonction");
fonctionAsync()
console.log("Apres appel fonction");



