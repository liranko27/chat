const dbConfig = require('./dbConfig.js')
const mysql = require('mysql2')
const con = mysql.createConnection(dbConfig)

con.connect(() => {
    console.log('connected to DB!')
})

module.exports =con