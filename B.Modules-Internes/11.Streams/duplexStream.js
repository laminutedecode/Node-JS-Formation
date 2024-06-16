const {Duplex} = require('stream')

const myDuplexStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(`Données recues:${chunk.toString()}`);
    callback()
  },
  read(){

  }
})


myDuplexStream.write('La minute de code')
myDuplexStream.end()

myDuplexStream.on('data', (chunk)=> {
  console.log(`Data: ${chunk.toString()}`);
})

myDuplexStream.on('end', ()=> {
  console.log('Operation terminée');
})