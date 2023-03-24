const express = require('express');
const router = express.Router()
const con = require('../db/dbConnection.js')

router.post('/', (req, res) => {
    const { email, password } = req.body
    if (email && password) {
        console.log(email, password)
        con.query('select * from users where email = ?', [email], (err, result) => {
            if (!err) {
                if (result[0].password == password) {
                    console.log(result[0])
                    res.cookie('ID', result[0].id, { maxAge: 172800 * 1000 / 2 })
                    res.send(result[0])
                } else {
                    res.send({ msg: 'Wrong password' })
                }
            } else {
                res.send({ msg: err })
            }
        })
    }
    else {
        res.send({ msg: "plases insert email and password" })
    }
})

module.exports = router