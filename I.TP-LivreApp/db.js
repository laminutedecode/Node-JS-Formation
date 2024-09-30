const mysql = require('mysql2/promise')

const bdd = mysql.createPool({
    host: 'localhost',
    user: 'root', 
    password: '',
    database: 'shop'
})


module.exports = bdd