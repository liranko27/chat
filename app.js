const express = require('express');
const port = 5657;
const app = express();
const bodyParser = require('body-parser')
const registerRouter = require('./routers/register.js')


app.use(bodyParser.json());
app.use('/register', registerRouter)

app.get('/', (req, res) => {
    res.send('Omerha Oved!')
});



app.listen(port, () => { console.log(`server is listening on port ${port}`) });

