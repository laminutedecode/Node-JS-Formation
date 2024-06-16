

const MyModule = require('./MyModule')

function addWithLogging(a,b){
  console.log(`Adding ${a} and ${b}`);
  return MyModule.add(a, b)
}

module.exports = {addWithLogging};

console.log('Before');
const result = addWithLogging(2,3)
console.log('After');
console.log(`Resultat: ${result}`);