const dbConfig = require('./dbConfig.js')
const mysql = require('mysql2')


const con = mysql.createConnection(dbConfig)
con.connect((err)=>{
    if(!err){
        console.log('connected to DB')
    }else console.log(err)
})
module.exports = con