const EventEmitter = require('events')

class MaClass extends EventEmitter {
  constructor(){
    super();
  }
  faireQuelqueChose(){
    console.log("Faire quelque chose");
    this.emit('actionEffectuee', 'Les actions ont été effectuées avec succès')
  }
}

const monObjet = new MaClass();


monObjet.on('actionEffectuee', (message)=> {
  console.log(message);
})

monObjet.faireQuelqueChose()