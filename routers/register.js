const express = require('express')
const router = express.Router()

const con = require('../db/dbConnection.js')



router.post('/', (req, res) => {
    const { email, password } = req.body
    if (email && password) {
        if(email.match("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$")){
            con.query('insert into users (email,password) values(? ,?)', [email, password], (err, result) => {
                if (!err) {
                    res.send(result)
                } else {
                    if (err.errno == 1062) {
                        res.send({ msg: 'this email is exist, try another' })
                    } else {
                        res.send({msg:err})
                    }
                }
            })
        }
        else{
            res.send({msg:"email is not valid!"})
        }

    } else {
        res.send({ msg: 'you must insert email and password' })
    }

})

module.exports = router