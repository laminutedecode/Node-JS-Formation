const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root', 
    password: '',
    database: 'employes_db'
})

// mysqlPool.query("SELECT 1")
// .then(data => console.log("Connexion à la base de donnée réussie"))
// .catch(err=>console.log('Echec de la connexion à la base de données. \n'+err))

module.exports = mysqlPool