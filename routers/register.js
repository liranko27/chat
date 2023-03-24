const express = require('express')

const mysql = require('mysql2')

const con = mysql.createConnection({
    host: "localhost",
    database: "chat",
    user: "root",
    password: "L1230"
})

con.connect(() => {
    console.log('connected to DB!')
})
const router = express.Router()


router.post('/', (req, res) => {
    const { email, password } = req.body
    if (email && password) {
        console.log(email, password)
        con.query('insert into users (email,password) values(? ,?)', [email, password], (err, result) => {
            if (!err) {
                res.send(result)
            } else {
                if (err.errno == 1062) {
                    res.send({ msg: 'this email is exist, try another' })
                } else {
                    res.send(err)
                }
            }
        })

    } else {
        res.send({ msg: 'you must insert email and password' })
    }

})

module.exports = router