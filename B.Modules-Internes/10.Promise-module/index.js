const fsPromises = require('fs').promises;



fsPromises.readFile('monFichier.txt', 'utf8')
.then((data)=> {
  console.log(data);
})
.catch((err)=> {
  console.error(err)
})

async function lireFichier(){
  try {
    const data = await fsPromises.readFile('monFichier.txt', 'utf8');
    console.log(data);
  } catch(err) {
    console.error(err)
  }
}

lireFichier()