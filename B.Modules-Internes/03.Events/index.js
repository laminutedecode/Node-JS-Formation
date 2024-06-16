const EventEmitter = require('events')


const monEmitter = new EventEmitter();


// monEmitter.on('eventNom', ()=> {
//   console.log('Un événement du nom de eventNom à été émis');
// })

function handler(){
  console.log('Ceci ne sera pas émis');
}
monEmitter.on('eventNom', handler)
monEmitter.removeListener('eventNom', handler)

monEmitter.once('eventNom', ()=> {
  console.log('Cette événement sera émis une seule fois');
})



monEmitter.emit('eventNom')