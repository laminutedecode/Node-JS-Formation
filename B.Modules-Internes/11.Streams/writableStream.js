const fs = require('fs')


const writableStream = fs.createWriteStream('monFichier.txt', 'utf8');


writableStream.write('Bonjour, ')
writableStream.write('tous le monde!')
writableStream.end()


writableStream.on('finish', ()=> {
  console.log("Opération terminée");
})

writableStream.on('error', (err)=> {
  console.error(err)
})