const express = require('express');
const con = require('../db/dbConnection.js')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('LOGIN')
})

module.exports = router