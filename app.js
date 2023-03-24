const express = require('express');
const port = 5656;
const app = express();


app.get('/',(req,res)=>{
    res.send('Omerha Oved!')
});

app.listen(port, ()=>{console.log(`server is listening on port ${port}`)});

