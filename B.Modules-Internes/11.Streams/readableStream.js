const fs = require('fs')

const readableStream = fs.createReadStream('monFichier.txt', 'utf8')

readableStream.on('data', (chunk)=> {
  console.log(`Chuk des data: ${chunk}`);
})


readableStream.on('end', ()=> {
  console.log("Operation terminée");
})

readableStream.on('error', (err)=> {
  console.error(err)
})